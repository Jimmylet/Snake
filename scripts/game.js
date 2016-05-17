
/**
 * Created by jimmy on 17/05/16.
 */

(function( Snake ) {
    "use strict";

    var oApp = {
            "canvas": null,
            "context": null,
            "width": null,
            "height": null
        },

        _isCanvasSupported;

        _isCanvasSupported = function( $canvasElt ) {

            return !!$canvasElt.getContext; // Mettre !! transforme en boolean. True si supporte canvas. False si ne supporte pas.
        };

        oApp.setup = function() {

            this.canvas = document.querySelector( "#game" );
            if ( !_isCanvasSupported( this.canvas ) ){
                return console.error( " Canvas isn't supported ! " );
            }

            // Raccourcis pour le contexte, la largeur et la hauteur
            this.context = this.canvas.getContext( "2d" );
            this.width = this.canvas.width;
            this.height = this.canvas.height;

            window.game = new Snake ( this );

        };

    oApp.setup();

})( window.Snake );