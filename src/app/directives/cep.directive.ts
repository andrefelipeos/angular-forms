import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { CepService } from '../services/cep.service';

@Directive({
  selector: '[cepValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: CepDirective,
    multi: true
  }]
})
export class CepDirective implements AsyncValidator {

  constructor(private cepService: CepService) { }

  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep: string = control.value;
    return this.cepService.getCepInfoJson(cep).pipe(map(
      (resultado: any) => resultado.erro ? {'cepInvalido': true} : null
    ));
  }

}
