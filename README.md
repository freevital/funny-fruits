# Funny Fruits App
Funny Fruits used [Phaser](http://phaser.io/) framework.

**[DEMO](https://funny-fruits.kravchyshyn.com)**

## Table of contents
* [Prerequisites](#prerequisites)
* [Get the source code](#get-the-source-code)
* [Deployment](#deployment)
* [Build image](#build-image)

## Prerequisites
- Node >= 8
- NPM >= 5

## Get the Source Code
Clone the repository using the following command:
```
git clone git@github.com:freevital/funny-fruits.git
```

## Deployment
Build and run application:
```bash
npm install --no-package-lock
npm start
```
Open `http://localhost:8080`

## Build image
```bash
npm run build
docker image build -t kravchyshyn.com:5000/funny-fruits
docker push kravchyshyn.com:5000/funny-fruits
```