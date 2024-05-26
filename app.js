/* Function para desactivar check del menu-toggle */
function unCheckMenu() {
    if  (window.innerWidth > 760 && document.getElementById("menu-toggle").checked)
    {document.getElementById("menu-toggle").checked=false;}
}

window.addEventListener('resize', unCheckMenu );

// Fetch de api

<<<<<<< HEAD
// Fetch de api

=======
>>>>>>> formContacto
fetch('https://audius-discovery-4.theblueprint.xyz/v1/tracks/trending')
    .then(Response => Response.json())
    .then(data => {
        const firstTenAlbums = data.data.slice(0,12);
        const albumsCardHTML = firstTenAlbums.map(data => 
<<<<<<< HEAD
=======
        
        `
        <div class="card">
        <img src="${data.artwork['150x150']}">
        <div class="titulo">
        <h3>${data.title}<br>${data.genre}</h3>
        </div>
        </div>
        


        `).join('');
        

        document.getElementById('albums').innerHTML = albumsCardHTML;
    })
    .catch(error=>console.log('error', error))
    


    fetch('https://audius-discovery-4.theblueprint.xyz/v1/tracks/trending')
    .then(Response => Response.json())
    .then(data => {
        const firstTenNovedades = data.data.slice(13,24);
        const novedadesCardHTML = firstTenNovedades.map(data => 
        
        `
        <div class="card2">
        <img src="${data.artwork['150x150']}">
        <div class="titulo2">
        <h3>${data.title}<br>${data.genre}</h3>
        </div>
        </div>
        
        


        `).join('');
        

        document.getElementById('novedades').innerHTML = novedadesCardHTML;
    })
    .catch(error=>console.log('error', error))
    // Fetch de api


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
>>>>>>> formContacto
        
        `
        <div class="card">
        <img src="${data.artwork['150x150']}">
        <div class="titulo">
        <h3>${data.title}<br>${data.genre}</h3>
        </div>
        </div>
        


        `).join('');
        

        document.getElementById('albums').innerHTML = albumsCardHTML;
    })
    .catch(error=>console.log('error', error))
    


    fetch('https://audius-discovery-4.theblueprint.xyz/v1/tracks/trending')
    .then(Response => Response.json())
    .then(data => {
        const firstTenNovedades = data.data.slice(13,24);
        const novedadesCardHTML = firstTenNovedades.map(data => 
        
        `
        <div class="card2">
        <img src="${data.artwork['150x150']}">
        <div class="titulo2">
        <h3>${data.title}<br>${data.genre}</h3>
        </div>
        </div>
        
        


        `).join('');
        

        document.getElementById('novedades').innerHTML = novedadesCardHTML;
    })
    .catch(error=>console.log('error', error))
    