import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

@Directive({
    selector: '[appSameAirport]',
    providers: [{ provide: NG_VALIDATORS, useExisting: AirportValidatorDirective, multi: true }]
})
export class AirportValidatorDirective implements Validator {
    @Input('appSameAirport') sameAirport = '';

    validate(control: AbstractControl): ValidationErrors | null {
        return this.sameAirport ? AirportValidator(new RegExp(this.sameAirport, 'i'))(control)
            : null;
    }
}
export function AirportValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { sameAirport: { value: control.value } } : null;
    };
}
