(function() {
    var ouvertureDoc = function() {
        var beigne = document.getElementById('beigne');

        var conteur = undefined; // Timer de l'interval de l'animation
        var vRotationX = 1, vRotationZ = 1;

        // Code qui permet de faire tourner un beigne en 3D
        // Utilise https://www.a1k0n.net/2011/07/20/donut-math.html

        var renduASCII = function() {
            var texteBeigne = [];
            var z = [];
            vRotationX += 0.07;  // Vitesse de la rotation X
            vRotationZ += 0.02;  // Vitesse de la rotation Z
            var rotationCosX = Math.cos(vRotationX), rotationSinX = Math.sin(vRotationX),
                rotationCosZ = Math.cos(vRotationZ), rotationSinZ = Math.sin(vRotationZ);
            
            // Dessine la forme du beigne
            for(var k = 0; k < 7040; k++) { // La limite change le nbr de ligne rendu
                texteBeigne[k] = k % 160 == 159 ? "\n" : " ";
                z[k] = 0;
            }

            // Implémentation des charactère ASCII pour faire l'effet de lumière et d'ombre
            for(var theta = 0; theta < 12.56; theta += 0.14) { // 6.28 et 0.07
                var cosTheta = Math.cos(theta), sinTheta = Math.sin(theta);

                // Effet de lumière et d'ombre sur le beigne
                for(phi = 0; phi < 12.56; phi += 0.04) { //6.28
                    var sinPhi = Math.sin(phi), cosPhi = Math.cos(phi),
                        h = cosTheta + 2, // Change le rayon intérieur
                        // D change la perspective du beigne
                        D = 1 / (sinPhi * h * rotationSinX + sinTheta * rotationCosX + 6), // 1/z. Le dernier chiffre la taille. + petit = + grand
                        t = sinPhi * h * rotationCosX - sinTheta * rotationSinX; // Change la hauteur du beigne

                    var x = 0 | (80 + 60 * D * (cosPhi *h * rotationCosZ - t * rotationSinZ)),
                        y = 0 | (24 + 30 * D * (cosPhi * h * rotationSinZ + t * rotationCosZ)),
                        o = x + 160 * y,
                        indexLettreASCII = 0 | (8 * ((sinTheta* rotationSinX - sinPhi * cosTheta * rotationCosX) * rotationCosZ - sinPhi * cosTheta * rotationSinX - sinTheta* rotationCosX - cosPhi * cosTheta * rotationSinZ));
                    if(y < 44 && y >= 0 && x >= 0 && x < 159 && D > z[o])
                    {
                        z[o] = D;
                        texteBeigne[o] = ".,-~:;=!*#$@"[indexLettreASCII > 0 ? indexLettreASCII : 0];
                    }
                }
            }
            beigne.innerHTML = texteBeigne.join("");
        };
    
      window.animation = function() {
        if(conteur === undefined) {
          conteur = setInterval(renduASCII, 50);
        } else {
          clearInterval(conteur);
          conteur = undefined;
        }
      };

      renduASCII();
      animation();
    }

    /// Pour activer l'animation avec un bouton
    // const btnActivation = document.querySelector(".btnActivation");
    // btnActivation.addEventListener("click", () => window.anim1());
    
    if(document.all)
      window.attachEvent('onload',ouvertureDoc);
    else
      window.addEventListener("load",ouvertureDoc,false);
    })();