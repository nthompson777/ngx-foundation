import { NgModule } from '@angular/core';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalDirective } from './modal.directive';
import { PositioningService } from '../positioning/index';
import { ComponentLoaderFactory } from '../component-loader/index';
import { ModalContainerComponent } from './modal-container.component';
import { BsModalService } from './bs-modal.service';
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule.forRoot = function () {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ComponentLoaderFactory, PositioningService]
        };
    };
    ModalModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ModalBackdropComponent,
                        ModalDirective,
                        ModalContainerComponent
                    ],
                    exports: [ModalBackdropComponent, ModalDirective],
                    entryComponents: [ModalBackdropComponent, ModalContainerComponent]
                },] },
    ];
    return ModalModule;
}());
export { ModalModule };
//# sourceMappingURL=modal.module.js.map