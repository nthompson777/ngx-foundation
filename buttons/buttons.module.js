import { NgModule } from '@angular/core';
import { ButtonCheckboxDirective } from './button-checkbox.directive';
import { ButtonRadioDirective } from './button-radio.directive';
import { ButtonRadioGroupDirective } from './button-radio-group.directive';
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    ButtonsModule.forRoot = function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    ButtonsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
                    exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
                },] },
    ];
    return ButtonsModule;
}());
export { ButtonsModule };
//# sourceMappingURL=buttons.module.js.map