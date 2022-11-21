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