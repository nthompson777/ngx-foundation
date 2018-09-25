import { Injectable } from '@angular/core';
/**
 * Configuration service, provides default values for the AccordionComponent.
 */
var AccordionConfig = /** @class */ (function () {
    function AccordionConfig() {
        /** Whether the other panels should be closed when a panel is opened */
        this.closeOthers = false;
    }
    AccordionConfig.decorators = [
        { type: Injectable },
    ];
    return AccordionConfig;
}());
export { AccordionConfig };
//# sourceMappingURL=accordion.config.js.map