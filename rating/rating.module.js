import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RatingComponent } from './rating.component';
var RatingModule = /** @class */ (function () {
    function RatingModule() {
    }
    RatingModule.forRoot = function () {
        return {
            ngModule: RatingModule,
            providers: []
        };
    };
    RatingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [RatingComponent],
                    exports: [RatingComponent]
                },] },
    ];
    return RatingModule;
}());
export { RatingModule };
//# sourceMappingURL=rating.module.js.map