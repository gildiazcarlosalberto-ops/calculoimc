function informe(){
    let Nombre
    let Identificacion
    let Sexo
    let Embarazo
    let peso
    let Estatura
    let Edad
    let Masa_muscular
    Nombre=document.getElementById("Nombre").value
    Identificacion=document.getElementById("Identificacion").value
    Sexo=document.getElementById("Sexo").value
    Embarazo=document.getElementById("Embarazo").value
    peso=Number(document.getElementById("peso").value)
    Estatura=Number(document.getElementById("Estatura").value)
    Edad=Number(document.getElementById("Edad").value)
    Masa_muscular = 35
    let Imc = peso / (Estatura * Estatura)
    let Imm = (Imc * Masa_muscular) / 100

     if (Edad>= 18) {
    console.log("udsted es mayor de edad");}
    else {
        console.log("udsted es menor de edad");
    }

    if (Sexo == "Femenino") {
        if (Embarazo == "si") {
            console.log("udsted esta en embarazo");
            }else {
            console.log("udsted no esta en embarazo");}
        }
    
    alert(" === SUS DATOS SON: ===")
    alert("NOMBRE: " + Nombre)
    alert("DOCUMENTO: " + Identificacion)
    alert("Sexo: " + Sexo)
    alert("Embarazo: " + Embarazo)
    alert("ESTATURA: " + Estatura)
    alert("Edad: " + Edad)
    alert("PESO: " + peso)
    alert("IMC : " + Imc)
    alert("IMM: " + Imm)

     alert(" === SUS DATOS SON: ===" + "\n" +
       "NOMBRE: " + Nombre + "\n" +
        "DOCUMENTO: " + Identificacion + "\n" +
        "PESO: " + peso + "\n" +
        "ESTATURA: " + Estatura + "\n" +
        "Edad: " + Edad + "\n" +
        "Sexo: " + Sexo + "\n" +
        "Embarazo: " + Embarazo + "\n" +
        "IMC: " + Imc + "\n" +
        "IMM: " + Imm
    )

   }
