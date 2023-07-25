# AngularProject2Education
## Intro
Welcome to this project developed by Ivan as an examination for Start2Impact. This project is developed using the public Api from [Open library](https://openlibrary.org/). Before starting this repo i had to study this api, i've learned how to make good calls, show result and filter those from the url i pass at the moment before call those api, so this improved my knowlege about Api and how to manipulate the response with Angular.
# So lets begin with some screenshot!
## First page shown to the user when he visit the deploy link or even run the ng serve command 
![Homepage](
screenshot/home-trending.png
)
## Then we can search like in the example given in the project intro - fantasy at subject param
![Fantasy-subject](
screenshot/subject-fantasy.png
)
## So we can click the first result like in the example and we have the details of this
![book-details](
screenshot/book-details.png
)
## Or you can click on author name to find out his bio, photos and more details about him/her
![author-details](
screenshot/author-details.png
)
## But is not over yet, you can search a book by his author name, his title or even filter by the most common language!!!
### By author name
![filter-by-author](
screenshot/filter-by-author.png
)
### By book title

![filter-by-title](
screenshot/filter-by-title.png
)
### Filter by language (default english)
![filter-by-language](
screenshot/filter-by-language.png
)
## At last I've developed a simple pagination to show all the result in the api for your research 
![pagination-works](
screenshot/pagination-works.png
)
## I managed the exceptions with simple paragraphs shown if certain properties do not exist using ngIf.
![error-handling-bad](
screenshot/error-handling-bad.png
)
# Test result proof
![test-project-education](
screenshot/test-project-education.png
)
  ## Installation
To try this project locally, you will need:

- Nodejs
- Code editor (Visual Studio Code)
- Clone this repository from your code editor's console using the command:
```bash
  git clone https://github.com/herakle-dev/Angular-project-2-education
  ```
- Install the dependencies using the command:
```bash
  npm install
  ```
From the console, use the command:
```bash
  ng serve --open
  ```
##  Required App Features:
- Homepage googlestyle with text input and search button
- Subject search filter
- Book description
- Github, Deploy,Test
## Personal App Features plus:
- Trending book at homepage
- Book details, with description and all cover images in archive
- Author details with author photos if existing
- Search filter by : Author, Title, Language
- Get everything from api for each user search.
- Pretty pagination
   
## Try the app online
### Deployment Links
- [Firebase link](openlibrary-education-angular.web.app)

## Main Dependencies
- @angular/animations
Version: ^15.2.0
The @angular/animations library provides support for animations within your Angular application. You can use it to add smooth and interactive animations to elements in your project.

- @angular/cdk
Version: ^15.2.9
@angular/cdk is Angular's Component Dev Kit (CDK). It provides a set of essential tools and components that can be used to create more complex and interactive Angular applications.

- @angular/common
Version: ^15.2.0
@angular/common is a core library of Angular that contains common functionality used throughout the framework.

- @angular/compiler
Version: ^15.2.0
The @angular/compiler library provides the Angular Just-in-Time (JIT) compiler, which analyzes the TypeScript code of your application and translates it into executable JavaScript code.

- @angular/core
Version: ^15.2.0
@angular/core is one of the core libraries of Angular and contains fundamental features of the framework, such as the module system, dependency injection system, and other basic functionalities.

- @angular/forms
Version: ^15.2.0
The @angular/forms library provides support for form handling within Angular applications, including validation of user-entered data.

- @angular/material
Version: ^15.2.9
@angular/material is a library that implements Google's Material Design for Angular. It provides a wide range of pre-built UI components such as buttons, modals, tables, and more, which can be used to create modern and intuitive user interfaces.

- @angular/platform-browser
Version: ^15.2.0
The @angular/platform-browser library contains Angular implementations specific to browsers, such as DOM rendering, event handling, and other browser runtime-related functionalities.

- @angular/platform-browser-dynamic
Version: ^15.2.0
@angular/platform-browser-dynamic provides support for compiling and dynamically executing Angular scripts within the browser. This library is used to bootstrap the Angular application in the browser.

- @angular/router
Version: ^15.2.0
The @angular/router library offers client-side routing for Angular applications. It allows you to effectively and manageably handle navigation between different views of the application.

- @fortawesome/fontawesome-svg-core
Version: ^6.4.0
@fortawesome/fontawesome-svg-core is a library that provides high-quality scalable vector icons (SVG) from the Font Awesome collection. You can use this library to add stylish icons to your Angular project.

- @fortawesome/free-solid-svg-icons
Version: ^6.4.0
The @fortawesome/free-solid-svg-icons library contains a wide range of solid vector icons from the Font Awesome collection. You can use these icons to enhance the appearance of your user interfaces.

- animate.css
Version: ^4.1.1
animate.css is a ready-to-use CSS animation library. It provides a collection of CSS classes that can be used to animate UI elements easily and quickly.

- bootstrap
Version: ^5.2.3
bootstrap is a popular CSS and JavaScript library for creating responsive and high-quality web interfaces. It is widely used for developing modern web applications.

- bootstrap-icons
Version: ^1.10.5
The bootstrap-icons library provides a wide range of high-quality SVG icons that can be used within your Angular project. The icons can be easily customized and adapted to your needs.

- ngx-bootstrap-icons
Version: ^1.9.2
ngx-bootstrap-icons is a library that simplifies the usage of Bootstrap icons within Angular applications. It provides Angular components that allow you to easily use Bootstrap icons in your templates.

- rxjs
Version: ~7.8.0
The rxjs library is a reactive programming library for JavaScript that provides support for asynchronous programming based on observables. It is widely used in Angular applications to handle reactive data streams.

- tslib
Version: ^2.5.3
tslib is a TypeScript library that provides various useful features such as type annotations support, utility functions, and more. It is often used as a dependency for TypeScript projects.

- zone.js
Version: ~0.12.0
zone.js is a library that provides a zone system for JavaScript. It is internally used by Angular for managing asynchronous events and the application lifecycle.

## Development Dependencies

- @angular-devkit/build-angular
Version: ^15.2.8
The @angular-devkit/build-angular library provides the necessary tools to build and deploy an Angular application. It also includes a set of plugins and configurations to facilitate the build process.

- @angular-eslint/builder
Version: 15.2.1
@angular-eslint/builder is an Angular-specific builder that enables static analysis of TypeScript code using ESLint.

- @angular-eslint/eslint-plugin
Version: 15.2.1
The @angular-eslint/eslint-plugin library is an ESLint plugin specifically for Angular that provides additional rules for static analysis of TypeScript code within Angular projects.

- @angular-eslint/eslint-plugin-template
Version: 15.2.1
@angular-eslint/eslint-plugin-template is an ESLint plugin specifically for Angular that provides rules for static analysis of HTML templates within Angular projects.

- @angular-eslint/schematics
Version: 15.2.1
The @angular-eslint/schematics library provides Angular-specific code schematics and generators that can be used with the Angular CLI to automate development tasks such as creating components, modules, and more.

- @angular-eslint/template-parser
Version: 15.2.1
@angular-eslint/template-parser is a parser for static analysis of HTML templates within Angular projects using ESLint.

- @angular/cli
Version: ~15.2.6
@angular/cli is the Angular Command Line Interface (CLI) that provides a command-line tool for creating, managing, and deploying Angular projects.

- @angular/compiler-cli
Version: ^15.2.0
The @angular/compiler-cli library provides the ahead-of-time (AOT) compiler for Angular, which allows compiling the Angular application into pre-executable JavaScript for improved performance.

- @types/jasmine
Version: ~4.3.0
@types/jasmine is a library that provides TypeScript type definitions for Jasmine, a popular testing framework for JavaScript.

- @typescript-eslint/eslint-plugin
Version: 5.48.2
The @typescript-eslint/eslint-plugin library is an ESLint plugin specifically for TypeScript that provides additional rules for static analysis of TypeScript code.

- @typescript-eslint/parser
Version: 5.48.2
@typescript-eslint/parser is a parser for static analysis of TypeScript code using ESLint. It converts TypeScript code into an Abstract Syntax Tree (AST) that can be analyzed by ESLint.

- eslint
Version: ^8.33.0
eslint is a code static analysis tool that helps identify potential issues or errors in JavaScript or TypeScript code.

- jasmine-core
Version: ~4.5.0
jasmine-core is the core library of Jasmine, a testing framework for JavaScript. It provides basic functionality for test execution.

- karma
Version: ~6.4.0
karma is a test runner for JavaScript that allows running tests in different browsers or execution environments. It is often used with Jasmine for unit testing.

- karma-chrome-launcher
Version: ~3.1.0
karma-chrome-launcher is a Karma plugin that allows running tests in Google Chrome browsers. It is one of the most commonly used plugins for Karma test execution.

- karma-coverage
Version: ~2.2.0
karma-coverage is a Karma plugin that enables generating code coverage reports during test execution. It provides information about the tested code portions and those not covered by tests.

- karma-jasmine
Version: ~5.1.0
karma-jasmine is a Karma plugin that allows running tests written using Jasmine as the testing framework.

- karma-jasmine-html-reporter
Version: ~2.0.0
karma-jasmine-html-reporter is a Karma plugin that generates a detailed HTML report on the execution of Jasmine tests. The report includes information about the executed tests, successes, and any errors or failures.

- typescript
Version: ~4.9.4
typescript is the primary programming language used in Angular. It is a superset of JavaScript that adds additional features such as static types and the latest ECMAScript features.  
