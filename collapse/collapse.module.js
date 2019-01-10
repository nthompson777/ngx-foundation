import { NgModule } from '@angular/core';
import { CollapseDirective } from './collapse.directive';
var CollapseModule = /** @class */ (function () {
    function CollapseModule() {
    }
    CollapseModule.forRoot = function () {
        return { ngModule: CollapseModule, providers: [] };
    };
    CollapseModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CollapseDirective],
                    exports: [CollapseDirective]
                },] },
    ];
    return CollapseModule;
}());
export { CollapseModule };
//# sourceMappingURL=collapse.module.js.map