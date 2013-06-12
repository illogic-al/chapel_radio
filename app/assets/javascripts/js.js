$(document).ready(function(){
  // Hide Player controls after everything is loaded
  $("#jp_container_1").addClass("hide");

  // Change to track defined by 'rel' attribute of link with audioButton class
  $(".audiobutton").click(function() {
    // Show jplayer container once audiobutton selector is clicked.
    if ($("#jp_container_1").hasClass("hide")) {
      $("#jp_container_1").removeClass("hide");
    }

    // Destroy any ongoing jplayer instances
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

    // Hide welcome text once media starts playing
    $("#intro_msg").hide("slow")
  });

});

