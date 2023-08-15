const form = document.querySelector('form')
let bmi = 0

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const info = document.querySelector('#info')
    
    if (height === '' || height < 0 || isNaN(height) ) {
        result.innerHTML = `Please enter a valid number ${height}`
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid number ${weight}`
    }else{
        bmi = (weight / ((height * height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
    }

    if (bmi < 18.6) {
        info.innerHTML = `Underweight`
    }else if (bmi > 18.6 && bmi <24.9) {
        info.innerHTML = `Normal range`
    }else if(bmi > 24.9){
        info.innerHTML = `Overweight`
    }else{
        info.innerHTML = `Enter a valid number`
    }
})