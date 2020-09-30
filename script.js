title.textContent = 'mtm6302-exercise-1'
headline.textContent = 'Emoji Gallry'

                            // Animal section
animal.textContent = 'Animals' 

let $decAnimal = document.getElementById('decAnimal')

let animals = ['129409','129408', '129430', '129428 ','129425','129418','129417','129421','129420','129416','129427','129426','129422','129423','129424','128012','128017','128018','128024','128033']

let decAnimal = `` 

for (const animal of animals){
    decAnimal  += `<p><span>&#${animal}</span><br><code style="font-size: 1rem">${animal}</code></p>`
}

$decAnimal.innerHTML = decAnimal



                                // Emotion section

emotion.textContent = 'Emotions'

let $decEmotion = document.getElementById('decEmotion')
let decEmotion = ``

for (let i = 128512; i < 128552; i++) {
    decEmotion = decEmotion + `<p><span>&#${i}</span><br>
    <code style="font-size: 1rem">${i}</code></P>`
}

$decEmotion.innerHTML = decEmotion