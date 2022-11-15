addEventListener("DOMContentLoaded", () => {

    let tabla1 = document.querySelector(".tabla1")
    let tabla2 = document.querySelector(".tabla2")
    let boton = document.querySelector("button")
 
    boton.addEventListener("click", (e) => {
        if (e.target.dataset.option == "mostrar") {
            let P = (2 * 5) < 8
            let Q = (4 * 6) > (2 * 5)
            let PorQ = P || Q
            tabla1.innerHTML = `
        <tr>
            <td>${P}</td>
            <td>${Q}</td>
            <td>${PorQ}</td>
        </tr>
        `

            P = (4 + 5) < 3
            Q = (5 * 5) + 4 + 25 < 3
            PandQ = P && Q
            tabla2.innerHTML = `
        <tr>
            <td>${P}</td>
            <td>${Q}</td>
            <td>${PandQ}</td>
        </tr>
        `
            e.target.dataset.option = "limpiar"
            e.target.innerHTML = "limpiar";
        } else {
            e.target.dataset.option = "mostrar"
            e.target.innerHTML = "click";
            tabla1.innerHTML = "";
            tabla2.innerHTML = "";
        }


    })

})
