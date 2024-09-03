function calculate () {
    let weight = document.getElementById("weight").value
    let weight_val = document.getElementById("weight-val").innerHTML = weight +"kg"
    let height = document.getElementById("height").value
    let height_val = document.getElementById("height-val").innerHTML = height +"cm"
    let result = document.getElementById("result")
    let category = document.getElementById("category")
    let BMI = weight / (height/100)**2
    BMI = BMI.toFixed(1)
    if (BMI < 18.5){
        result.style.color = "#CCCC00"
        category.innerHTML = "underweight"
    }else if (18.5<=BMI && BMI<=24.9){
        result.style.color = "green"
        category.innerHTML = "normal"
    }else if(25<=BMI && BMI<=29.9) {
        result.style.color = "orange"
        category.innerHTML = "overweight"
    }else{
        result.style.color = "red"
        category.innerHTML = "fat"
    }
    result.innerHTML = BMI
    
}