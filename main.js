function informe(){
    // declarar variables
        let Nombre
        let Identificacion
        let Sexo
        let Embarazo
        let peso
        let Estatura
        let Edad
        let Masa_muscular

        // obtener datos de html
        Nombre=document.getElementById("Nombre").value
        Identificacion=document.getElementById("Identificacion").value
        Sexo=document.getElementById("Sexo").value
        peso=Number(document.getElementById("peso").value)
        Estatura=Number(document.getElementById("Estatura").value)
        Edad=Number(document.getElementById("Edad").value)
        Masa_muscular = 35

        // calcular imc y imm 
        let Imc = peso / (Estatura * Estatura)
        let Imm = (Imc * Masa_muscular) / 100
        
        // obtener embarazo solamente si es femenino
        if (Sexo == "Femenino") {
        Embarazo=document.getElementById("Embarazo").value   
        }

        // determinar mayor y menor de edad
        if (Edad>= 18) {
        console.log("udsted es mayor de edad");}
        else {
            console.log("udsted es menor de edad");
        }
        // mostrar embarazo solamente si es femenino
        if (Sexo == "Femenino") {
            alert("Embarazo: " + Embarazo)
        }

        // mostrar resultados 
        alert(" === SUS DATOS SON: ===")
        alert("NOMBRE: " + Nombre)
        alert("DOCUMENTO: " + Identificacion)
        alert("Sexo: " + Sexo)
        alert("ESTATURA: " + Estatura)
        alert("Edad: " + Edad)
        alert("PESO: " + peso)
        alert("IMC : " + Imc)
        alert("IMM: " + Imm)

        // Mostrar resumen completo
        alert(" === SUS DATOS SON: ===" + "\n" +
        "NOMBRE: " + Nombre + "\n" +
            "DOCUMENTO: " + Identificacion + "\n" +
            "PESO: " + peso + "\n" +
            "ESTATURA: " + Estatura + "\n" +
            "Edad: " + Edad + "\n" +
            "Sexo: " + Sexo + "\n" +
            (Sexo == "Femenino" ? "Embarazo: " + Embarazo + "\n" : "") +
            "IMC: " + Imc + "\n" +
            "IMM: " + Imm
        )

    }
    // funcion para mostrar y ocultar embarazo
    function mostrarEmbarazo(){

        let Sexo = document.getElementById("Sexo").value

        let campoEmbarazo = document.getElementById("campoEmbarazo")

        if (Sexo == "Femenino") {
            campoEmbarazo.style.display = "block"
        }
        else {
            campoEmbarazo.style.display = "none"
        }

    }
