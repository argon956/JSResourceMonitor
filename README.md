# JSResourceMonitor
Simple web app that displays your system's resource usage, serving as an activity monitor. This piece of software is built with ExpressJS and Pug syntax, and makes use of Chart.js library to draw the live charts it features.

## Table of Contents
* [Introduction](#introduction)
* [Technologies](#technologies)
* [Setup](#setup)
	* [vmstat websocket daemon](#vmstat-websocket-daemon)
	* [Web app build with npm](#web-app-build-with-npm])

## Introduction
This project serves to put into practice the main concepts of the Full-Stack JavaScript development courses I have taken. I found the proof of concept for this app interesting to make, as well as a feasible introduction point to JavaScript development.  

## Technologies
The technologies used are described in the following list. The versions for the software used are preferrably kept static to reduce potential maintenance issues and breaking changes:
* Bootstrap 5.2.0
* Express.js 4.18.1
* Pug 3.0.2
* Chart.js
* vmstat


## Setup
As of today, this project is still in its initial developmental phase, and lacks of user-friendly features such as first time guided setup and packaging. However, you can test it out for yourself with following guide by cloning or downloading this repo.

**NOTE:** for Windows-based systems, WSL2 (Windows Subsystem for Linux 2) is required in order for the app to work. However this setup is discouraged for any practical use, since the app will only be able to report the stats of the virtual machine WSL2 runs on. You can follow the [Install Node.js on Windows Subsystem for Linux (WSL2)](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl) guide to continue with this setup.

Having chosen a folder to set up the project to, you can either download it by following this [link](https://github.com/argon956/JSResourceMonitor/archive/refs/heads/main.zip) and extracting the containing folder, or cloning it with the following command:

```
git clone https://github.com/argon956/JSResourceMonitor.git
```

Once cloned, you will have all of the artifacts needed, two of which have to be executed in order for the app to run:
* **vmstat** websocket daemon
* Web app build with **npm**

### vmstat websocket daemon
This script runs a websocket that pipes the output of **vmstat** command, which is then listened and parsed by the web app to display the system's resource usage stats. The vmstat package to run said command is commonplace in Unix-like systems, so no extra configuration should be necessary on that part. If the vmstat package were missing, find an installation guide for such package for your specific distribution.


The ```vmstat-out.sh``` script can be found under the ```models/``` directory, as well as the ```websocketd``` tool:
```
#!/bin/sh

# Download websocketd for your platform from
# https://github.com/joewalnes/websocketd/wiki/Download-and-install

./websocketd --address=localhost --port=4080 /usr/bin/vmstat -n 1
```
Credits to [Joe Walnes](https://github.com/joewalnes) and collaborators for their contribution to the [websocketd](https://github.com/joewalnes/websocketd) project.

To run the script, in a terminal (such as _bash_) navigate to the mentioned directory by ```cd models/```, ensure that the proper execution permissions are set by executing ```chmod +x vmstat-out.sh``` and run it like this:

```
./vmstat-out.sh
```

The script should start by printing the following log, which means that the websocket is waiting to be listened to on port 4080:
```
Tue, 13 Sep 2022 12:49:52 +0200 | INFO   | server     |  | Serving using application   : /usr/bin/vmstat -n 1
Tue, 13 Sep 2022 12:49:52 +0200 | INFO   | server     |  | Starting WebSocket server   : ws://localhost:4080/
```

### Web app build with npm
Once the **vmstat** script is running, we can now set up and run the web app.

Please note that you will need to install **Node.js** and **npm** in your system in order to proceed with this step. Follow this [guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to do so.

To install all of the required Node dependencies for the project, run:

```
npm install
```

or

```
npm i
```
for short.

Once this is completed succesfully, we can then run the app by:

```
npm run dev
```

It should return the following log, which means that the web app is running correctly, and will be listening to the aformentioned websocket.

```
> jsresourcemonitor@1.0.0 dev
> nodemon --ext '*' index.js

[nodemon] 2.0.19
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: (all)
[nodemon] starting `node index.js`
Server is running in localhost:4000
```

And that should be it. You should now be able to browse to the web app by typing in the ```localhost:4000``` URL on your preferred web browser.
