# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Daymon Wu

Time spent: 17 hours spent in total

Link to project: (https://glitch.com/edit/#!/butternut-potent-wood)

## Required Functionality

The following **required** functionality is complete:

- [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [X] "Start" button toggles between "Start" and "Stop" when clicked.
- [X] Game buttons each light up and play a sound when clicked.
- [X] Computer plays back sequence of clues including sound and visual cue for each button
- [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [X] User wins the game after guessing a complete pattern
- [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [X] Buttons use a pitch (frequency) other than the ones in the tutorial
- [X] More than 4 functional game buttons
- [ ] Playback speeds up on each turn
- [X] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [X] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

<img src="http://g.recordit.co/ktuF8Mx7LY.gif" width=250><br>

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
    https://www.w3schools.com/html/html_attributes.asp
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment
    https://www.w3schools.com/js/js_const.asp
    https://codeburst.io/learn-let-var-and-const-in-easiest-way-with-guarantee-e6ecf551018a
    https://www.youtube.com/watch?v=1Rq_LrpcgIM&list=RDCMUCjX0FtIZBBVD3YoCcxnDC4g
    https://www.youtube.com/watch?v=jww3V2fSQyg
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
    https://stackoverflow.com/questions/1286084/pushing-value-of-var-into-an-array
    https://www.w3schools.com/jsref/jsref_push.asp
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    https://stackoverflow.com/questions/8836265/using-a-variable-value-to-call-an-array-element
    https://www.tutorialspoint.com/How-to-pass-Arrays-to-Methods-in-Java
    https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
    https://programminghead.com/how-to-play-audio-in-html-using-javascript/
    https://www.sitepoint.com/community/t/is-it-possible-to-do-two-things-onclick/2665/3
    https://www.youtube.com/watch?v=wffK2OIt8u0
    https://www.w3schools.com/cssref/pr_class_display.asp
    https://www.w3schools.com/css/css_display_visibility.asp
    https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   A challenge that I encountered in creating this submission was adding the optional features to the pre-work. I was able to create more game 
   buttons comfortably, but it was tough for me when I started working on creating random secret patterns. Overcoming this obstacle was very 
   challenging for me. I looked up a load of questions about variables, arrays, strings, and math.Random() because I didn't have any prior 
   knowledge regarding JS, CSS, and Html. With the tools and the link Math.random in the tutorial page and the instructions, I implemented 
   the math function into my javascript. All I had to do now was call that function in my startgame function and put those numbers in my 
   pattern variable. It seemed hard to do at first until I started thinking step by step. First, I had to define what kind of numbers I wanted 
   from the math.Function, so I looked up how to set up the parameters for my math function. Setting up the for loop took a little bit of 
   thinking, but it was similar to C++'s for loops. After setting up the for loop and figuring out how to push the array from the for loop to my 
   pattern variable, I kept getting the same set of random numbers unless I refreshed the browser. I kept changing my for loop and tried putting 
   numbers in the math.Random function because I kept getting the same set of random numbers. I was stuck on this problem for a few days, and 
   honestly, at this point, I felt like giving up until I found a thread on StackOverflow about emptying arrays in Javascript. I used the second 
   method in the thread and implemented the code at the beginning of the start function so every time the function starts, it would clear the 
   array first before giving a new set of random numbers. It had worked! I felt thrilled and rewarded for being able to accomplish something I 
   thought was challenging.
   
3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   If I had more time to work on this project, I would try to finish the rest of the optional features I was missing. The optional features seem 
   a bit tricky but finishing them does not look impossible. Being creative is one of my passions, and I could see this project maybe become a 
   platform for people wanting to learn how to play the piano. I had an idea where we could line up the buttons, set them up vertically, and have 
   each button mimic a piano's frequency. Then on the sides, there can be hyperlinks of the many songs we can teach the user. Teaching the user how 
   to play a song will be similar to my game Color Echo. Instead of having a random pattern that the user has to repeat each time, we can have the 
   user repeat a song's melody, which can be a fun and new way to learn music!

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   After completing this pre-work, it only felt like a small glimpse of what web development is. Web development seems complicated, but very 
   interesting that being able to create a webpage with three languages. It's like building legos, adding an engine and wheels to make it work, and 
   then finishing it off with an excellent paint job. In the bigger picture, it seems much more complicated than just coding. I am curious how people 
   communicate with each other in the scene and what each person is responsible for during a project. I'd like to know what I can improve or learn to 
   become a web developer.

## License

    Copyright [Daymon Wu]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
