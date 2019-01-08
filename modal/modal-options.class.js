import { Injectable } from '@angular/core';
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: Injectable },
    ];
    return ModalOptions;
}());
export { ModalOptions };
export var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
export var CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop', // modal-backdrop
    OPEN: 'modal-open',
    FADE: 'fade', // fade
    IN: 'fade-in', // in
    // bs3
    SHOW: 'show' // bs4  show
};
export var SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
export var TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
export var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};
