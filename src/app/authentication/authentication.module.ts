import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HoverClassDirective } from '../hover-class.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthenticationComponent
  ],
  declarations: [
    AuthenticationComponent, 
    HoverClassDirective
  ]
})
export class AuthenticationModule { }
