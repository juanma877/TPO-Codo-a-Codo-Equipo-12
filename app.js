/* Function para desactivar check del menu-toggle */
function unCheckMenu() {
    if  (window.innerWidth > 760 && document.getElementById("menu-toggle").checked)
    {document.getElementById("menu-toggle").checked=false;}
}

window.addEventListener('resize', unCheckMenu );


// Fetch de api

fetch('https://audius-discovery-4.theblueprint.xyz/v1/tracks/trending')
    .then(Response => Response.json())
    .then(data => {
        const firstTenAlbums = data.data.slice(0,12);
        const albumsCardHTML = firstTenAlbums.map(data => 
        
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
    