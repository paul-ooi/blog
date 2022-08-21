---
layout: posts.njk
title: Play with Music with JavaScript
metaDescription: 
tag: ["coding"]
permalink: "blog/{{ title | slugify}}/index.html"
publishedDate: 2020-06-09
---
Just for fun I am going through a series of <a rel="noreferrer noopener" href="https://www.youtube.com/watch?v=lhNdUVh3qCc" target="_blank">JavaScript games</a> and creating my own versions. For my own twist, I thought it'd be fun to add some sounds to the game, and wondered if there's a way to do it with code. Sure enough, there is. There's a Web Audio API that can be used in the browser. Mozilla has an <a rel="noreferrer noopener" href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Simple_synth" target="_blank">example synth</a> with code to get started. 

Here's a sample of code that I've pieced together to play a scale, just to get me started. The function playTone takes in three parameters; a frequency value for the note itself, a duration to play the note and a delay period before playing the note.

```js
var audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Reference https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Simple_synth
function playTone(freq, time = null, delay = 0) {
    let masterGainNode = audioContext.createGain();
    masterGainNode.connect(audioContext.destination);
    masterGainNode.gain.value = 0.6;

    let type = "triangle"; // sine | square | sawtooth | triangle

    let osc = audioContext.createOscillator();
    osc.connect(masterGainNode);
    osc.type = type;
    osc.frequency.value = freq;

    delay = delay * 1000;
    setTimeout(function() {
        osc.start();

        if (time != null) {
            let duration = time * 1000;
            setTimeout(function() {
                osc.stop();
            }, duration);
        }
    }, delay);

    return osc;
}

// An Object of an 8 note scale
let note = {
    C5  : 523.2511306011972,
    D5  : 587.3295358348151,
    E5  : 659.2551138257398,
    F5  : 698.4564628660078,
    G5  : 783.9908719634985,
    A5  : 880,
    B5  : 987.7666025122483,
    C6  : 1046.5022612023945
};

playTone(note.C5, 1, 0);
playTone(note.D5, 1, 1);
playTone(note.E5, 1, 2);
playTone(note.F5, 1, 3);
playTone(note.G5, 1, 4);
playTone(note.A5, 1, 5);
playTone(note.B5, 1, 6);
playTone(note.C6, 1, 7);
```

This is far from creating an orchestral piece but I'm hoping to set a few notes together to play at least a chime of sorts in my game(s). Once I complete the chime, I'll update this post and place a link to the game here.
