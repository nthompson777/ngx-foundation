import { Injectable } from '@angular/core';
var AlertConfig = /** @class */ (function () {
    function AlertConfig() {
        /** default alert type */
        this.type = 'warning';
        /** is alerts are dismissible by default */
        this.dismissible = false;
        /** default time before alert will dismiss */
        this.dismissOnTimeout = undefined;
    }
    AlertConfig.decorators = [
        { type: Injectable },
    ];
    return AlertConfig;
}());
export { AlertConfig };
//# sourceMappingURL=alert.config.js.map