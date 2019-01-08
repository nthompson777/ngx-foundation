import { NgModule } from '@angular/core';
import { OffcanvasDirective } from './offcanvas.directive';
var OffcanvasModule = /** @class */ (function () {
    function OffcanvasModule() {
    }
    OffcanvasModule.forRoot = function () {
        return { ngModule: OffcanvasModule, providers: [] };
    };
    OffcanvasModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [OffcanvasDirective],
                    exports: [OffcanvasDirective]
                },] },
    ];
    return OffcanvasModule;
}());
export { OffcanvasModule };
