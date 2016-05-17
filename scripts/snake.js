/**
 * Created by jimmy on 17/05/16.
 */

(function() {
    "use strict";

    var Snake;

    Snake = function( oApp ) {

        var drawCanvas;
    };

    /*function create_snake(){
        var i;
        var length = 8; // Longueur par défaut du snake
        var aSnake = []; // Array vide pour démarrer
        for ( i = length - 1; i >= 0; i-- ) {
            // Créer un snake horizontal au démarrage du jeu
            snake_array.push({x: i, y: 0});
        }
    }*/

    /*function initialize(){
        var direction = "right"; // Direction par défaut
    }*/


    // Remplir le canvas


    drawCanvas = function() {
        this.context.fillStyle = '#000';
        this.context.beginPath();
        this.context.moveTo(x - (size / 2), y - (size / 2));
        this.context.lineTo(x + (size / 2), y - (size / 2));
        this.context.lineTo(x + (size / 2), y + (size / 2));
        this.context.lineTo(x - (size / 2), y + (size / 2));
        this.context.closePath();
        this.context.fill();
    }

})();