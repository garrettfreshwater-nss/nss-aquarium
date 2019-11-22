// import initializeDetailButtonEvents from './dialogs.js'
// import addMouseOverEventListeners from './highlight.js';
// import addTipMouseOverEventListeners from './tips.js';
import { useFish } from './FishDataProvider.js';

// initializeDetailButtonEvents()
// addTipMouseOverEventListeners()
// addMouseOverEventListeners()
useFish()

const allOfTheFish = useFish()
console.log("allofTheFish", allOfTheFish)
for (const fish of allOfTheFish) {
    console.log("individual fish object:", fish)
}