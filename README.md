# Start2Impact Examination Project - Open Library API
 ## Introduction
Welcome to the Start2Impact examination project developed by Ivan. This project utilizes the public API from Open Library to create an application with Angular. The purpose of this project is to demonstrate knowledge of working with APIs, making API calls, handling responses, and filtering data.

## Project Overview
The main goal of this project is to build an application that leverages the Open Library API to fetch and display book data. By working on this project, I aimed to enhance my understanding of API integration with Angular and how to manipulate API responses effectively.
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
Version: ^16.1.0
The @angular/animations library provides support for animations within your Angular application. You can use it to add smooth and interactive animations to elements in your project.

- @angular/cdk
Version: ^16.1.5
@angular/cdk is Angular's Component Dev Kit (CDK). It provides a set of essential tools and components that can be used to create more complex and interactive Angular applications.

- @angular/common
Version: ^16.1.0
@angular/common is a core library of Angular that contains common functionality used throughout the framework.

- @angular/compiler
Version: ^16.1.0
The @angular/compiler library provides the Angular Just-in-Time (JIT) compiler, which analyzes the TypeScript code of your application and translates it into executable JavaScript code.

- @angular/core
Version: ^16.1.0
@angular/core is one of the core libraries of Angular and contains fundamental features of the framework, such as the module system, dependency injection system, and other basic functionalities.

- @angular/forms
Version: ^16.1.0
The @angular/forms library provides support for form handling within Angular applications, including validation of user-entered data.

- @angular/material
Version: ^16.1.5
@angular/material is a library that implements Google's Material Design for Angular. It provides a wide range of pre-built UI components such as buttons, modals, tables, and more, which can be used to create modern and intuitive user interfaces.

- @angular/platform-browser
Version: ^16.1.0
The @angular/platform-browser library contains Angular implementations specific to browsers, such as DOM rendering, event handling, and other browser runtime-related functionalities.

- @angular/platform-browser-dynamic
Version: ^16.1.0
@angular/platform-browser-dynamic provides support for compiling and dynamically executing Angular scripts within the browser. This library is used to bootstrap the Angular application in the browser.

- @angular/router
Version: ^16.1.0
The @angular/router library offers client-side routing for Angular applications. It allows you to effectively and manageably handle navigation between different views of the application.

- @fortawesome/fontawesome-free
Version: ^6.4.0
@fortawesome/fontawesome-free is a library that provides high-quality scalable vector icons (SVG) from the Font Awesome collection. You can use this library to add stylish icons to your Angular project.

- bootstrap
Version: ^5.3.0
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
Version: ^2.3.0
tslib is a TypeScript library that provides various useful features such as type annotations support, utility functions, and more. It is often used as a dependency for TypeScript projects.

- zone.js
Version: ~0.13.0
zone.js is a library that provides a zone system for JavaScript. It is internally used by Angular for managing asynchronous events and the application lifecycle.

## Additional Dependencies
- flag-icon-css
 Version: ^4.1.7
flag-icon-css is a library that provides a collection of flag icons in CSS format. You can use it to display flag icons in your Angular application.

- flag-icons
Version: ^6.7.0
flag-icons is a library that provides country flag icons in SVG format. It can be used to add country flags to your Angular project.

- iso-3166-1-alpha-2
Version: ^1.0.1
iso-3166-1-alpha-2 is a library that provides ISO 3166-1 alpha-2 country codes in TypeScript format. It is useful for working with country codes in your Angular application.

- svg-country-flags
Version: ^1.2.10
svg-country-flags is a library that provides SVG versions of country flags. You can use it to display country flags in your Angular project.
