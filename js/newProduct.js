const productName = document.getElementById('name');
const errorPrice = document.getElementById('errorPrice');
const btnCreate = document.getElementById('btnCreate');



btnCreate.addEventListener('click', (e) => {
    e.preventDefault(); //PARA QUE LA PAGINA NO SE RECARGUE AL PRESIONAR EL BOTON

    if (productName.name == []) {
        document.write(errorPrice.value)
    }else{
        alert("El producto "+ productName.value+ " fue agregado con exito");
    }

    

    

})