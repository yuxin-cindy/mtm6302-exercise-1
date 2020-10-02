// Add text in title and headline 
title.textContent = 'mtm6302-exercise-1'
headline.textContent = 'Emoji Gallry'

                            // Animal section
animal.textContent = 'Animals' 
// Target elements
let $decAnimal = document.getElementById('decAnimal')

// Iterate throught arry for each element to add emoji id
let animals = ['129409','129408', '129430', '129428 ','129425','129418','129417','129421','129420','129416','129427','129426','129422','129423','129424','128012','128017','128018','128024','128033']

let decAnimal = `` 

for (const animal of animals){
    decAnimal  += `<p><span>&#${animal}</span><br><code style="font-size: 1rem">${animal}</code></p>`
}
// Add all of the elements to the HTML 
$decAnimal.innerHTML = decAnimal



                                // Emotion section

emotion.textContent = 'Emotions'
// Target elements
let $decEmotion = document.getElementById('decEmotion')

let decEmotion = ``

// Generate the emoji by incrementing id by each time
for (let i = 128512; i < 128552; i++) {
    decEmotion = decEmotion + `<p><span>&#${i}</span><br>
    <code style="font-size: 1rem">${i}</code></P>`
}
// Add all of the elements to the HTML  
$decEmotion.innerHTML = decEmotion