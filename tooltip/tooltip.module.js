import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container.component';
import { TooltipDirective } from './tooltip.directive';
import { TooltipConfig } from './tooltip.config';
import { ComponentLoaderFactory } from '../component-loader/index';
import { PositioningService } from '../positioning/index';
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule.forRoot = function () {
        return {
            ngModule: TooltipModule,
            providers: [TooltipConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    TooltipModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [TooltipDirective, TooltipContainerComponent],
                    exports: [TooltipDirective],
                    entryComponents: [TooltipContainerComponent]
                },] },
    ];
    return TooltipModule;
}());
export { TooltipModule };
//# sourceMappingURL=tooltip.module.js.map