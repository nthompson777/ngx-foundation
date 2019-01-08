import { Component, HostBinding, Inject, Input, Output, EventEmitter } from '@angular/core';
import { isBs3 } from '../utils/theme-provider';
import { AccordionComponent } from './accordion.component';
/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
var AccordionPanelComponent = /** @class */ (function () {
    function AccordionPanelComponent(accordion) {
        /** Emits when the opened state changes */
        this.isOpenChange = new EventEmitter();
        this._isOpen = false;
        this.accordion = accordion;
    }
    Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
        get: 
        // Questionable, maybe .panel-open should be on child div.panel element?
        /** Is accordion group open or closed. This property supports two-way binding */
        function () {
            return this._isOpen;
        },
        set: function (value) {
            var _this = this;
            if (value !== this.isOpen) {
                if (value) {
                    this.accordion.closeOtherPanels(this);
                }
                this._isOpen = value;
                Promise.resolve(null).then(function () {
                    _this.isOpenChange.emit(value);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionPanelComponent.prototype, "isBs3", {
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    AccordionPanelComponent.prototype.ngOnInit = function () {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    };
    AccordionPanelComponent.prototype.ngOnDestroy = function () {
        this.accordion.removeGroup(this);
    };
    AccordionPanelComponent.prototype.toggleOpen = function (event) {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
    AccordionPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'accordion-group, accordion-panel',
                    template: "<a role=\"button\" class=\"accordion-title\" [attr.aria-expanded]=\"isOpen\" *ngIf=\"heading\" (click)=\"toggleOpen($event)\" [ngClass]=\"{'is-active': isOpen, 'disabled': isDisabled}\"> {{ heading }} </a> <ng-content select=\"[accordion-heading]\"></ng-content> <div class=\"accordion-content collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\">  <ng-content></ng-content></div>",
                    host: {
                        class: 'accordion-item',
                        role: 'tab',
                        style: 'display: block'
                    }
                },] },
    ];
    /** @nocollapse */
    AccordionPanelComponent.ctorParameters = function () { return [
        { type: AccordionComponent, decorators: [{ type: Inject, args: [AccordionComponent,] },] },
    ]; };
    AccordionPanelComponent.propDecorators = {
        "heading": [{ type: Input },],
        "panelClass": [{ type: Input },],
        "isDisabled": [{ type: Input },],
        "isOpenChange": [{ type: Output },],
        "isOpen": [{ type: HostBinding, args: ['class.is-active',] }, { type: Input },],
    };
    return AccordionPanelComponent;
}());
export { AccordionPanelComponent };
