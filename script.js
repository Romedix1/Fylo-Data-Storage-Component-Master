let howMuchLeft = document.querySelector("#how-much-left-amount")
let howMuchUsed = document.querySelector("#used-amount")
let slider = document.querySelector('input[type="range"]')

slider.addEventListener("input",()=>{
    let sliderValue = slider.value
    console.log(sliderValue)

    howMuchLeft.innerHTML = 1000 - sliderValue
    howMuchUsed.innerHTML = sliderValue + " GB"
})