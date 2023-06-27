function login(){
    var documento,contraseña;
    documento = document.getElementById('documento').value;
    contraseña = document.getElementById('contraseña').value;
    if(documento == "12345678" && contraseña === "CIelo123"){
        window.location.href = "../index.html";
    }else if (documento == 87654321 && contraseña == "JEsus432"){
        window.location.href = "../administrador.html";

    }else if(documento == 1018403573 && contraseña == "Contraseña123"){

        window.location.href = "../agente.html";
    }else{
        alert("yuca");
        
    };

};