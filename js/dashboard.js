let btnmodal=document.getElementById("btnmodal"); //boton


btnmodal.onclick=function buscar(e){
    e.preventDefault();

    let documento= document.getElementById('busqueda').value; // input
    let resultado=document.querySelector(".resultado"); // div para tablas 
    let modal=document.getElementById("modal");

    if (documento.length==0) {
        let error__dash=document.getElementById("error__dash");
        error__dash.innerHTML=`
        <p>Ingrese un número de documento</p>`;
        error__dash.style.setProperty("color", "#1D1B45");
        error__dash.style.setProperty("text-decoration", "underline");
        } else if (documento.length<6) {
        let error__dash=document.getElementById("error__dash");
        error__dash.innerHTML=`
        <p>Ingrese un número de documento válido</p>`;
        error__dash.style.setProperty("color", "#1D1B45");
        error__dash.style.setProperty("text-decoration", "underline");
    }else{
        error__dash.innerHTML=`
        <p></p>`;
        if(documento== 52368795 ){
            modal.classList.add('show');
            resultado.innerHTML = `
            <h2>Nombre: Johan Orjuela</h2>
            <h2>C.C.: 52368795</h2>
            <h2>EPS: Compensar</h2>
            <h3>PRIMERA DOSIS</h3>

            <table class='tablemodal'>
            <tr>
                <th>BIOLÓGICO</th>
                <th>FECHA</th>
                <th>SEDE</th>
                <th>VACUNADOR</th>
                <th>ID VACUNADOR</th>
            </tr>
            <tr>
                <td>Sinovac</td>
                <td>29/11/2021</td>
                <td>Calle 68</td>
                <td>Ana Garcia</td>
                <td>23129324</td>
            </tr>
            </table>

            <div>¿Desea actualizar la información del paciente?</div>
            
            <div class="btnmsg">
                <a><button class="btnsi" id="accept">Si, gracias!</button></a>
                <a><button class="btnno" id="cancel">Cerrar</button></a>
            </div>
            `;
            let cancel=document.getElementById("cancel");
            let accept=document.getElementById("accept");
            accept.addEventListener('click',()=>{
                window.setTimeout(()=>{window.location.href="formvacunas.html"},400);
            });
            cancel.addEventListener('click',()=>{
                modal.classList.remove('show');
            });
        }

        else if(documento== 1001235478){
            modal.classList.add('show');
            resultado.innerHTML = `
            <h2>Nombre: Marcela Gutierrez</h2>
            <h2>C.C.: 1001235478</h2>
            <h2>EPS: Nueva EPS</h2>
            <h3>El Paciente tiene dos dosis</h3>
            <table class='tablemodal'>
            <tr>
                <th>DOSIS</th>
                <th>BIOLÓGICO</th>
                <th>FECHA</th>
                <th>SEDE</th>
                <th>VACUNADOR</th>
                <th>ID VACUNADOR</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Sinovac</td>
                <td>31/07/2021</td>
                <td>Calle 57</td>
                <td>Alexandra Torres</td>
                <td>54232111</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Sinovac</td>
                <td>28/08/2021</td>
                <td>Calle 57</td>
                <td>Alex Sierra</td>
                <td>56643453</td>
            </tr>
            </table>
            <div>¿Desea actualizar la información del paciente?</div>
            <div class="btnmsg">
                <a><button class="btnsi" id="accept">Si, gracias!</button></a>
                <a><button class="btnno" id="cancel">Cerrar</button></a>
            </div>
            `;
            let cancel=document.getElementById("cancel");
            let accept=document.getElementById("accept");
            accept.addEventListener('click',()=>{
                window.setTimeout(()=>{window.location.href="formvacunas.html"},400);
            });
            cancel.addEventListener('click',()=>{
                modal.classList.remove('show');
            });
        }

        else if(documento== 25413574){
            modal.classList.add('show');
            resultado.innerHTML = `
            <h2>Nombre: Sebastian Cuellar</h2>
            <h2>C.C.: 25413574</h2>
            <h2>EPS: Famisanar</h2>
            <h3>El Paciente tiene tres dosis</h3>
            <table class='tablemodal'>
            <tr>
                <th>DOSIS</th>
                <th>BIOLÓGICO</th>
                <th>FECHA</th>
                <th>SEDE</th>
                <th>VACUNADOR</th>
                <th>ID VACUNADOR</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Pfizer</td>
                <td>01/11/2021</td>
                <td>Calle 68</td>
                <td>Laura Ramirez</td>
                <td>32663423</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Pfizer</td>
                <td>29/11/2021</td>
                <td>Calle 68</td>
                <td>Nailu Rojas</td>
                <td>23425222</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Moderna</td>
                <td>18/04/2022</td>
                <td>Calle 68</td>
                <td>Fernanda Pulido</td>
                <td>1002324250</td>
            </tr>
            </table>
            <div>El paciente tiene el esquema de vacunación completo</div>
            <div class="btnmsg">
                <a><button class="btnno" id="cancel">Cerrar</button></a>
            </div>
            `
            ;
            let cancel=document.getElementById("cancel");
            cancel.addEventListener('click',()=>{
                modal.classList.remove('show');
            });  
        }

        else if(documento== 1007203506){
            modal.classList.add('show');
            resultado.innerHTML = `
            <h2>No existe registro de vacunación asociado al documento ingresado</h2>
            <div>¿Desea hacer el registro?</div>
            <div class="btnmsg">
                <a><button class="btnsi" id="accept">Si, gracias!</button></a>
                <a><button class="btnno" id="cancel">Cerrar</button></a>
            </div>
            `
            ;
            let cancel=document.getElementById("cancel");
            let accept=document.getElementById("accept");
            accept.addEventListener('click',()=>{
                window.setTimeout(()=>{window.location.href="formpacientes.html"},400);
            });
            cancel.addEventListener('click',()=>{
                modal.classList.remove('show');
            });  
        } 

        else{
            modal.classList.add('show');
            resultado.innerHTML = `
            <h2>No existe registro de vacunación asociado al documento ingresado</h2>
            <div>¿Desea hacer el registro?</div>
            <div class="btnmsg">
                <a><button class="btnsi" id="accept">Si, gracias!</button></a>
                <a><button class="btnno" id="cancel">Cerrar</button></a>
            </div>
            `;
            let cancel=document.getElementById("cancel");
            let accept=document.getElementById("accept");
            accept.addEventListener('click',()=>{
                window.setTimeout(()=>{window.location.href="formpacientes.html"},400);
            });
            cancel.addEventListener('click',()=>{
                modal.classList.remove('show');
            });  
        } 
    }
};
