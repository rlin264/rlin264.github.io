---
layout: project
title: Pokewalk Go
summary: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, dolore.
categories: [projects]
git: https://github.com/rlin264/PokewalkGo
image: /assets/project_images/pokemongo.jpg
description: Hatch eggs faster in Pokemon Go without walking/spoofing
---

<img src="/assets/project_images/pokemongo.jpg" alt="drawing" width = 500px/>


For those without data plans like me, it was difficult to go out and play the game. 
Other Pokemon Go players faced similar problems and developed 
"spoofing" which fakes the GPS location to simulate 
walking/movement. However, Pokemon Go developers soon caught on 
and banned players that attempted this. Not wanting to be 
banned, we wanted another solution that would make the game 
more enjoyable.

Eggs are an alternative way of obtaining Pokemon; however, 
players must walk long distances to hatch them. 
As lazy Gen Z teens, we didn't walk to actually walk. 
Thus, we created Pokewalk Go, an app that accelerates the 
egg hatching process without being caught by Pokemon Go's 
anti-cheat detection. The app uses the Google Fit API to modify
 fitness information and insert data that makes Pokemon Go 
 think we have walked much more than we actually have. With a 
 press of a button, we can "walk" 5 km. We have been able to 
 achieve otherwise absurd numbers (400 km walked/week) easily 
 without any issues. The app also has automation functionality
  which will automatically log distance for you. As a result, 
  our Pokemon Go experience has become much more eggcellent.

I implemented the Google Fit API in Java (Android Studio) 
that allowed us to create running instances that would then be
 converted to a distance in Pokemon Go. I also designed the 
 user interface and the auto-running function.
