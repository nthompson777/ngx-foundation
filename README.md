
# ngx-foundation

[![npm version](https://img.shields.io/npm/v/ngx-foundation.svg)](https://npmjs.org/package/ngx-foundation) 
[![GitHub license](https://img.shields.io/github/license/nthompson777/ngx-foundation.svg)](https://github.com/nthompson777/ngx-foundation/blob/master/LICENSE) 
[![Twitter](https://img.shields.io/twitter/url/https/github.com/nthompson777/ngx-foundation.svg?style=social)](https://twitter.com/intent/tweet?text=The+best+way+to+quickly+integrate+Zurb+Foundation+for+Sites+components+with+Angular+6+or+7:&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fngx-foundation)

The best way to quickly integrate <a href="https://foundation.zurb.com/">Zurb Foundation for Sites (6.4 or later)</a>  components with <a href="https://angular.io/">Angular 6 or 7</a>. This is a fork of <a href="https://valor-software.com/ngx-bootstrap" target="_blank">ngx-bootstrap by Valor Software</a>. No jQuery is required to implement with your Angular project.



## Links
- [Documentation and Code Examples](https://ngxfoundation.com)
- [Changelog and Release Notes](https://github.com/nthompson777/ngx-foundation/blob/master/CHANGELOG.md)


## Table of contents
1. [Getting Started](#getting-started)
2. [Installation Instructions](#installation-instructions)
3. [API and Demo](#api-and-demo)
4. [Starter Kit](#starter-kit)
5. [Troubleshooting](#troubleshooting)
6. [License](#license)

## Getting Started

ngx-foundation contains all core Foundation components powered by Angular. There is no need to include original JS components, but we are using markup and SCSS provided by Foundation for Sites.

[See the ngx-foundation website](https://www.ngxfoundation.com/getting-started) for detailed setup instructions, SCSS /style.scss setup file example and more....

## Installation instructions

Install `ngx-foundation` from `yarn` or `npm`:
```bash
yarn add ngx-foundation
npm i ngx-foundation
```

Add needed package to NgModule imports:
```
import { TooltipModule } from 'ngx-foundation';

@NgModule({
  ...
  imports: [TooltipModule.forRoot(),...]
  ...
})
```

Add component to your page:
```
<button type="button" class="button primary"
        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Simple demo
</button>
```

List of available modules for import:

```
import {
  AccordionModule,
  AlertModule,        // Foundation Callouts
  ButtonsModule,
  CarouselModule,     // Foundation Orbit
  CollapseModule,
  BsDatepickerModule,
  BsDropdownModule,   // Foundation Dropdown Menus and Dropdown Panes
  ModalModule,        // Foundation Reveal
  OffcanvasModule,
  PaginationModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule,
} from 'ngx-foundation';
```
### Add ngx-foundation and Foundation SCSS Base Styles
Import ngx-foundation base styles to your main `src/styles.scss` file:

```
// Import Foundation for Sites
// See https://foundation.zurb.com/sites/docs/sass.html for detailed info.
@import '~foundation-sites/scss/foundation';
  @include foundation-everything;

// Import Angular ngx-foundation Framework Added Styles
@import "~ngx-foundation/assets/scss/main";
```

Download the [ngx-foundation Starter Kit](https://github.com/nthompson777/ngx-foundation-starterkit) (uses Angular 7, Foundation for Sites using SCSS, and ngx-foundation) to get up and running quickly.

### CSS Only 
If you're going the flat CSS only route you will need Foundation 6 and ngx-foundation base styles:
- `Foundation 6`
```
<!-- index.html -->
<link href="https://cdn.jsdelivr.net/npm/foundation-sites@6.5.0/dist/css/foundation.min.css" rel="stylesheet">
```
- `ngx-foundation`
```
<!-- index.html -->
<link href="https://cdn.jsdelivr.net/npm/ngx-foundation@1.0.6/dist/css/ngx-foundation.min.css" rel="stylesheet">
```

## API and Demo

API documentation and usage scenarios available here:
[https://ngxfoundation.com](https://ngxfoundation.com)

### Starter Kit

Want to get your ngx-foundation project up and running quickly? Use the [ngx-foundation Starter Kit](https://github.com/nthompson777/ngx-foundation-starterkit) (uses Angular 7, Foundation for Sites using SCSS, and ngx-foundation) with detailed instructions and includes all necessary base assets and components.    

## Troubleshooting

The best place to ask questions is on [StackOverflow (under the `ngx-foundation` tag)](https://stackoverflow.com/questions/tagged/ngx-foundation)

### License

MIT
