Stéphane NGOV DFS10 - developpement javascript
Création d'un mini jeux vidéo avec le framwork crafty
http://craftyjs.com/
le but du jeux, un casse brique sommaire.
fonctionnalité:
une barre qui simule un vaisseau
une boule qui simule un balle
des rectangles qui simule des briques à casser

règle:

- si la boule touche la brique, il dissparait
- si la boule sort de du bas de l'écran , il a perdu, il faudra recommencer
- si la boule touche les cotés gauche, haut, droite, elle doit rebondir
- si la touche touche une belle elle rebondie
- s'il y a plus de brique a cassé, on a gagné

difficulté:
- a chaque rebond le vaisseau diminue
- a chaque rebond du vaisseau ou missile, la vitesse augmente

implémentation :

- gestion game over par Crafty timper stop
- gestion du start par une detection de l'état du jeux localStorage
- gestion du bouton recommancer par  location.reload();
- gestion collision avec crafty.onHit
- gestion de la vitesse par le fps de crafty

non terminée:

- le style dans le même fichier
- fichier non rangé sous forme de module avec requirejs
- tentative du try catch de la lecture du json




========================================================================================================


testeur: Quantin
Fonctionnalités possibles :

Ajouter le rebond sur la barre selon l'angle 
Bouger la barre si on reste appuyé sur les touches directionnelles
menu pause
fonction restart (boutton qui refresh la page?)

Bugs :

Barre diminue de manière aléatoire ?

