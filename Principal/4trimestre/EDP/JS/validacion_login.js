function login() {
    // Obtener los valores de los campos de entrada
    var documento = document.getElementById('documento').value;
    var contraseña = document.getElementById("contraseña").value;

    // Esatas son las Expresiones regulares para validar el documento y la contraseña
  var documentoRegex = /^\d{7,10}$/;
  var contraseñaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   // Validar el documento con la expresión regular
    if (!documento.match(documentoRegex)) {
        alert("El documento ingresado no es válido.Verifique nuevamente los datos ingresados");
        return;
    }
  // Validar la contraseña con la expresión regular
    if (!contraseña.match(contraseñaRegex)) {
        alert("La contraseña debe contener al menos 8 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula y un número.");
        return;
    }
    if(documento == "12345678" && contraseña === "CIelo123"){
        window.location="../index.html";
    }else if (documento == 87654321 && contraseña == "JEsus432"){
        window.location="../administrador.html";
  
    }else if(documento == 1111 && contraseña == 1111){
  
        window.location="../agente.html";
    }else{
        alert("yuca");
          
    };
  
  };