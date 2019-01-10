import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginationConfig } from './pagination.config';
import { PagerComponent } from './pager.component';
import { PaginationComponent } from './pagination.component';
var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    PaginationModule.forRoot = function () {
        return { ngModule: PaginationModule, providers: [PaginationConfig] };
    };
    PaginationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [PagerComponent, PaginationComponent],
                    exports: [PagerComponent, PaginationComponent]
                },] },
    ];
    return PaginationModule;
}());
export { PaginationModule };
//# sourceMappingURL=pagination.module.js.map