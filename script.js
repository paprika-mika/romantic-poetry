$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);

    audioElement.addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
    });

    $('#play').click(function() {
        audioElement.play();
        $("#status").text("Status: Playing");
    });

    $('#pause').click(function() {
        audioElement.pause();
        $("#status").text("Status: Paused");
    });

});
