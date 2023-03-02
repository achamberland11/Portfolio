let config = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

function callBack(entries, observer) {
    entries.forEach(entry => {
        //Lorsque accueil est focus, a-accueil devient actif
        if (entry.target.id === 'accueil') {
            if(entry.isIntersecting){
                document.getElementById("a-accueil").classList.add("nav-actif");
            }else{
                document.getElementById("a-accueil").classList.remove("nav-actif");
            }
        }

        //Lorsque projets est focus, a-projets devient actif
        if (entry.target.id === 'projets') {
            if(entry.isIntersecting){
                document.getElementById("a-projets").classList.add("nav-actif");
            }else{
                document.getElementById("a-projets").classList.remove("nav-actif");
            }
        }

        //Lorsque contact est focus, a-contact devient actif
        if (entry.target.id === 'contact') {
            if(entry.isIntersecting){
                document.getElementById("a-contact").classList.add("nav-actif");
            }else{
                document.getElementById("a-contact").classList.remove("nav-actif");
            }
        }
    });
}

let observer = new IntersectionObserver(callBack, config);

let accueil = document.getElementById('accueil');
let projets = document.getElementById('projets');
let contact = document.getElementById('contact');

observer.observe(accueil);
observer.observe(projets);
observer.observe(contact);