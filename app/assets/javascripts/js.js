$(document).ready(function(){
  $("#jquery_jplayer_1").jPlayer({
    volume: 1.0,
    swfPath: "/assets",
    supplied: "oga, mp3"
  });

  // Change to track defined by 'rel' attribute of link with audioButton class
  $(".audiobutton").click(function() {

    $("#intro_msg").hide("slow");

    $("#jquery_jplayer_1").jPlayer("destroy");
    index = this.rel;

    $("#jquery_jplayer_1").jPlayer({
      ready: function () {
        $(this).jPlayer("setMedia", {
        mp3: index + ".mp3",    // load mp3 if browser supports it
        oga: index + ".ogg"  // load ogg if browser supports it
        }).jPlayer("play");
      },
      volume: 1.0,
      swfPath: "/assets",            // else look for flash here to load mp3
      supplied: "mp3, oga"
    });
  });
});

