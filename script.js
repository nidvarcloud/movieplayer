const video_file = document.getElementById('video');
const pause_button = document.getElementById('pauseButton');
const play_button = document.getElementById('playButton');
const the_time = document.getElementById('the_time');
const progress_bar = document.getElementById('videoProgress');

const play_video =()=>{
    pause_button.classList.remove('hideMe')
    play_button.classList.add('hideMe')
    video_file.volume = 0.3
    video_file.play();
}

const pause_video = ()=>{
    pause_button.classList.add('hideMe')
    play_button.classList.remove('hideMe')
    video_file.pause();
}

const convert_time = (time)=>{
    const mins = time/60
    const seconds = time%60
    return `${mins.toFixed(0)}:${seconds.toFixed(0)}`
}

setTimeout(()=>{
    the_time.innerHTML = convert_time(video_file.duration)
},500)

const calculate_time = ()=>{
    let mins=0;
    let seconds=0;
    seconds = video_file.currentTime.toFixed(0)
    if(seconds >= 60){
        seconds = video_file.currentTime.toFixed(0)-60
        mins = 1;
    }
    if(seconds<10){
        seconds = '0'+seconds
    }
    return `${mins}:${seconds}`
}

const calculate_progress = ()=>{
    const progress = video_file.currentTime.toFixed(0) / video_file.duration.toFixed(0)
    return (progress*100).toFixed(0)
}

video_file.addEventListener('timeupdate',()=>{
    the_time.innerHTML = calculate_time()
    progress_bar.value = calculate_progress();
})

progress_bar.addEventListener('change',(e)=>{
    video_file.currentTime = video_file.duration * (e.target.value/100)
})
pause_button.addEventListener('click',pause_video)
play_button.addEventListener('click',play_video)