function salvar() {
    let Marca =  document.getElementById("marca").value; 
    let Modelo = document.getElementById("modelo").value;

    alert("Suas informações foram salvas!")
    
    const carro = {
     marcaCarro: Marca,
     modeloCarro: Modelo

    }
   
    localStorage.setItem('infoCarro', JSON.stringify(carro));
    console.log(carro)
    
}