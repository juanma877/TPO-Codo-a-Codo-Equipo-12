/* Function para desactivar check del menu-toggle */
function unCheckMenu() {
    if  (window.innerWidth > 760 && document.getElementById("menu-toggle").checked)
    {document.getElementById("menu-toggle").checked=false;}
}

window.addEventListener('resize', unCheckMenu );
/* Function para desactivar check del menu-toggle */


/* Validacion del formulario */
function validarformulario()¨{
    valor=dicument.getElementById("telefono").value;
    if( isNaN(valor) ) 
        {
            document.getElementById('mensaje').innerHTML = "La edad debe ser un numero!";
            limpiar();
            return false;
        }
        else    
        {
            if( valor < 0 || valor > 130 || valor ==="") 
            {
                document.getElementById('mensaje').innerHTML = "La edad debe estar entre 0 y 130 años!";
                limpiar();
                return false;
            }
        }
        return true;          
    }
    
    function validacion() 
    {
        valor = document.getElementById("nombre").value;
        
        if( valor == null || valor.length == 0) 
        {
            
            document.getElementById('mensaje').innerHTML = "Tenes que completar el Nombre!";
            elemento = document.getElementById('nombre');
            elemento.focus();
            
            return false;
        }
        
        return true;  

/* tomado del video 10 cAC pero NO esta funcionando 
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const telefono = document.querySelector("#telefono");
const email = document.querySelector("#email");

if(firstName && lastName && telefono && enail)¨{
    formRegister.addEventListener("submit" validarformulario)
} else {
    console.log("error no se puede enviar")
}

function validarformulario(event){
    event.preventDefault();

    let validation = true;

    if (firstName.value ===""){
        firstName.classList.add("error");
        errorfirstName.textContent = "El nombre no puede estar vacio"
        validation = false
    }else ¨[
        firstName.classList.remove("error");
        errorfirstName.textContent = ""
    ]
}

    if(validation){
    console.log ("Datos validos")
    } else {
    console.log("error no se puede enviar")
}
    firstName.addEventListener("input",()=>
        if( firstName.value != "")
    
    
    )
*/
