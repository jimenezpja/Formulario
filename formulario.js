const formulario = document.getElementById('Formulario');
const inputs = document.querySelectorAll('#Formulario input');
const expresiones = {
	Nombre:/^[a-zA-ZÀ-ÿ\s]{2,40}$/,
  Apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
	Correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  Contraseña: /^.[0-9a-zA-ZÀ-ÿ\S.]{7,20}$/,
	Telefono: /^\d{11,20}$/,
  Pasaporte: /^[V|E][0-9]{5,9}$/

}
const campos ={
  Nombre:false,
  Apellido:false,
	Correo:false,
  Contraseña:false,
	Telefono:false,
  Pasaporte:false
}
const validarFormulario = (e) => {
  switch (e.target.name) {
    case "Nombre":
      validarcampo(expresiones.Nombre, e.target, 'Nombre');
    break;
    case "Apellido":
      validarcampo(expresiones.Apellido, e.target, 'Apellido');
    break;
    case "Correo":
      validarcampo(expresiones.Correo, e.target, 'Correo');
    break;
    case "Contraseña":
      validarcampo(expresiones.Contraseña, e.target, 'Contraseña');
      validarcontraseña2();
    break;
    case "Contraseña2":
      validarcontraseña2();
    break;
    case "Telefono":
      validarcampo(expresiones.Telefono, e.target, 'Telefono');
    break;
    case "Pasaporte":
      validarcampo(expresiones.Pasaporte, e.target, 'Pasaporte');
    break;
  }
}
const validarcampo = (expresion, input, campo) =>{
  if(expresion.test(input.value)){
    document.getElementById(`${campo}`).classList.remove('dark:focus:border-red-500');
    document.getElementById(`label_${campo}`).classList.remove('peer-focus:dark:text-red-500');
    document.getElementById(`span_${campo}`).classList.remove('flex');
    document.getElementById(`span_${campo}`).classList.add('hidden');
    campos[campo] = true;
  }
  else {
    document.getElementById(`${campo}`).classList.add('dark:focus:border-red-500');
    document.getElementById(`label_${campo}`).classList.add('peer-focus:dark:text-red-500');
    document.getElementById(`span_${campo}`).classList.remove('hidden');
    document.getElementById(`span_${campo}`).classList.add('flex');
    campos[campo] = false;
  }
}
const validarcontraseña2 = () => {
  const inputContraseña = document.getElementById('Contraseña');
  const inputContraseña2 = document.getElementById('Contraseña2');
  if(inputContraseña.value !== inputContraseña2.value){
    document.getElementById(`Contraseña2`).classList.add('dark:focus:border-red-500');
    document.getElementById(`label_Contraseña2`).classList.add('peer-focus:dark:text-red-500');
    document.getElementById(`span_Contraseña2`).classList.remove('hidden');
    document.getElementById(`span_Contraseña2`).classList.add('flex');
    campos["Contraseña"] = false;
  }
  else{
      document.getElementById(`Contraseña2`).classList.remove('dark:focus:border-red-500');
      document.getElementById(`label_Contraseña2`).classList.remove('peer-focus:dark:text-red-500');
      document.getElementById(`span_Contraseña2`).classList.add('hidden');
      document.getElementById(`span_Contraseña2`).classList.remove('flex');
      campos["Contraseña"] = true;
    }
}

inputs.forEach((input) =>{
  input.addEventListener('keyup',validarFormulario);
  input.addEventListener('blur',validarFormulario);
});

formulario.addEventListener('submit', (e) =>{
  e.preventDefault();
  if(campos.Nombre && campos.Apellido && campos.Correo &&campos.Contraseña && campos.Telefono && campos.Pasaporte){
    formulario.reset();
    document.getElementById('envio_exito').classList.remove('hidden');
    document.getElementById('envio_exito').classList.add('flex');
    setTimeout(() =>{
      document.getElementById('envio_exito').classList.add('hidden');
      document.getElementById('envio_exito').classList.remove('flex');
    }, 3000);
  }
});

