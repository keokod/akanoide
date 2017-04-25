     function lancer() {

      document.getElementById('intro').style.display = 'none';

      var vaisseau = Crafty.e("2D, Canvas, Color, Keyboard"); //déclaration du vaisseau
      fps = 400; //initalise la frame à 300 pour démarrer le jeux
      Crafty.timer.FPS(fps); //on lance le jeu
      vaisseau.attr({ //initialisaion de la forme du vaisseau
        x: maxX / 2 - 100,
        y: 580,
        w: 200,
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
        w: 20,
        h: 20
       }) //w taille de du vaisseau
       .color("white");


      //**************** clonage des briques ************

      var decadeH = 100; //décallage horizonal
      var decadeV = 50; //décallage vertical


      for (var i = 0; i < 10; i++) {

       var brique = Crafty.e("2D, Canvas, Color, Obstacle");

       brique.attr({ //initialisaion de la forme du missile
         x: 50 + i * decadeH, //on augment que les horizontal
         y: 50,
         w: 30,
         h: 30
        }) //w taille de du vaisseau
        .color("orange");
      
       
       for (var j = 0; j < 5; j++) {
        
                var brique = Crafty.e("2D, Canvas, Color, Obstacle");

       brique.attr({ //initialisaion de la forme du missile
         x: 50 + i * decadeH, //on augment que les horizontal
         y: 50 + j *decadeV,
         w: 30,
         h: 30
        }) //w taille de du vaisseau
        .color("orange");
       
       }
      }

      missile.bind('EnterFrame', function() {

       if (missile.y == 560) //perdu s'il sort du jeux
       {
        if (((vaisseau.x) > (missile.x)) || ((vaisseau.x + 200) < (missile.x))) { //le missile+10 pour la correction du centre missile
         //  alert("perdu |"+missile.x+"  XXX missile |" + (vaisseau.x) +"<<---- >>"+ (vaisseau.x+200)+"bord vaisseau");

         //********************************************* END  *********************************************
         //Crafty.timer.stop(); //on stop le jeu
         // debugger;
         // document.getElementById('end').style.display = 'block';
        }
       }

       //direction et déplacement vertical
       if (this.y > maxY) { //si on dépasse le bas on doit remonter
        directionY = "up";

        //debugger;
       }

       if (this.y < 0) { //si on dépasse on redescent
        directionY = "down";
        // debugger;
       }


       if (directionY == "up") { //si on dépasse la fenêtre de droite on passe à gauche
        this.y = this.y - aleatoire(); //on met un random pour ne pas avoir la même trajectoire
        //debugger;
       }

       if (directionY == "down") { //si on dépasse la fenêtre de droite on passe à gauche
        this.y = this.y + 1;

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
        this.x = this.x - 1;

        //debugger;
       }

       if (directionX == "right") { //si on dépasse la fenêtre de droite on passe à gauche
        this.x = this.x + aleatoire();

        //debugger;
       }

      })

      .checkHits('Obstacle').bind("HitOn", function(hitData) { //on vérifie à la volé la collision avec la brique

       if (directionX == 'left') {
        directionX = 'right';
       }
       else { //sinon cela veut dire que c'est à right donc il faut passer par left
        directionX = 'left';
       }

       if (directionY == 'up') {
        directionY = 'down';
       }
       else { //sinon cela veut dire que la direction est up
        directionY = 'up';
       }

      });
     }


     function aleatoire() {
      return Math.random() * (2 - 1) + 1;
     }
     