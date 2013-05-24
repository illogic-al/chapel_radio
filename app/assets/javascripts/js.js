$(document).ready(function(){
  $("#jquery_jplayer_1").jPlayer({
    ready: function () {
      $(this).jPlayer("setMedia", {
        mp3: "/media/sermons/7_10_11.mp3",
        oga: "/media/sermons/7_10_11.ogg"
      });
    },
    swfPath: "/assets",
    supplied: "oga, mp3"
    //supplied: "m4a, oga"
  });

  // Change to track defined by 'rel' attribute of link with audioButton class
  $(".audiobutton").click(function() {
    $("#jquery_jplayer_1").jPlayer("destroy");
    index = this.rel;

    $("#jquery_jplayer_1").jPlayer({
      ready: function () {
        $(this).jPlayer("setMedia", {
        mp3: index + ".mp3",    // load mp3 if browser supports it
        oga: index + ".ogg"  // load ogg if browser supports it
        }).jPlayer("play");
      },
      ended: function (event) {
      },
      swfPath: "/assets",            // else look for flash here to load mp3
      supplied: "mp3, oga"
    });
  });
});

