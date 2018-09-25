import { Component, HostBinding, Input } from '@angular/core';
import { CarouselComponent } from './carousel.component';
var SlideComponent = /** @class */ (function () {
    function SlideComponent(carousel) {
        /** Wraps element by appropriate CSS classes */
        this.addClass = true;
        this.carousel = carousel;
        //this.inactive = true;
    }
    /** Fires changes in container collection after adding a new slide instance */
    /** Fires changes in container collection after adding a new slide instance */
    SlideComponent.prototype.ngOnInit = /** Fires changes in container collection after adding a new slide instance */
    function () {
        this.carousel.addSlide(this);
    };
    /** Fires changes in container collection after removing of this slide instance */
    /** Fires changes in container collection after removing of this slide instance */
    SlideComponent.prototype.ngOnDestroy = /** Fires changes in container collection after removing of this slide instance */
    function () {
        this.carousel.removeSlide(this);
    };
    SlideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'slide',
                    template: "\n  <ng-content></ng-content>\n  ",
                    styles: [
                        "\n    :host {\n      display: block;\n      position: relative;\n    }\n  "
                    ],
                    host: {
                        '[attr.aria-hidden]': '!active', '[class.hide]': '!active',
                    },
                    
                },] },
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: CarouselComponent, },
    ]; };
    SlideComponent.propDecorators = {
        "active": [{ type: HostBinding, args: ['class.active',] }, { type: Input },],
        "addClass": [{ type: HostBinding, args: ['class.item',] }, { type: HostBinding, args: ['class.orbit-item',] },],
        //"inactive": [{ type: HostBinding, args: ['class.hide',] }, { type: Input },],
    };
    return SlideComponent;
}());
export { SlideComponent };
//# sourceMappingURL=slide.component.js.map