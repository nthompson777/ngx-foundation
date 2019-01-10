# Changelog
All notable changes and release notes to ngx-foundation will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<a name="1.0.6"></a>
## [1.0.6] - 2018-11-01

### Bugfixes 
- Accordion: fix accordion group structure so last-child accordion-item has a bottom border and fix the classes applied

<a name="1.0.5"></a>
## [1.0.5] - 2018-10-31

### Added 
- Minified and unminified CSS versions available at CDN JSDELIVR which contains all ngx-foundation compiled styles. CDN URLs available in the [Getting Started](https://github.com/nthompson777/ngx-foundation#getting-started) section. 
- New minified CSS version (without source maps) of all ngx-foundation compiled styles /dist/css/ngx-foundation.min.css
- New unminified CSS version (with source maps) of all ngx-foundation compiled styles /dist/css/ngx-foundation.css
- _foundationSettings.scss file used for compiling ngx-foundation styles to external CSS files 
- Updated README.md file for Foundation for Sites and ngx-foundation CDN to JSDELIVR

### Changed
- Location of bs-datepicker.css and bs-datepicker.css.map moved to /datepicker/dist/ due to conflicts when compiling SCSS to CSS 
- bs-datepicker.scss file: added file extensions to imports of `@import './utils/scss/variables.scss';` and 
`@import './utils/scss/mixins.scss';` to correct errors when compiling to CSS

<a name="1.0.4"></a>
## [1.0.4] - 2018-10-29

### Added
- ModalModule (Foundation Reveal): SCSS modal animations now by default 
- `/modal/_modal.scss` file which implements the newly added modal animations
- New import of `_modal.scss` file to `/assets/scss/main.scss`
- Updated the README.md file
- Newly created [ngx-foundation Starter Kit](https://github.com/nthompson777/ngx-foundation-starterkit) (uses Angular 7 and SCSS) with detailed instructions and includes all necessary base assets and components  

<a name="1.0.3"></a>
## [1.0.3] - 2018-09-27

### Changed
- DatepickerModule: Fixed variables for primary and secondary themes to datepicker variables file which corresponds with Foundation for Sites default variable names
- DatepickerModule: removed left and right position alignment from API until viewport detection is implemented 
- DatepickerModule: changed showWeekNumbers to false (hide) by default
- DatepickerModule: bs-datepicker.scss file - removed left positioning, lessened min-width, font-size, padding and bs-datepicker-head height to accomodate mobile devices more effectively

<a name="1.0.2"></a>
## [1.0.2] - 2018-09-25

### Changed
- DatepickerModule: Added 2 color themes mapped to Foundation for Sites default color palette scheme
- DatepickerModule: increased padding to fix gaps in range background block between a span of dates

<a name="1.0.1"></a>
## [1.0.1] - 2018-09-25

### Added
- Added missing module files on initial commit

### Changed
- Minor fix to package.json file

<a name="1.0.0"></a>
## [1.0.0] - 2018-09-25

### Added
- Initial commit of all files and npm package name change from the deprecated ngx-zf-foundation to the current ngx-foundation