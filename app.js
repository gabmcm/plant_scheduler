let submit = document.querySelector('#submit')

let result = document.querySelector('#result')

submit.addEventListener('click', calculate)
document.addEventListener('keypress', (event)=>{
    if (event.keyCode === 13) {
        calculate()
    }
})

submit.addEventListener('mouseenter', () =>{
    submit.classList.toggle('active')
})
    
submit.addEventListener('mouseout', () => {
    submit.classList.toggle('active')
})

function calculate() {
    let lastWatered = Number(document.querySelector('#last-watered').value)
    let dampDepth = Number(document.querySelector('#damp-depth').value)

    if (dampDepth == 0 || lastWatered == 0){
        result.innerText = "Please enter more info to determine your watering schedule"
    } else if (dampDepth < 3) {
        result.innerText = "You should water every 3 days"
    } else if (dampDepth >=3 && dampDepth <= 5 && lastWatered < 3){
        result.innerText = "You should water every 5 days"
    } else if (dampDepth > 5 && lastWatered < 3){
        result.innerText = "Your plant still has plenty of water. Record how many days from when you watered it until it is dry and that will give you a watering schedule."
    } else if (dampDepth > 3 && lastWatered > 5){
        result.innerText = "This is unusual. You should check your drainage, soil quality, and access to sunlight. Monitor until the plant is completely dry before watering again."
    } else {
        result.innerText = "You should water every 7 days"
    }


    console.log(lastWatered)
    console.log(dampDepth)
    console.log(temp)
}

let temp = ''



let hot = document.querySelector('#hot')
let comft = document.querySelector('#comfortable')
let cold = document.querySelector('#cold')

hot.addEventListener('click', () =>{
    temp = 'hot'
    hot.classList.toggle('active')
    comft.classList.remove('active')
    cold.classList.remove('active')
})
comft.addEventListener('click', () =>{
    temp = 'comfortable'
    comft.classList.toggle('active')
    cold.classList.remove('active')
    hot.classList.remove('active')
})
cold.addEventListener('click', () =>{
    temp = 'cold'
    cold.classList.toggle('active')
    hot.classList.remove('active')
    comft.classList.remove('active')
})

