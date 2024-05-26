/* Function para desactivar check del menu-toggle */
function unCheckMenu() {
    if  (window.innerWidth > 760 && document.getElementById("menu-toggle").checked)
    {document.getElementById("menu-toggle").checked=false;}
}

window.addEventListener('resize', unCheckMenu );
/* Function para desactivar check del menu-toggle */


/* Validacion del formulario */
function validarFormulario() {
    valor=document.getElementById("nroTelefono").value;
    
        if( isNaN(valor) ) 
        {
            document.getElementById('error-nroTelefono').innerHTML = "Ingrese numeros!";
            /*limpiar();*/
            alert("Ingrese Numeros");
            return false;
        }
        else    
        {
            if( valor < 0 || valor > 9999999999 || valor ==="") 
            {
                document.getElementById('error-nroTelefono').innerHTML = "Dato incorrecto!";
                /*limpiar();*/
                alert("Ingrese Numeros");
                return false;
            }
        }
       /* return true;          
    /*}
    
    function validacion() {*/
    valor = document.getElementById("firstName").value;
    document.getElementById('error-firstName').innerHTML = "";
        
        if( valor == null || valor.length == 0) 
        {
            document.getElementById('error-firstName').innerHTML = "Tenes que completar el Nombre!";
            elemento = document.getElementById('firstName');
            elemento.focus();
            
            return false;
        }
        console.log("Nombre",firstName.value,"Apellido",lastName.value,"Tel",nroTelefono.value);
        alert("Formulario Enviado!");
        
        /*return true;  */
        
    }

    

/* tomado del video 10 cAC pero NO esta funcionando 
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const nroTelefono = document.querySelector("#ntoTelefono");
const email = document.querySelector("#email");

if(firstName && lastName && nroTelefono && email) {
    formRegister.addEventListener('submit', validarFormulario);
    } else {
    console.log("error no se puede enviar")
    }

function validarFormulario(event) {
    event.preventDefault();

    let validation = true;

    if (firstName.value ==="") {
        firstName.classList.add("error");
        errorfirstName.textContent = "El nombre no puede estar vacio"
        validation = false
    } else {
        firstName.classList.remove("error");
        errorfirstName.textContent = ""
    }
    }

    if (validation) {
    console.log ("Datos validos")
    } else {
    console.log("error no se puede enviar")
    }
    firstName.addEventListener("input",()=>
        if( firstName.value != "")
    
    
    )
*/ 
