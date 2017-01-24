function removeTransition(e) { // remove the transition/.playing css from the div, once the sound has finished playing (so when the transition has ended)
  //if (e.propertyName !== 'transform') return; // if the transition property name is not 'transform', skip it
  this.classList.remove('playing'); // otherwise (ie, when the transition property name IS 'transform'), once the transition has ended, remove .playing css
}

function playSound(e) { // define what happens when press a key
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // set audio variable/constant
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`); // set key variable/constant
  if (!audio) return; // if key press doesn't correspond to  sound, stop the function
  key.classList.add('playing'); // add .playing css to 'clicked' div/key
  audio.currentTime = 0; // rewind the sound to the start, so can play them overlapping (?)
  audio.play(); // play the chosen sound file
}

const keys = (document.querySelectorAll('.key')); // set keys variable/constant
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound); // listen for window event 'keydown' (when press key) >> upon hearing this, execute function 'playSound'
