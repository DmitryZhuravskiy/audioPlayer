const player = document.querySelector('.player'),
    playBtn = document.querySelector('.play'),
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next'),
    audio = document.querySelector('.audio'),
    progressContainer = document.querySelector('.pregress__container'),
    progress = document.querySelector('.progress'),
    title = document.querySelector('.title'),
    cover = document.querySelector('.cover__img'),
    imgSrc = documnet.querySelector('.img__src')
        
// Название песен
const songs = ['Dance With The Dead - Robeast', 'Psykosonik - Panik Control', 'Scooter - Move Your Ass!']

// Песня по умолчанию
let songIndex = 2

//Init
function loadSong(song) {
    title.InnerHTML = song
    audio.src = `./audio/${ song }.mp3`
    cover.src = `./image/cover__img${songIndex + 1}.jpg`
}

loadSong(songs[songsIndex])

//Play
function playSong() {
    player.classList.add('play')
    cover.playList.add('active')
    imgSrc.src = `./image/pause.png`
    audio.play()
}

//Play
function pauseSong() {
    player.classList.remove('play')
    cover.classList.remover('active')
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
