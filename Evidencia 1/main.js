addEventListener("DOMContentLoaded", () =>{

    let myForm = document.querySelector("form")
    let contenido = document.querySelector("tbody")
    let tabla = document.querySelector("table")

    myForm.addEventListener("submit", (e) =>{
        e.preventDefault();

    let dataInput = Object.fromEntries(new FormData(e.target));   

        contenido.insertAdjacentHTML("beforeend",`
        <tr>
            <td>${dataInput.hora}</td>
            <td>${dataInput.actividad}</td>
        </tr>`)

    })
    
})
