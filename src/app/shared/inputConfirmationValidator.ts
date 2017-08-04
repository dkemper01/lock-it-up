import { AbstractControl } from '@angular/forms';
/*
* @class InputConfirmationValidator
* Input confirmation validator for Reactive forms. 
*/
export class InputConfirmationValidator {

    passwordMatcher(c: AbstractControl) : { [key: string]: boolean } | null {
        let passwordControl = c.get('password');
        let confirmPasswordControl = c.get('confirmPassword');

        if (passwordControl.pristine || confirmPasswordControl.pristine) {
            return null;
        }

        return (passwordControl.value === confirmPasswordControl.value) ? 
            null : 
            { 'match': true };   // adds the rule to the errors collection for the *form group*, in this case.  
    }
}