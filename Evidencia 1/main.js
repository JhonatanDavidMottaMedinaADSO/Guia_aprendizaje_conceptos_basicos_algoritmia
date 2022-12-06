addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector('form')
    let arr = 180
    let pech = 1 / 4
    let cebo = 1 / 4
    let pimiv = 1 / 4
    let pimir = 1 / 4
    let calpoll = 300
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target))
        let cantPeople = Number(dataInput.cant)
        let arroz = arr * cantPeople
        let pechuga = pech * cantPeople
        let cebolla = cebo * cantPeople
        let pimientaverde = pimiv * cantPeople
        let pimientaroja = pimir * cantPeople
        let caldopollo = calpoll * cantPeople


        let tabla = document.querySelector("table");
        tabla.innerHTML = `
            <thead>
                <tr>
                    <th>Ingredientes</th>
                    <th>Cantidad para ${cantPeople} personas</th>
                    <th>Preparación</th>
                </tr> 
            </thead>
            <tbody>
                <tr>
                    <td> Arroz </td>
                    <td> ${arroz} gr </td>
                    <td> 1. Se comienza haciendo el sofrito. Se ponchan las cebollas y los pimientos</td>
                </tr>
                <tr>
                    <td> Pechuga </td>
                    <td> ${pechuga} </td>
                    <td> 2. Se incorpora al sofrito la pechuga cortada y salpimentada, se dora</td>
                </tr>
                <tr>
                    <td> Cebolla </td>
                    <td> ${cebolla} </td>
                    <td> 3. Una vez dorada, se agrega el arroz y se rehoga un poco.</td>
                </tr>
                <tr>
                    <td> Pimienta Verde </td>
                    <td> ${pimientaverde} </td>
                    <td> Al rehogarse esto hace que el arroz absorba todo el sabor que soltó la pechuga y las verduras </td>
                </tr>
                <tr>
                    <td> Pimienta Roja </td>
                    <td> ${pimientaroja} </td>
                    <td> 4. Se cubre el arroz con el caldo de pollo y se deja cocinar por 18 minutos</td>
                </tr>
                <tr>
                    <td> Caldo de pollo </td> 
                    <td> ${caldopollo} </td>
                    <td> 5. Despues de los 18 queda listo y a disfrutar</td>
                </tr>
            </tbody>
                `

    })

})  