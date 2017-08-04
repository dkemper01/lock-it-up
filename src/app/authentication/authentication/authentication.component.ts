import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { InputConfirmationValidator } from '../../shared/inputConfirmationValidator';
import { Random } from '../../shared/randomNumberGenerators';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/throttleTime';

@Component({
  selector: 'giaa',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, AfterViewInit {

  authForm: FormGroup;
  private _passwordFocused: boolean;
  private _confirmPasswordFocused: boolean;
  public rotateBy: number;
  public locked: boolean;
  public isShowPasswordActive: boolean;
  public isShowConfirmPasswordActive: boolean;
  public isClearPasswordActive: boolean;
  public isClearConfirmPasswordActive: boolean;

  @ViewChild('dial') dialRef: ElementRef;
  @ViewChild('unlockedArm') unlockedArmRef: ElementRef;
  @ViewChild('lockedArm') lockedArmRef: ElementRef;

  get passwordFocused():boolean {
      return this._passwordFocused;
  }
  set passwordFocused(focused: boolean) {
      this._passwordFocused = focused;
  }

  get confirmPasswordFocused():boolean {
      return this._confirmPasswordFocused;
  }
  set confirmPasswordFocused(focused: boolean) {
      this._confirmPasswordFocused = focused;
  }

  get passwordControl() {
    return this.authForm.get('password');
  }

  get confirmPasswordControl() {
    return this.authForm.get('confirmPassword');
  }

  private passwordMessage: string;
  private confirmPasswordMessage: string;
  private confirmationValidator: InputConfirmationValidator;
  private random: Random;

  /*
  * @property validationMessages
  * Input validation messages where the key is a validation rule name, and value is the message we want to display.
  */
  private validationMessages = {
    required: 'Please enter your password.',
    match: 'The confirmation password must match the password above.'
  };

  constructor(private fb: FormBuilder) {  }

  ngOnInit() {
    this.rotateBy = 300;
    this.confirmationValidator = new InputConfirmationValidator();
    this.authForm = this.fb.group({
        password: ['', [Validators.required,
                            Validators.minLength(3),
                            Validators.maxLength(50)]],
        confirmPassword: ['', Validators.required],

    }, { validator: this.confirmationValidator.passwordMatcher });

    const passwordControl = this.authForm.get('password');
    const confirmPasswordControl = this.authForm.get('confirmPassword');
    const random = new Random();

    passwordControl.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe((value) => { 
        this.setPasswordMessage(passwordControl); 
        if (confirmPasswordControl.value.length > 0) {
          this.lockTransition();
        }
      });

    confirmPasswordControl.valueChanges
      .merge(confirmPasswordControl.valueChanges.throttleTime(1000), confirmPasswordControl.valueChanges.debounceTime(1000))
      .subscribe((value) => { 
        this.rotateBy = -this.rotateBy;
        TweenMax.to(this.dialRef.nativeElement, 1, { transformOrigin: "center", rotation: (this.rotateBy + random.getRandomInt(1, 100)), ease: Back.easeOut.config(3) });
          this.setConfirmPasswordMessage(confirmPasswordControl); 
          this.lockTransition();
      });
  }

  ngAfterViewInit() {
    
  }

  private login(): void {

  }

  public focus(property: string): void {
    this[property] = true;
  }

  public focusOut(property: string, value: string): void {
    if (!value) {
      this[property] = false;
    }
  }

  public show(formControlName: string) {
    if (formControlName === 'password') {
      this.isShowPasswordActive = !this.isShowPasswordActive;
    } else {
      this.isShowConfirmPasswordActive = !this.isShowConfirmPasswordActive;
    }
  }

  public clear(formControlName: string) {
    if (formControlName === 'password') {
      this.authForm.patchValue({
        password: ""
      });
    } else {
      this.authForm.patchValue({
        confirmPassword: ""
      });
    }
  }

  public clearState(formControlName: string, down: boolean) {
    if (formControlName === 'password') {
      this.isClearPasswordActive = down;
    } else {
      this.isClearConfirmPasswordActive = down;
    }
  }

    /* 
  * @method setPasswordMessage
  * Display a validation message if the input element is touched or dirty, and has errors.
  * The errors collection uses the validation rule name as the key.  Our data structure above
  * does too.  
  * @param {AbstractControl} c
  */
  setPasswordMessage(c: AbstractControl): void {
    this.passwordMessage = '';
    this.passwordMessage = this.getErrorMessage(c);
  }

  setConfirmPasswordMessage(c: AbstractControl): void {
    this.confirmPasswordMessage = ''
    this.confirmPasswordMessage = this.getErrorMessage(c.parent);
  }

  /*
  * @method lockTransition
  * Performs the GSAP MorphSVG transition from the unlocked arm to the locked arm and vice versa, 
  * depending on the state of the input match.
  */
  private lockTransition() {

    if ((this.confirmPasswordControl.value.length > 0 && this.passwordControl.value.length > 0) &&
      (this.confirmPasswordControl.value === this.passwordControl.value)) {
      TweenMax.to(this.unlockedArmRef.nativeElement, 1, { morphSVG: { shape: '#lockedArm'} });
      this.locked = true;
    } else if (this.locked) {
      TweenMax.to(this.unlockedArmRef.nativeElement, 1, { morphSVG: { shape: '#unlockedArm'} });     
    }
  }

  /*
  * @method getErrorMessage
  * Fetch the error message from the messages object using the key from the 
  * errors collection of the AbstractControl object.
  */
  private getErrorMessage(c: AbstractControl): string {
    let msg = '';
    if ((c.touched || c.dirty) && c.errors) {
      msg = Object.keys(c.errors).map(key => this.validationMessages[key]).join(' ');
    }

    return msg;
  }



}
