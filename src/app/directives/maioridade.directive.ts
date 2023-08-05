import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[maioridadeValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaioridadeDirective,
    multi: true
  }]
})
export class MaioridadeDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const nascimento = control.value
    const anoNascimento = new Date(nascimento).getFullYear()
    const anoAtual = new Date().getFullYear()
    return anoNascimento + 18 <= anoAtual || nascimento == '' ? null : {'maioridadeValidator': true}
  }

}
