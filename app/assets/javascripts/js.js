$(document).ready(function(){
  $("#jquery_jplayer_1").jPlayer({
    ready: function () {
      $(this).jPlayer("setMedia", {
        /*m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
        oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"*/
        mp3: "/media/sermons/7_10_11.mp3",
        oga: "/media/sermons/7_10_11.ogg"
      });
    },
    swfPath: "/assets",
    supplied: "oga, mp3, flash"
    //supplied: "m4a, oga"
  });
});

