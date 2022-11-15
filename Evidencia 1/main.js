addEventListener("DOMContentLoaded", () =>{


    let answer = document.querySelector(".rta")
    let myForm = document.querySelector("form")

    myForm.addEventListener("submit", (e) =>{

        e.preventDefault();

        let dataInput = Object.fromEntries(new FormData(e.target));

        let confi = Intl.NumberFormat('de-DE', {style: 'currency', currency: 'COP', minimumFractionDigits:0});
        
        let pesoCol = Math.round(Number(dataInput.dolares) * 4821.09)

        answer.innerHTML = `${confi.format(pesoCol)}`

    })
    
})
