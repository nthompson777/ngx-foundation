<a href="http://ngxfoundation.com">
    <h1 align="center">ngx-foundation</h1>
</a>

<p align="center">
The best way to quickly integrate <a href="https://foundation.zurb.com/">Zurb Foundation for Sites (6.4 or later)</a>  components with <a href="https://angular.io/">Angular 6 or 7</a>. This is a fork of <a href="https://valor-software.com/ngx-bootstrap" target="_blank">ngx-bootstrap by Valor Software</a>. No jQuery is required to implement with your Angular project.
</p>

<!-- ## Links

- [Documentation](https://ngxfoundation.com)
 - [Release Notes](https://github.com/valor-software/ngx-foundation/blob/development/CHANGELOG.md) -->


## Table of contents
1. [Getting Started](#getting-started)
2. [Installation Instructions](#installation-instructions)
3. [API and Demo](#api-and-demo)
4. [Starter Kit](#starter-kit)
5. [Troubleshooting](#troubleshooting)
6. [License](#license)

## Getting Started

ngx-foundation contains all core Foundation components powered by Angular. There is no need to include original JS components, but we are using markup and SCSS provided by Foundation for Sites.

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

Download the [ngx-foundation Starter Kit](https://github.com/nthompson777/ngx-foundation-starterkit) (uses Angular 7 and SCSS) to get up and running quickly.

If you're going the CSS route you will need Foundation 6 styles:
- `Foundation 6`
```
<!-- index.html -->
<link href="https://cdn.jsdelivr.net/npm/foundation-sites@6.4.3/dist/css/foundation.min.css" rel="stylesheet">
```

## API and Demo

API documentation and usage scenarios available here:
[https://ngxfoundation.com](https://ngxfoundation.com)

<!-- ### How to use it with:
 - `Bootstrap and angular-cli` please refer to [using-with-bootstrap-and-angular-cli](https://github.com/valor-software/ngx-foundation/tree/development/docs/getting-started/bootstrap.md)
 - `angular-seed` please refer to [getting-started-with-angular-seed](https://github.com/valor-software/ngx-foundation/tree/development/docs/getting-started/angular-seed.md)
 - `system.js` (and [angular2 quickstart](https://angular.io/docs/ts/latest/quickstart.html)) please checkout [sample repository](https://github.com/valor-software/angular2-quickstart)
 - `plnkr` sample available [here](https://plnkr.co/edit/0NipkZrnckZZROAcnjzB?p=preview)
 - `AoT using ngc and rollup` please refer to [ngx-foundation-with-aot](https://github.com/valor-software/ngx-foundation/tree/development/docs/getting-started/aot.md)
 - `ASP.NET Core 2.0` please refer to [using-with-asp.net-core-2](https://github.com/csegyud/ASPNETCore_ngx-foundation_Sample/blob/master/README.md) -->

### Starter Kit

Want to get your ngx-foundation project up and running quickly? Use the [ngx-foundation Starter Kit](https://github.com/nthompson777/ngx-foundation-starterkit) (uses Angular 7 and SCSS) with detailed instructions and includes all necessary base assets and components.    

## Troubleshooting

The best place to ask questions is on [StackOverflow (under the `ngx-foundation` tag)](https://stackoverflow.com/questions/tagged/ngx-foundation)

### License

MIT
