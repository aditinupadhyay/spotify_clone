console.log("welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myPlayBar = document.getElementById('myPlayBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'))
// let masterSongName = document.getElementById('masterSongName');


let songs =[
    { songName: "Let Me Love You", filePath: "songs/1.mp3", coverPath: "1.jpg"},
    { songName: "Vigilante Maroon", filePath: "songs/2.mp3", coverPath: "2.jpg"},
    { songName: "Midnight Sun", filePath: "songs/3.mp3", coverPath: "3.jpg"},
    { songName: "Could've,Should've", filePath: "songs/4.mp3", coverPath: "4.jpg"},
    { songName: "It's Me, I'm the Problem", filePath: "songs/5.mp3", coverPath: "5.jpg"},
    { songName: "Mastermind", filePath: "songs/6.mp3", coverPath: "6.jpg"},
    { songName: "Torquoise Haze", filePath: "songs/7.mp3", coverPath: "7.jpg"},
    { songName: "Lavender Blue", filePath: "songs/8.mp3", coverPath: "8.jpg"},
    { songName: "Bejeweled", filePath: "songs/9.mp3", coverPath: "9.jpg"},
    { songName: "Labyrinth", filePath: "songs/10.mp3", coverPath:"10.jpg"},
    
    
]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        
        
    }
    else{
        audioElement.pause(); 
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
        

    }
})
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    progress = parseInt ((audioElement.currentTime/audioElement.duration)*100)
    myPlayBar.value = progress
})
myPlayBar.addEventListener('change', ()=>{
    audioElement.currentTime = myPlayBar.value*audioElement.duration/100
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        // console.log(e.target)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.currentTime = 0;
        audioElement.src = `songs/${songIndex+1}.mp3`;
        // masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.currentTime = 0;
    audioElement.src = `songs/${songIndex+1}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.currentTime = 0;
    audioElement.src = `songs/${songIndex+1}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})