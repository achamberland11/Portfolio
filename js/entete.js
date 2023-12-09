const nav = document.getElementById("nav");
nav.innerHTML = `
    <div class="haut-de-page" id="contacter-courriel">
        <a href="https://www.linkedin.com/in/antoine-chamberland-978195232/" target="_blank"><img src="https://s2.svgbox.net/social.svg?ic=linkedin&color=f0f8ff" width="32" height="32"></a>
        <a href="https://github.com/achamberland11" target="_blank"><img src="https://s2.svgbox.net/octicons.svg?ic=mark-github-bold&color=f0f8ff" width="32" height="32"></a>
        <a href="mailto:a.chamberland11@gmail.com">// Contacter</a>
        <!-- <span class="material-symbols-outlined">mail</span> -->
    </div>
    <div class="presentation nav">
        <div id="nav-accueil">
            <h2><span>[</span>Portfolio<span>]</span></h2>
            <a href="/Portfolio/#accueil" id="a-accueil"><span>[</span>Accueil<span>]</span></a>
            <a href="/Portfolio/#projets" id="a-projets"><span>[</span>Projets<span>]</span></a>
            <a href="/Portfolio/cv.html" id="a-cv"><span>[</span>CV<span>]</span></a>
        </div>
    </div>
`;