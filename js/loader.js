window.addEventListener("load", function() {

    Modernizr.load([
        {
            load : [
                "js/game.js",
                "js/jquery.min.js"
            ],
            complete : function() {
                gameModule.start();
            }
        }
    ]);

}, false);