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



let callback = (entries, observer) => {
    console.log(entries, observer, projets);
};

  
let options = {
    root: document.querySelector("accueil"),
    rootMargin: "0px",
    threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);
  




let projets = document.getElementById("projets");
observer.observe(projets);

// the callback we setup for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
