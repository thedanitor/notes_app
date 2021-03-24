# Notes App

https://thedanitor.github.io/notes_app/

This project is from the Day 33 code along video from Udemy's 50 projects in 50 days series focused on web development. I have added some comments to the CSS and JavaScript to make notes to myself why certain choices are being made and what particular lines of code do.

### Overall Impression

I made a note taking app early in my coding journey that was nearly identical to this one, so this was a good refresher on how to use local storage. I also thought it was very cool to be able to format the notes with markdown. 

### Things Learned

* Can use marked CDN to parse text in markdown with ```marked()```
* Reminder that ```localStorage.setItem(key, value)``` takes in a name/key and a value that needs to be a string, so ```JSON.stringify()```
* To retrieve from local storage use ```localStorage.getItem(key)```, but need to parse so wrap in ```JSON.parse()```
* Can use ```sessionStorage()``` in same way as ```localStorage()```, but data will be cleared when browser is closed