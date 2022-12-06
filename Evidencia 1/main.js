addEventListener("DOMContentLoaded", () =>{

    let myForm = document.querySelector("form")
    let rta =document.querySelector("span")

    myForm.addEventListener("submit", (e) =>{
        e.preventDefault();

    let dataInput = Object.fromEntries(new FormData(e.target));   

    if (dataInput.grados == "f") {
        let faC = new Decimal((dataInput.valor - 32) * 5/9)
        rta.innerHTML = `${dataInput.valor}°F a °C son ${faC.toDecimalPlaces(3)}°C`
    }
    else {
        let caF = new Decimal((dataInput.valor * 9/5) + 32)
        rta.innerHTML = `${dataInput.valor}°C a °F son ${caF.toDecimalPlaces(3)}°F`
    }
    })
    
})
