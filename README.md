# Cyberpunk

<br/><br/>

[GitHub repo size](https://img.shields.io/github/repo-size/nasar165/cyberpunk)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/nasar165/cyberpunk/blob/master/LICENSE)

## Introduction

### Getting started

These instructions are aimed at helping you set up the project for development or testing purposes.
If you wish to put the project in production, please check our [Deployment section](#deployment).

### Prerequisites

The following tools are required for the App to function please make sure that necessary tools
are installed and if not, install them utilizing the provider's main pages.

- [Node.js](https://nodejs.org/en/) - Node.js 12.x.x
- [Angular CLI](https://cli.angular.io/) - Angular CLI
- [Angular Material](https://material.angular.io/) - Angular Material

### Installing

This sections explains how to install necessary components to run the Angular App in a development
environment. Each section will explain how to install

#### Node.js

##### Windows

```
1. open a browser and go to Node.js website https://node.org
2. Download the latest version.
3. run node-v.xx.xx.x-x64.msi and follow the installation steps
4. open command line an enter npm -v output: x.xx.x showing version.
```

#### Angular CLI

Installing Angular requires node.js so if you haven't installed Node.js then go to the previous step
and install Node.js.

```
1. open command line
2. npm install -g @angular/cli
3. ng --version output: information about angular,node etc.
```

#### Angular Material

Angular Materials is used in this application and can some times cause issues when installing the project
on a new computer. If you encounter an issue with the website when building then run this step. Keep in mind
that the error must be related to Angular material.

```
1. open command line
2. ng add @angular/material
3. Select preferred color.
4. Enter n(no) for Angular Material Typography styles.
5. Enter y(yes) for browser animations.
6. wait for it to complete the installation then run the app.
```

### Deployment

This part explain how to deploy Cyberpunk Website on a server in a non containerized
environment.

```
1. Open commandline to and navigate to src.
2. enter following command (ng b --prod=true).
3. all files will be exported to src/dist.
4. move file to your server.
 4.1 make sure that all redirects are passing trough index.html
  4.1.1 Angular Deployment Config visit https://angular.io/guide/deployment
```

### Built With

API was built with the following tools in a Windows Environment.

- [Visual Studio Code](https://code.visualstudio.com/) - Code Editor
- [Angular](https://cli.angular.io/) - Angular

### Contributing

### Versioning

We use [SemVer](http://semver.org/) for versioning. Please visit their website for more
information to understand how different versions might affect you and your project.

### Authors

- **Nasar Eddaoui** - _Initial work_ - [Nasar Eddaoui](https://github.com/Nasar165)

See also the list of [contributors](https://github.com/nasar165/cyberpunk-Website/graphs/contributors) who participated in this project.

### License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details

### Acknowledgments
