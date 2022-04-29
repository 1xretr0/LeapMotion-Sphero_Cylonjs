# LeapMotion-Sphero_Cylonjs
This repo contains mainly js project files, scripts and resources for LeapMotion and Sphero interaction.

## how to cylonjs
1. have nodejs already installed
2. have npm ready and updated with `npm install -g npm`
3. install `npm install -g cylon` globally if not installed
4. install directly in project workspace `npm install cylon cylon-gpio cylon-i2c cylon-leapmotion`
5. run test_robot with `node test_robot.js`

## how to Sphero py
1. have python 3.7 or later installed
2. have pip installed and updated `py -m pip install --upgrade pip`
3. install globally or locally sphero and bleak packages with `pip install spherov2 Bleak`
4. run test_sphero.py

## test_robot.js
just a default `helloworld.js` with cylon

## leap.js
js integration with leap motion tracking log in real time

**expected output**
![image](https://user-images.githubusercontent.com/65722993/165593198-417258e0-aa16-4ddf-ad86-b63357fac973.png)

## leap2.js
js code that detects, obtains and returns user's hand position

**expected output**
x,y,z coordinates
## test_sphero.py
py integration of sphero with SpheroEduApi

**expected output**
the sphero mini toy should turn on different led colors and weirdly move a bit.

## TODO
For some reason, `leap.js` is only working with the tracking software version of **Orion V4.1**.
Still need to check installing `cylon-sphero` because its throwing lots of errors.
The current plan is to implement the leapmotion input and sphero as output.
