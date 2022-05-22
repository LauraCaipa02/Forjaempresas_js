let boton2=document.getElementById("boton2");
boton2.addEventListener('click', ()=>{
    let usuario=document.getElementById("usuario").value;
    let contraseña=document.getElementById("contraseña").value;
    if (usuario.length==0 && contraseña.length==0){
        error.innerHTML=`
        <p>Ingrese sus datos</p>`
    } else if (usuario=="Admin" && contraseña=="Kuepa2022") {
        window.setTimeout(()=>{window.location.href="dashboard.html"},1000);
    } else {
    let error=document.getElementById("error");
    error.innerHTML=`
    <p class='errorm'>Error de credenciales</p>`
    }
    error.style.setProperty("height", "30px");
});


