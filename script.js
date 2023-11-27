const containers = document.querySelectorAll(".video-containers")

containers.forEach(function(container){
    let video = container.querySelector(".video-frame")
    let playBtn = container.querySelector(".play")
    let pauseBtn = container.querySelector(".pause")
    let stopBtn = container.querySelector(".stop")

    playBtn.addEventListener("click", function(){
        video.play()
    })

    pauseBtn.addEventListener("click", function(){
        video.pause()
    })

    stopBtn.addEventListener("click", function(){
        video.pause()
        video.currentTime = 0
    })

    video.addEventListener('loadedmetadata', function(){
        playBtn.disabled = false
        pauseBtn.disabled = false
        stopBtn.disabled = false       
    })
})

