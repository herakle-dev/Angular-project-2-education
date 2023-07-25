# Start2Impact Angular 2 Education Project - Open Library API
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
- @angular/cdk
Version: ^16.1.5
- @angular/common
Version: ^16.1.0
- @angular/compiler
Version: ^16.1.0
- @angular/core
Version: ^16.1.0
- @angular/forms
Version: ^16.1.0
- @angular/material
Version: ^16.1.5

- @angular/platform-browser
Version: ^16.1.0

- @angular/platform-browser-dynamic
Version: ^16.1.0

- @angular/router
Version: ^16.1.0

- @fortawesome/fontawesome-free
Version: ^6.4.0
- bootstrap
Version: ^5.3.0
- bootstrap-icons
Version: ^1.10.5
- ngx-bootstrap-icons
Version: ^1.9.2
- rxjs
Version: ~7.8.0
- tslib
Version: ^2.3.0
- zone.js
Version: ~0.13.0
## Additional Dependencies
- flag-icon-css
 Version: ^4.1.7
- flag-icons
Version: ^6.7.0
- iso-3166-1-alpha-2
Version: ^1.0.1
- svg-country-flags
Version: ^1.2.10
