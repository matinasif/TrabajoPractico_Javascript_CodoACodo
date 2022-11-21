/*let ticketsResumen = document.querySelector("#ticketsResumen");
ticketsResumen.addEventListener("click", ticketsPrice());

let ticketsBorrar = document.querySelector("#ticketsBorrar");
ticketsBorrar.addEventListener("click", borrarOutput);

let ticketQuantity = document.querySelector("#ticketsQuantity");
ticketQuantity.addEventListener("click", descuento);

function ticketsPrice(evento){
    let ticketQuantity = document.querySelector("#ticketsQuantity");
    if (Number( ticketQuantity.value)){
        let ticketCategory = document.querySelector("#inputState");
        let totalPayment;
        switch(ticketCategory.value){
            case "estudiante":{
                totalPayment = 200 * ticketQuantity.value *0.2;
                break;
            }
            case "trainee":{
                totalPayment = 200 * ticketQuantity.value *0.5;
                break;
            }
            case "junior":{
                totalPayment = 200 * ticketQuantity.value *0.85;
                break;
            }
        }
        document.querySelector("#ticketoutput").textContent = 'hola';
    }
}*/

function totalAPagar(cantidadTickets, categoria){
    const valorTicket = 200;
    let total = cantidadTickets*valorTicket;
    switch(categoria){
        case "estudiante":
            total = total - (total * 0.8)
            break;
        case "trainee":
            total = total - (total * 0.5)
            break;
        case "junior":
            total = total - (total * 0.15)
            break;
    }
    return total;

}

let boton = document.getElementById("ticketsResumen")
boton.addEventListener("click", ()=>{
    let cantidad = document.getElementById("cantidad").value
    let categoria = document.getElementById("categorias").value
    let valor = totalAPagar(cantidad,categoria)

    let divRespuesta = document.getElementById("totalCompra");
    divRespuesta.textContent="Total a pagar: $"+valor;
})