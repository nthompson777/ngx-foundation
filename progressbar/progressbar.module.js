import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarComponent } from './bar.component';
import { ProgressbarComponent } from './progressbar.component';
import { ProgressbarConfig } from './progressbar.config';
var ProgressbarModule = /** @class */ (function () {
    function ProgressbarModule() {
    }
    ProgressbarModule.forRoot = function () {
        return { ngModule: ProgressbarModule, providers: [ProgressbarConfig] };
    };
    ProgressbarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [BarComponent, ProgressbarComponent],
                    exports: [BarComponent, ProgressbarComponent]
                },] },
    ];
    return ProgressbarModule;
}());
export { ProgressbarModule };
//# sourceMappingURL=progressbar.module.js.map