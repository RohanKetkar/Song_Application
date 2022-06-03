let songIndex = 0;
let audioElement = new Audio("Songs/2.mp3");
let songInfo = document.getElementById("songInfo");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let songNames=document.getElementById('songNames');
// console.log('Hello World');
let songs = [
  ,
  { songName: "2.mp3", filePath: "Songs/2.mp3", coverPath: "Covers/2.jpg" },
  { songName: "3.mp3", filePath: "Songs/3.mp3", coverPath: "Covers/3.jpg" },
  { songName: "4.mp3", filePath: "Songs/4.mp3", coverPath: "Covers/4.jpg" },
  { songName: "5.mp3", filePath: "Songs/5.mp3", coverPath: "Covers/5.jpg" },
  { songName: "6.mp3", filePath: "Songs/6.mp3", coverPath: "Covers/6.jpg" },
  { songName: "7.mp3", filePath: "Songs/7.mp3", coverPath: "Covers/7.jpg" },
];

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    songInfo.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    songInfo.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  // console.log('ok')
  //update
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  progressBar.value = progress;
});
progressBar.addEventListener("change", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});
const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songNames")).forEach(
    (Element) => {
      Element.classList.remove("fa-circle-pause");
      Element.classList.add("fa-circle-play");
    }
  );
};
Array.from(document.getElementsByClassName("songNames")).forEach((Element) => {
  Element.addEventListener("click", (e) => {
    makeAllPlay();
    // console.log(e.target);
    index = parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");

    audioElement.src = `Songs/${index}.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  });
});
// document.addEventListener('timeupdate');
