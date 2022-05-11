let boton2=document.getElementById("boton2");
boton2.addEventListener('click', ()=>{
    let usuario=document.getElementById("usuario").value;
    let contraseña=document.getElementById("contraseña").value;
    if (usuario=="Admin" && contraseña=="Kuepa2022") {
        window.setTimeout(()=>{window.location.href="dashboard.html"},1000);
    } else {
    let error=document.getElementById("error");
    error.innerHTML=`
    <p>Error de credenciales</p>`
    }
    error.style.setProperty("color", "red");
    error.style.setProperty("text-decoration", "underline");
});


