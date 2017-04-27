function lancer() {

    var largeurVaisseau = 200;
    var vaisseau = Crafty.e("2D, Canvas, Color,Vaisseau,Keyboard"); //déclaration du vaisseau
    fps = 200; //initalise la frame à 300 pour démarrer le jeux
    Crafty.timer.FPS(fps); //on lance le jeu

    vaisseau.attr({ //initialisaion de la forme du vaisseau
            x: maxX / 2 - 100,
            y: 580,
            w: largeurVaisseau,
            h: 20
        }) //w taille de du vaisseau (max/2-100 pour center le vaisseau)
        .color("red")
        .bind('KeyDown', function(e) {




            if (e.key == Crafty.keys.LEFT_ARROW) {

                this.x = this.x - 30;
            }
            else if (e.key == Crafty.keys.RIGHT_ARROW) {
                this.x = this.x + 30;
            }
        });

    var missile = Crafty.e("2D, Canvas, Color, Collision"); //déclaration du vaisseau

    missile.attr({ //initialisaion de la forme du missile
            x: maxX / 2 - 10,
            y: 560,
            w: 10,
            h: 10
        }) //w taille de du vaisseau
        .color("white");

    var decadeH = 100; //décallage horizonal
    var decadeV = 50; //décallage vertical

    var ligneBrique = 10;
    var rangerBrique = 5;

    var totalBrique = ligneBrique + rangerBrique; //nombre total de brique

    for (var i = 0; i < ligneBrique; i++) {

        var brique = Crafty.e("2D, Canvas, Color, Brique");

        brique.attr({ //initialisaion de la forme du missile
                x: 50 + i * decadeH, //on augment que les horizontal
                y: 50,
                w: 30,
                h: 30
            }) //w taille de du vaisseau
            .color(256, (i * i * i), 100);

        for (var j = 0; j < rangerBrique; j++) {

            var brique = Crafty.e("2D, Canvas, Color, Brique");

            brique.attr({ //initialisaion de la forme du missile
                    x: 50 + i * decadeH, //on augment que les horizontal
                    y: 50 + j * decadeV,
                    w: 30,
                    h: 30
                }) //w taille de du vaisseau
                .color(256, (aleatoire() * 100), 150);

        }
    }



    missile.bind('EnterFrame', function() {

                if (missile.y > 600) { //s'il touche le bas de l'écran #### GAME OVER ####

                    gameOver();
                } //perdu s'il le missile du jeux fenêtre du bas

                //direction et déplacement vertical
                if (this.y > maxY) { //si on dépasse le bas on doit remonter
                    directionY = "up";

                    //debugger;
                }

                if (this.y < 0) { //si on dépasse on redescent
                    directionY = "down";
                    console.log("perdu");
                    // debugger;
                }

                if (directionY == "up") { //si on dépasse la fenêtre de droite on passe à gauche
                    this.y = this.y - aleatoire(); //on met un random pour ne pas avoir la même trajectoire
                    //debugger;
                }

                if (directionY == "down") { //si on dépasse la fenêtre de droite on passe à gauche
                    this.y = this.y + aleatoire();

                    //debugger;
                }

                //direction et déplacement horizontal
                if (this.x > maxX) { //si on dépasse la fenêtre de droite on passe à gauche
                    directionX = "left";

                    //debugger;
                }

                if (this.x < 0) { //si on dépasse la fenêtre de droite on passe à gauche
                    directionX = "right";
                    // debugger;
                }

                if (directionX == "left") { //si on dépasse la fenêtre de droite on passe à gauche
                    this.x = this.x - aleatoire();

                    //debugger;
                }

                if (directionX == "right") { //si on dépasse la fenêtre de droite on passe à gauche
                    this.x = this.x + aleatoire();

                    //debugger;
                }

            } //finfonction enter frame
        )
        .onHit('Brique', function(collision) { // méthode qui permet de de supprimer la brique
            changeDirection();
            collision[0].obj.destroy();
            totalBrique = totalBrique - 1;
            if (totalBrique == 0) {
                alert("partie gagné!");
            }
            // debugger;
        })
        .onHit('Vaisseau', function(collision) { // méthode qui permet de rebondir le missile
            directionY = 'up';
            vaisseau.attr({ //initialisaion de la forme du vaisseau
                w: (largeurVaisseau = largeurVaisseau - 5), //diminuer la taille du vaisseau
            });

        })

    ;

}

function changeDirection() {

    if (directionY == 'up') {
        directionY = 'down';
    }
    else { //sinon cela veut dire que la direction est up
        directionY = 'up';
    }
    if (directionX == 'right') {
        directionX = 'left';

    }
    else { //sinon cela veut dire que c'est à right donc il faut passer par left
        directionX = 'right';
    }
    fps++; //augmener de la vitesse à chaque rebond missile ou vaisseau
}

function aleatoire() {
    return Math.random() * (2 - 1) + 1;
}


function gameOver() {
    Crafty.timer.stop(); //on stop le jeu
    // debugger;
    var gameOver = Crafty.e('2D, Canvas, Color,Text');


    gameOver.attr({
        x: maxX / 2 - 50,
        y: maxY / 2 - 100,
    }).color('red');

    gameOver.text("game over!").textFont({
        size: '50px',
        weight: 'bold',
    });


}
