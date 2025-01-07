const videoSources = ["dentist.mp4", "dentist2.mp4", "dentist3.mp4"];
const videoPlayer = document.getElementById("videoPlayer");
let currentVideoIndex = 0;

function loadNextVideo() {
  currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
  videoPlayer.src = videoSources[currentVideoIndex];
  videoPlayer.play();
}

videoPlayer.src = videoSources[currentVideoIndex];

videoPlayer.addEventListener("ended", loadNextVideo);
