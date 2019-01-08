import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2 } from '@angular/core';
var OffcanvasDirective = /** @class */ (function () {
    function OffcanvasDirective(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        /** This event fires as soon as content collapses */
        this.collapsed = new EventEmitter();
        /** This event fires as soon as content becomes visible */
        this.expanded = new EventEmitter();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
    }
    Object.defineProperty(OffcanvasDirective.prototype, "offcanvas", {
        get: function () {
            return this.isExpanded;
        },
        set: /** A flag indicating visibility of content (shown or hidden) */
        function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    /** allows to manually toggle content visibility */
    /** allows to manually toggle content visibility */
    OffcanvasDirective.prototype.toggle = /** allows to manually toggle content visibility */
    function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /** allows to manually hide content */
    /** allows to manually hide content */
    OffcanvasDirective.prototype.hide = /** allows to manually hide content */
    function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapsing = false;
        // this.display = 'none';
        this.collapsed.emit(this);
    };
    /** allows to manually show collapsed content */
    /** allows to manually show collapsed content */
    OffcanvasDirective.prototype.show = /** allows to manually show collapsed content */
    function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        // this.display = 'block';
        // this.height = 'auto';
        this.isCollapse = true;
        this.isCollapsing = false;
        // this._renderer.setStyle(this._el.nativeElement, 'overflow', 'visible');
        // this._renderer.setStyle(this._el.nativeElement, 'height', 'auto');
        this.expanded.emit(this);
    };
    OffcanvasDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[offcanvas]',
                    exportAs: 'bs-offcanvas',
                    host: {
                        '[class.offcanvas]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    OffcanvasDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    OffcanvasDirective.propDecorators = {
        "collapsed": [{ type: Output },],
        "expanded": [{ type: Output },],
        // "display": [{ type: HostBinding, args: ['style.display',] },],
        "isExpanded": [{ type: HostBinding, args: ['class.is-open',] }, { type: HostBinding, args: ['class.is-transition-overlap',] }, { type: HostBinding, args: ['attr.aria-expanded',] },],
        "isCollapsed": [{ type: HostBinding, args: ['attr.aria-hidden',] }, { type: HostBinding, args: ['class.is-transition-is-closed',] },],
        "isCollapse": [{ type: HostBinding, args: ['class.offcanvas',] },],
        "isCollapsing": [{ type: HostBinding, args: ['class.collapsing',] },],
        "collapse": [{ type: Input },],
        "offcanvas": [{ type: Input },],
    };
    return OffcanvasDirective;
}());
export { OffcanvasDirective };
