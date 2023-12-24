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

    let contientImages = projet.images.length > 0;

    if (contientImages) {
        conteneurGalerie.innerHTML = `
            <button class="boutons-galerie" id="btnPrecedant"><span class="material-symbols-outlined">keyboard_double_arrow_left</span></button>
            <div id="galerie">
                <video width="100%" controls>
                    <source src="${projet.video}" type="video/mp4">
                </video>
            </div>
            <button class="boutons-galerie" id="btnSuivant"><span class="material-symbols-outlined">keyboard_double_arrow_right</span></button>
        `;

        const galerie = document.getElementById('galerie');
        const images = projet.images;
        let indexImage = -1;

        images.forEach(function (image, index) {
            const elementIMG = document.createElement('img');
            galerie.appendChild(elementIMG);
            elementIMG.setAttribute('src', image.src);
            elementIMG.style.display = index === indexImage ? 'block' : 'none';
        });

        const video = conteneurGalerie.querySelector('video');
        const btnPrecedant = document.getElementById('btnPrecedant');
        const btnSuivant = document.getElementById('btnSuivant');

        nbrImages = images.length - 1;

        // Navigation à travers les images
        btnPrecedant.addEventListener('click', function () {
            if(indexImage > -1){
                indexImage--;
            }else{
                indexImage = nbrImages;
            }
            ImageVisible();
        });

        btnSuivant.addEventListener('click', function () {
            if(indexImage < nbrImages){
                indexImage++
            }else{
                indexImage = -1;
            }
            ImageVisible();
        });

        // Mettre à jour les images ou la video visible
        function ImageVisible() {
            video.style.display = indexImage === -1 ? 'block' : 'none';

            const imgElements = galerie.querySelectorAll('img');
            imgElements.forEach(function (img, index) {
                img.style.display = index === indexImage ? 'block' : 'none';
            });

            if(video.style.display === 'none'){
                video.pause();
            }
        }
    } else {
        conteneurGalerie.innerHTML = `
            <div id="galerie">
                <video width="100%" controls>
                    <source src="${projet.video}" type="video/mp4">
                </video>
            </div>
        `;
    }
});