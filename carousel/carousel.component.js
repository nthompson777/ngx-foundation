// tslint:disable:max-file-line-count
/***
 * pause (not yet supported) (?string='hover') - event group name which pauses
 * the cycling of the carousel, if hover pauses on mouseenter and resumes on
 * mouseleave keyboard (not yet supported) (?boolean=true) - if false
 * carousel will not react to keyboard events
 * note: swiping not yet supported
 */
/****
 * Problems:
 * 1) if we set an active slide via model changes, .active class remains on a
 * current slide.
 * 2) if we have only one slide, we shouldn't show prev/next nav buttons
 * 3) if first or last slide is active and noWrap is true, there should be
 * "disabled" class on the nav buttons.
 * 4) default interval should be equal 5000
 */
import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { isBs3, LinkedList } from '../utils/index';
import { CarouselConfig } from './carousel.config';
export var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction || (Direction = {}));
/**
 * Base element to create carousel
 */
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config, ngZone) {
        this.ngZone = ngZone;
        /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */
        this.activeSlideChange = new EventEmitter(false);
        this._slides = new LinkedList();
        this.destroyed = false;
        Object.assign(this, config);
    }
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: function () {
            return this._currentActiveSlide;
        },
        set: /** Index of currently displayed slide(started for 0) */
        function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        get: /**
           * Delay of item cycling in milliseconds. If false, carousel won't cycle
           * automatically.
           */
        function () {
            return this._interval;
        },
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param slide
     */
    /**
       * Adds new slide. If this slide is first in collection - set it as active
       * and starts auto changing
       * @param slide
       */
    CarouselComponent.prototype.addSlide = /**
       * Adds new slide. If this slide is first in collection - set it as active
       * and starts auto changing
       * @param slide
       */
    function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param slide
     */
    /**
       * Removes specified slide. If this slide is active - will roll to another
       * slide
       * @param slide
       */
    CarouselComponent.prototype.removeSlide = /**
       * Removes specified slide. If this slide is active - will roll to another
       * slide
       * @param slide
       */
    function (slide) {
        var _this = this;
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                // after removing, need to actualize index of current active slide
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    /**
       * Rolling to next slide
       * @param force: {boolean} if true - will ignore noWrap flag
       */
    CarouselComponent.prototype.nextSlide = /**
       * Rolling to next slide
       * @param force: {boolean} if true - will ignore noWrap flag
       */
    function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
    };
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    /**
       * Rolling to previous slide
       * @param force: {boolean} if true - will ignore noWrap flag
       */
    CarouselComponent.prototype.previousSlide = /**
       * Rolling to previous slide
       * @param force: {boolean} if true - will ignore noWrap flag
       */
    function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
    };
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    /**
       * Rolling to specified slide
       * @param index: {number} index of slide, which must be shown
       */
    CarouselComponent.prototype.selectSlide = /**
       * Rolling to specified slide
       * @param index: {number} index of slide, which must be shown
       */
    function (index) {
        this.activeSlide = index;
    };
    /**
     * Starts a auto changing of slides
     */
    /**
       * Starts a auto changing of slides
       */
    CarouselComponent.prototype.play = /**
       * Starts a auto changing of slides
       */
    function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     */
    /**
       * Stops a auto changing of slides
       */
    CarouselComponent.prototype.pause = /**
       * Stops a auto changing of slides
       */
    function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     * @returns {number}
     */
    /**
       * Finds and returns index of currently displayed slide
       * @returns {number}
       */
    CarouselComponent.prototype.getCurrentSlideIndex = /**
       * Finds and returns index of currently displayed slide
       * @returns {number}
       */
    function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     * @returns {boolean}
     */
    /**
       * Defines, whether the specified index is last in collection
       * @param index
       * @returns {boolean}
       */
    CarouselComponent.prototype.isLast = /**
       * Defines, whether the specified index is last in collection
       * @param index
       * @returns {boolean}
       */
    function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
     *   return undefined if next slide require wrapping
     * @returns {any}
     */
    /**
       * Defines next slide index, depending of direction
       * @param direction: Direction(UNKNOWN|PREV|NEXT)
       * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
       *   return undefined if next slide require wrapping
       * @returns {any}
       */
    CarouselComponent.prototype.findNextSlideIndex = /**
       * Defines next slide index, depending of direction
       * @param direction: Direction(UNKNOWN|PREV|NEXT)
       * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
       *   return undefined if next slide require wrapping
       * @returns {any}
       */
    function (direction, force) {
        var nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     * @private
     */
    /**
       * Sets a slide, which specified through index, as active
       * @param index
       * @private
       */
    CarouselComponent.prototype._select = /**
       * Sets a slide, which specified through index, as active
       * @param index
       * @private
       */
    function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        var currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     */
    /**
       * Starts loop of auto changing of slides
       */
    CarouselComponent.prototype.restartTimer = /**
       * Starts loop of auto changing of slides
       */
    function () {
        var _this = this;
        this.resetTimer();
        var interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular(function () {
                return setInterval(function () {
                    var nInterval = +_this.interval;
                    _this.ngZone.run(function () {
                        if (_this.isPlaying &&
                            !isNaN(_this.interval) &&
                            nInterval > 0 &&
                            _this.slides.length) {
                            _this.nextSlide();
                        }
                        else {
                            _this.pause();
                        }
                    });
                }, interval);
            });
        }
    };
    /**
     * Stops loop of auto changing of slides
     */
    /**
       * Stops loop of auto changing of slides
       */
    CarouselComponent.prototype.resetTimer = /**
       * Stops loop of auto changing of slides
       */
    function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    CarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'carousel',
                    template: "<div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"orbit\"><button class=\"orbit-previous\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"> <span class=\"show-for-sr\">Previous Slide</span>&#9664;&#xFE0E; </button> <button class=\"orbit-next\" (click)=\"nextSlide()\"  [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\"> <span class=\"show-for-sr\">Next Slide</span>&#9654;&#xFE0E; </button> <ng-content></ng-content> <nav class=\"orbit-bullets\" *ngIf=\"showIndicators && slides.length > 1\"> <button *ngFor=\"let slidez of slides; let i = index;\" [class.is-active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></button> </nav></div> "
                },] },
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: CarouselConfig, },
        { type: NgZone, },
    ]; };
    CarouselComponent.propDecorators = {
        "noWrap": [{ type: Input },],
        "noPause": [{ type: Input },],
        "showIndicators": [{ type: Input },],
        "activeSlideChange": [{ type: Output },],
        "activeSlide": [{ type: Input },],
        "interval": [{ type: Input },],
    };
    return CarouselComponent;
}());
export { CarouselComponent };
//# sourceMappingURL=carousel.component.js.map