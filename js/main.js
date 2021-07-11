const player = document.querySelector('.player')
const playBtn = document.querySelector('.play')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const audio = document.querySelector('.audio')
const progressContainer = document.querySelector('.progress__container')
const progress = document.querySelector('.progress')
const title = document.querySelector('.title')
const cover = document.querySelector('.cover__img')
const imgSrc = document.querySelector('.img__src')

// Название песен
const songs = ['Dance With The Dead - Robeast', 'Psykosonik - Panic Сontrol', 'Scooter - Move Your Ass!']

// Песня по умолчанию
let songIndex = 2

//Init
function loadSong(song) {
    title.innerHTML = song
    audio.src = `./audio/${ song }.mp3`
    cover.src = `./image/cover__img${ songIndex + 1 }.jpg`
    console.log(songIndex)
}

loadSong(songs[songIndex]);

//Play
function playSong() {
    player.classList.add('play')
    cover.classList.add('active')
    imgSrc.src = `./image/pause.png`
    audio.play()
}

//Pause
function pauseSong() {
    player.classList.remove('play')
    cover.classList.remove('active')
    audio.pause()
}
playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play')
    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

function nextSong() {
    songIndex++

    if (songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
}

nextBtn.addEventListener('click', nextSong)

function prevSong() {
    songIndex--

    if (songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])
    playSong()
}
prevBtn.addEventListener('click', prevSong)

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}
audio.addEventListener('timeupdate', updateProgress)

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
    console.log( clickX, width)
}
progressContainer.addEventListener('click', setProgress)
audio.addEventListener('ended', nextSong)