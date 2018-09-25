<a href="http://ngxfoundation.com">
    <h1 align="center">ngx-foundation</h1>
</a>

<p align="center">
Best way to quickly integrate <a href="https://foundation.zurb.com/">Zurb Foundation for Sites >= 6.4.X</a>  components with <a href="https://angular.io/">Angular 6</a>. This is a fork of ngx-foundation so no jQuery required to implement with your Angular project.
</p>

## Links

- [Documentation](http://ngxfoundation.com)
<!-- - [Release Notes](https://github.com/valor-software/ngx-foundation/blob/development/CHANGELOG.md) -->

<!-- [![codecov](https://codecov.io/gh/valor-software/ngx-foundation/branch/development/graph/badge.svg)](https://codecov.io/gh/valor-software/ngx-foundation) -->

<!-- [![NPM](https://nodei.co/npm/ngx-foundation.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/ngx-foundation)
[![NPM](https://nodei.co/npm-dl/ngx-foundation.png?height=3&months=6)](https://npmjs.org/ngx-foundation)
[![Sauce Test Status](https://saucelabs.com/browser-matrix/valorkin.svg)](https://saucelabs.com/u/valorkin)
-->

## Table of contents
1. [Getting Started](#getting-started)
2. [Installation instructions](#installation-instructions)
3. [Usage & Demo](#usage--demo)
4. [API](#api)
5. [Troubleshooting](#troubleshooting)
6. [Contributing](#contribution)

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

You will need Foundation 6 styles:
- `Foundation 6`
```
<!-- index.html -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.min.css" rel="stylesheet">
```

### Setting up the Foundation version manually
Sometimes, your project might contain some library that could interfear with the Foundation framework, or you might have a customized version of Foundation:
```
Link to the Starter Project Coming Soon!.............
```

<!-- ## Usage & Demo

API documentation and usage scenarios available here:
[http://ngxfoundation.com](http://ngxfoundation.com) -->

<!-- Additionally you can find demos and docs deployed from latest code with <a href="https://ngx-foundation.surge.sh/">angular v4</a> and <a
  href="https://ngx-foundation-latest.surge.sh/">angular v5</a>

Server side rendered version of this documentation available <a href="https://ngx-universal.herokuapp.com/">here</a> -->

## API
Demo page for API [reference](http://ngxfoundation.com)

<!-- ### How to use it with:
 - `Bootstrap and angular-cli` please refer to [using-with-bootstrap-and-angular-cli](https://github.com/valor-software/ngx-foundation/tree/development/docs/getting-started/bootstrap.md)
 - `angular-seed` please refer to [getting-started-with-angular-seed](https://github.com/valor-software/ngx-foundation/tree/development/docs/getting-started/angular-seed.md)
 - `system.js` (and [angular2 quickstart](https://angular.io/docs/ts/latest/quickstart.html)) please checkout [sample repository](https://github.com/valor-software/angular2-quickstart)
 - `plnkr` sample available [here](https://plnkr.co/edit/0NipkZrnckZZROAcnjzB?p=preview)
 - `AoT using ngc and rollup` please refer to [ngx-foundation-with-aot](https://github.com/valor-software/ngx-foundation/tree/development/docs/getting-started/aot.md)
 - `ASP.NET Core 2.0` please refer to [using-with-asp.net-core-2](https://github.com/csegyud/ASPNETCore_ngx-foundation_Sample/blob/master/README.md) -->

<!-- ### How to build lib for development

First time:
 - clone the Starter Kit
 - `yarn` or `npm install`
 - `npm run test` -->

<!-- To update your fork and prepare it for local usage:
 - `git pull upstream development`
 - `rm -rf node_modules`
 - `npm install`
 - `npm run test` _*// it will build the lib, create a link in node_modules and run package's "test" script*_ -->

<!-- To run the demo:
 - `npm run demo.serve` _*// to serve local demo. This is for testing only, without watchers.*_ -->

<!-- For local development run:
 - `npm run build.watch` _*// in first terminal*_
 - `ng serve` _*// in second*_ -->


## Troubleshooting

So if you are in trouble, here's where you can look for help.

The best place to ask questions is on [StackOverflow (under the `ngx-foundation` tag)](https://stackoverflow.com/questions/tagged/ngx-foundation)


<!-- If, **and only if**, none of the above helped, please open a [new issue](https://github.com/nthompson777/ngx-foundation/issues/new). -->

### License

MIT
