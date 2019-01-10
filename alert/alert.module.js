import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert.component';
import { AlertConfig } from './alert.config';
var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    AlertModule.forRoot = function () {
        return { ngModule: AlertModule, providers: [AlertConfig] };
    };
    AlertModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [AlertComponent],
                    exports: [AlertComponent],
                    entryComponents: [AlertComponent]
                },] },
    ];
    return AlertModule;
}());
export { AlertModule };
//# sourceMappingURL=alert.module.js.map