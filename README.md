[![Build Status](https://travis-ci.org/SpaiR/spring-angular-example.svg?branch=master)](https://travis-ci.org/SpaiR/spring-angular-example)

# Spring Angular Example
### About
Example of how Spring Boot on backend and Angular on frontend can be used to create small blog-like application.

__Demo:__ http://spring-angular-example.info.tm/

Because it's example application some features purposely wasn't implemented. If you will try to use them appropriate snackbar message will be shown.

### How it was build
#### Backend
All backend made with Spring framework and represented mainly as RESTful web service. Used:
* Spring Web
* Spring Data MongoDB
* Spring Security

Security part works with JSON Web Tokens integration and mainly made for admin menu usage.

All of these parts wrapped with Spring Boot, which include embeded web container in Tomcat implementation.

#### Frontend
Frontend is actually independent single page application built on Angular 4 framework. All, what was used:
* Webpack with number of plugins
* Angular 4
* HTML/CSS/SASS

For development I used lite-server and Angular in JIT compilation mod. In production all aplication pre-compiled in AoT compilation mod and sanitized with minifications and so on. (Webpack has built in tree-shaking technology for dependencies, so it used too.) After compilation all files moved into `dist` folder. When all application is being packaged with Maven all from `dist` moved into `resource/static` to give Spring Boot catch those files by itself.

### How it could be 'touched'
After downloading of repo all you should do is to enter in `mongodb.properties` file properties of your MongoDB database. (I am using MLab free plan, because 500 mb enough for everything.) Then you should initialize frontend folder with `npm install` to download all needed dependecies. When it's done use `mvn clean package -P includeFrontend` on app folder and start compiled .jar file in any way you like. Started application will be available on `localhost:8080` address. 

Admin panel is located at `localhost:8080/admin`. You will be redirect to login page. Default login credentials is `admin` and `password`.
