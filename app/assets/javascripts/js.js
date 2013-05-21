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
});

