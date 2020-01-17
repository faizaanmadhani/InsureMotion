# Hackthe6ix2019
## View the project here https://devpost.com/software/insuremotion


Driving is an essential aspect of our everyday life, and the safety of driving should be the priority for all drivers. We wanted to build an app that helps the drivers stay safe on the roads by being more aware of their emotions, and save them money by having customized insurance plans based on their risks. Our app is programmed to analyze the emotions of drivers and can give an estimate of the change of cost in their auto insurance plan.

### What it does

InsureMotion is a mobile app that tracks your driving to determine whether or not you have a road rage problem. Stay calm and collected while driving? The app will help you reduce your insurance premiums. The app will film you while driving and look for facial expressions to detect emotion. The emotion data is used to see how calm and collected you can stay while on the road.


### How we built it
InsureMotion app uses Expo to detecting for sudden vibrations indicating a collision or abrupt stop and consequently triggers the camera to capture video of the driver. Using Microsoft Azure Face Emotion Recognition API and our own Python Flask REST API, we were able to process the images and obtain the emotion present for each image. These are emotions are then used to determine a score for your road rage and distracted driving. These scores are a way of assessing the driver’s behaviour and also provide valuable information to their insurance company for a reduction in car insurance premiums. The end-user is able to login into the mobile app to start a trip and record there driving.

![InsureMotion Camera](https://raw.githubusercontent.com/faizaanmadhani/Hackthe6ix2019/master/gallery.png)
