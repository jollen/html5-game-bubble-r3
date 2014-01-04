window.addEventListener("load", function() {

    Modernizr.load([
        {
            load : [
                "js/game.js",
                "js/jquery.min.js",
                "js/sizzle.js"
            ],
            complete : function() {
                gameModule.start();
            }
        }
    ]);

}, false);