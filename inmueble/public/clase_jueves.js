window.onload = function () {
    document.getElementById("submit").addEventListener("click", function () {
        
        let cedula = document.getElementById("cedula").value;
        let validacion = true;
        let resultado = "Errores: " + "\n";
        let expcedula = /^[0 -9]{10}$/;
        if (cedula.length == 0) {
            resultado += "digite la cedula" + "\n";
            validacion = false;
        } else if (!expcedula.test(cedula)) {
            resultado += "el campo cedula llevar 10 numeros solamente" + "\n";
            validacion = false;
        }
        let checkbox = document.getElementById("checkbox").checked;
        if (checkbox == false) {
            resultado += "acepte terminos y condiciones" + "\n";
            validacion = false;
        }
        let celular = document.getElementById("celular").value;
        let expresion = /^[0 -9]{10}$/;

        if (!expresion.test(celular)) {
            resultado += "el campo celular debe llevar 10 numeros" + "\n";
            validacion = false;
        }
        if (validacion == true) {
            resultado = "Ingreso correctamente todos los campos" + "\n";
        }
        document.getElementById("respuesta").innerHTML = resultado;

    })
}