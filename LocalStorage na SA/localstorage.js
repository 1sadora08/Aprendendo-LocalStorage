function salvar() {
    let Marca =  document.getElementById("marca").value; 
    let Modelo = document.getElementById("modelo").value;

    const carro = {
     marcaCarro: Marca,
     modeloCarro: Modelo

    }
   
    localStorage.setItem('infoCarro', JSON.stringify(carro));
    
}