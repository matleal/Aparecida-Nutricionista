var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdimc = paciente.querySelector(".info-imc");

    /*Validação do peso e altura*/
    var pesoValido = true;
    var alturaValida = true;

    if(peso < 0 || peso > 1000){
        pesoValido = false;
        tdimc.textContent = "Peso Invalido!";
        paciente.querySelector(".info-peso").classList.add("paciente-invalido");
    }

    if(altura < 0 || altura > 3.0){
        alturaValida = false;
        tdimc.textContent = "Altura Invalida!";
        paciente.querySelector(".info-altura").classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida){
        var imc = calculaImc(peso, altura);
        tdimc.textContent =  imc;
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    console.log(imc);

    return imc.toFixed(2);
}




