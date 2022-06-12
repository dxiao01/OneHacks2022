## 🤔 Inspiration

Within our own team, some of us already suffer from carpal tunnel syndrome. We feel that this is a major issue that a lot of people in computer-related fields face, and there isn’t a real answer to it except for expensive measures that are to be taken after someone already has it. We ultimately decided that the best solution for these diseases was a tool that prevented people from getting them in the first place, hence our solution that aims to correct for posture before someone develops any potential back or wrist strain.

## 📷 What it does

This project uses a TensorFlow machine learning model to detect whether or not the user has proper posture. This model runs every time the user browses our website, opens the android application, or runs the raspberry pi application. After the image detection detects improper posture, the user will receive a notification on their phone via Twilio informing them that their posture needs to be fixed. 

## 👷 How we built it

There are three major aspects to this project: TenserFlow.js, React, and Twilio. 

First, TensorFlow was used to make the image detection model. TensorFlow is a library used to make the machine learning model. We used two separate models to optimize the performance in different areas. For example, our website uses a certain model while our raspberry pi uses a model with a lower resolution to prevent lag. 

For data, we used around 300 samples for each model. These samples were gathered with a variety of people, video setups, rooms, and chairs to ensure accuracy no matter the demographic the consumer was in. 

Second, the website was built with react. While react was the main part of the website we also used React-Router-Dom, TailwindCSS, Twilio, Tensorflow, and ML5. The website gets the model, metadata, and weighting files from the tensorflow.js model. Then, the website used the camera from the user, and then the webcam pushes the input into the TensorFlow files.
As for the raspberry pi solution, we simply just made a TensorFlow-lite version of our model and dropped it into google’s raspberry pi ML Template. After that, the program simply just worked

Finally, We implemented Twilio to work with the system and to send notifications to the user. 


## 🌶️ Challenges we ran into
Our biggest challenge was the machine learning model. Initially, we had little experience with TensorFlow and only with static image recognition. Now, we had to detect complex movements. To eliminate this problem, we had to think outside the 2-D plane and found a way to add a new dimension to our model. We decided to record not just from one angle but many different ones to make the model more accurate and compatible with videos. 

We also didn’t have much experience with actual image clarification and video rendering togather. This made it extremely difficult for us to implement the webcam. Initially, we were unsuccessful but after much effort and a few hours of studying HTML we were able to get the webcam to work. 

## 🎖️ Accomplishments that we're proud of

First and foremost, we are proud of making a solution that we would personally use in our day-to-day lives as developers.

Second, we are proud of how we managed to implement Twilio and the yelp API to find help for the people who need it. 

Third, we are primarily proud of how we got our model to be accurate amongst a variety of demographics and locations

## 🧠 What we learned

We learned a lot from this project from how to hack better the social and mental impacts of the problem. From a hacker's point of view, we learned how to use various new tools to create a funtioning website, notably Twilio, react, tailwind, ml5, yelp API,  and a few other tools. We also learned how to use android studio and how to make TensorFlow lite models.

## 🔜 What's next for Helping Hand

We want to create a more accurate model. In order to do so, we need to collect data from all demographics and ages to make them much more accurate. Due to the open source, this can be done in a matter of minutes as long as we have data. 
We want to enable a "clip" feature to be sent with Twilio. So what this would do is that the webcam you are using would send take a photo whenever your posture slips and send it to you. This would make it much easier for people to understand that their issue is much more prominent than they think it is, plus the user could easily send these images to healthcare professionals to get a better diagnosis.

