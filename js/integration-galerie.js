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

    const conteneurGalerie = document.getElementById("conteneur-galerie");

    let aContenueGalerie = projet.galerie.length > 1;

    if (aContenueGalerie) {
        conteneurGalerie.innerHTML = `
            <button class="boutons-galerie" id="btnPrecedant"><span class="material-symbols-outlined">keyboard_double_arrow_left</span></button>
            <div id="galerie"></div>
            <button class="boutons-galerie" id="btnSuivant"><span class="material-symbols-outlined">keyboard_double_arrow_right</span></button>
        `;

        const galerie = document.getElementById('galerie');
        const contenuGalerie = projet.galerie;
        let indexGalerie = 0;
        console.log(indexGalerie);

        contenuGalerie.forEach(function (contenu, index) {
            if (contenu.type === typeImage) {
                const elementIMG = document.createElement('img');
                elementIMG.setAttribute('src', contenu.src);
                elementIMG.classList = "element-galerie";

                elementIMG.style.display = index === indexGalerie ? 'block' : 'none';
                galerie.appendChild(elementIMG);
            } else if (contenu.type === typeVideo) {
                const elementVideo = document.createElement('video');
                elementVideo.style.width = '100%';
                elementVideo.controls = true;
                elementVideo.classList = "element-galerie";

                const elementSource = document.createElement('source');
                elementSource.src = contenu.src;
                elementSource.type = "video/mp4";

                elementVideo.appendChild(elementSource);
                elementVideo.style.display = index === indexGalerie ? 'block' : 'none';
                galerie.appendChild(elementVideo);
            }

            console.log(contenu.titre + ", " + index);
        });

        const btnPrecedant = document.getElementById('btnPrecedant');
        const btnSuivant = document.getElementById('btnSuivant');

        const nbrContenuGalerie = contenuGalerie.length - 1;

        // Navigation à travers les images
        btnPrecedant.addEventListener('click', function () {
            indexGalerie = (indexGalerie - 1 + contenuGalerie.length) % contenuGalerie.length;
            ContenuGalerieVisible();
        });

        btnSuivant.addEventListener('click', function () {
            indexGalerie = (indexGalerie + 1) % contenuGalerie.length;
            ContenuGalerieVisible();
        });

        // Mettre à jour les images ou la video visible
        function ContenuGalerieVisible() {
            console.log(indexGalerie);

            const elementGalerie = galerie.querySelectorAll('.element-galerie');
            elementGalerie.forEach(function(element, index){
                element.style.display = index === indexGalerie ? 'block' : 'none';
            });
            const elementsVideo = galerie.querySelectorAll("video");
            elementsVideo.forEach(function (video, index) {
                if (video.style.display === 'none') {
                    video.pause();
                }
            });
        }
    } else {
        conteneurGalerie.innerHTML = `
            <div id="galerie">
                <video width="100%" controls>
                    <source src="${projet.galerie[0].src}" type="video/mp4">
                </video>
            </div>
        `;
    }
});
