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


    console.log(index);

    if (index !== -1) {
        donneesProjets.splice(index, 1);
        console.log(donneesProjets);
    }

    const conteneurProjets = document.getElementById("autres-projets");

    donneesProjets.forEach((projet) => {
        const elementProjet = document.createElement("a");
        elementProjet.href = projet.lienIndex;

        const vignette = projet.urlVignette;
        elementProjet.innerHTML = `
            <div  style="background-image: ${vignette}" class="projet conteneur">
            <div class="info-projets">
                <h2>${projet.titre}</h2>
                <h3>${projet.technologie}</h3>
                <h4>${projet.date}</h4>
            </div>
            </div>
        `;
        conteneurProjets.appendChild(elementProjet);
    });
});