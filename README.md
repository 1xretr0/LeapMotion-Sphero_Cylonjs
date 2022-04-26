# LeapMotion-Sphero_Cylonjs
This repo contains mainly js project files, scripts and resources for LeapMotion and Sphero interaction.

## how to
1. have nodejs already installed
2. have npm ready and updated with `npm install -g npm`
3. install `npm install -g cylon` globally if not installed
4. install directly in project workspace `npm install cylon cylon-gpio cylon-i2c cylon-leapmotion`
5. run leap.js with `node leap.js`

## test_robot.js
just a default `helloworld.js` with cylon

## leap.js
js integration with leap motion tracking log in real time

## test_sphero.py
py integration of sphero with SpheroEduApi

## TODO
For some reason, `leap.js` is only working with the tracking software version of **Orion V4.1**.
Still need to check installing `cylon-sphero` because its throwing lots of errors.
The current plan is to implement the leapmotion input and sphero as output.
