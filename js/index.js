function calcula_imc(event){
  event.preventDefault()
  var altura = document.imcForm.querySelector('#altura').value;
  var peso = document.imcForm.querySelector('#peso').value;
  var sexo = document.imcForm.sexo.value;
  

  var calculo = (peso/(altura*altura));
 if(sexo=='F'){
  if(calculo<19){
      alert("Você está abaixo do peso com esse indice: " + calculo);
  }
  else if(calculo>=19 && calculo<24){
      alert("Você está normal com esse indice: " + calculo);
  }

  else if(calculo>=24 && calculo<29) {
      alert("Você está com obesidade leve com esse indice: " + calculo);
  }
  else if(calculo>=29 && calculo<39) {
      alert("Você está com obesidade moderada com esse indice: " + calculo);
  }
  else if (calculo>=39)
{
      alert("Você está com obesidade mórbida com esse indice: " + calculo);
  }
 }
 else{
  if(calculo<20){
    alert("Você está abaixo do peso com esse indice: " + calculo);
}
else if(calculo>=20 && calculo<25){
    alert("Você está normal com esse indice: " + calculo);
}

else if(calculo>=25 && calculo<30) {
    alert("Você está com obesidade leve com esse indice: " + calculo);
}
else if(calculo>=30 && calculo<40) {
    alert("Você está com obesidade moderada com esse indice: " + calculo);
}
else if (calculo>=40)
{
    alert("Você está com obesidade mórbida com esse indice: " + calculo);
}

 }
}