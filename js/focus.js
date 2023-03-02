// let accueil = document.querySelector("accueil");

// accueil = document.hasFocus();

// console.log(accueil);

// if (accueil) {
//     console.log("Chui bandé");
// }else{
//     console.log("Po bandé :(");
// }

// let elementFocus = document.activeElement;

// if (!elementFocus || elementFocus == document.body){
//     elementFocus = null;
//     console.log("oups");
// }
// else if (document.querySelector) {
//     elementFocus = document.querySelector(":focus");
//     console.log(elementFocus.tagName);
// }



// let callback = (entries, observer) => {
//     console.log(entries, observer, projets);
// };

  
// let options = {
//     root: document.querySelector("accueil"),
//     rootMargin: "0px",
//     threshold: 1.0,
// };

// let observer = new IntersectionObserver(callback, options);
  




// let projets = document.getElementById("projets");
// observer.observe(projets);

// the callback we setup for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)


// const sections = document.querySelectorAll(".section");
// const accueil = document.getElementById("accueil");

// const observateur = new IntersectionObserver(entrees => {
//     console.log(entrees);
// });

// observateur.observe(sections[0]);


// observateur.observe(accueil);


// let config = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5
// };

// function callBack(entrees, observer) {
//     console.log(...entrees);
// }

// let observer = new IntersectionObserver(callBack, config);

// let accueil = document.getElementById('accueil');
// let projets = document.getElementById('projets');
// let contact = document.getElementById('pied-page');

// observer.observe(accueil);
// observer.observe(projets);
// observer.observe(contact);

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