document.addEventListener("DOMContentLoaded", function () {
    const lienProjet = window.location.pathname.split('/').pop().toLowerCase();

    let index = -1;
    for (let i = 0; i < donneesProjets.length; i++) {
        const lienRelatif = donneesProjets[i].lien.split('/').pop().toLowerCase();
        
        if (lienRelatif === lienProjet) {
            index = i;
            break;
        }
    }

    let projet = donneesProjets[index];

    const galerie = document.getElementById("conteneur-galerie");

    let contientImages = false;
    if(projet.images.length > 0){
        contientImages = true;
    }

    galerie.innerHTML = `
        ${contientImages = true ? '<i class="fa-solid fa-circle-chevron-left"></i>' : ''}
        <div id="galerie">
            <video width="100%" controls>
                <source src="${projet.video}" type="video/mp4">
            </video>
        </div>
        ${contientImages = true ? '<i class="fa-solid fa-circle-chevron-right"></i>' : ''}
    `;
});