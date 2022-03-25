var icon = document.getElementById("play-icon");
var posterImg  = document.getElementById("poster-image");
var text = document.getElementById("endless");

var video = document.getElementById("video");
var panel = document.getElementById("panel");
var play = document.getElementById("play-button");
var back = document.getElementById("rewind-button");
var forward = document.getElementById("forward-button");

var volumeIcon = document.getElementById("volume-icon");
var volumeRange = document.getElementById("volume-range");
var temp;

var line = document.getElementById("timeLine");
var minutes = document.getElementsByClassName("min");
var seconds = document.getElementsByClassName("sec");

var num = 0;
var per = 0;
var num2 = 0;

var curSec = 0;
var curMin = 0;

/*Задание значений переменным при загрузке видео*/
video.addEventListener('canplaythrough', function(){
	video.volume = volumeRange.value;
	temp = volumeRange.value;
	num = parseInt(video.duration); 
	num2 = parseInt(num/60); /*минуты*/
	per = num-(60*num2); /*секунды*/
	line.setAttribute("max", num.toString()); /*Длина временной шкалы*/
	minutes[1].innerHTML = (parseInt(num/60)).toString();
	seconds[1].innerHTML = per.toString();
	seconds[0].innerHTML = curSec.toString();
	minutes[0].innerHTML = curMin.toString();
})

/*Изменение звука в видео*/
volumeRange.addEventListener('input', function(){ 
	video.volume = volumeRange.value;
	temp = volumeRange.value;
})

/*Режим без звука при клике по иконке громкости*/
volumeIcon.addEventListener('click', function(){
	if(volumeIcon.getAttribute("alt")=="audio-off" && volumeRange.value==0.0){
		volumeRange.value = temp;
		video.volume = temp;
		volumeIcon.setAttribute("alt", "audio-on");
		volumeIcon.setAttribute("src", "images/audio-icon.png");
	}
	else if(volumeIcon.getAttribute("alt")=="audio-on" && volumeRange.value!=0.0){
		volumeRange.value = 0.0;
		video.volume = 0.0;
		volumeIcon.setAttribute("alt", "audio-off");
		volumeIcon.setAttribute("src", "images/audio-off-icon.png");
	}
})

/*Событие для изначальной кнопки Play*/
icon.addEventListener('click', function(){
	posterImg.style.display = "none";
	icon.style.display = "none";
	text.style.display = "none";
	play.setAttribute("alt", "pause");
	play.setAttribute("src", "images/pause-icon.png");
	video.play();
})

/*Смена Play на Pause при клике по иконке*/
document.addEventListener('click', function(w){
	if(w.target.getAttribute("alt")=="play" || (w.target.getAttribute("id")=="video" && play.getAttribute("alt")=="play")){
		video.play();
		play.setAttribute("alt", "pause");
		play.setAttribute("src", "images/pause-icon.png");
	}
	else if(w.target.getAttribute("alt")=="pause" || (w.target.getAttribute("id")=="video" && play.getAttribute("alt")=="pause")){
		video.pause();
		play.setAttribute("alt", "play");
		play.setAttribute("src", "images/play-icon.png");
	}
})

/*Вычисление текущего времени видео*/
video.addEventListener('timeupdate', function(){
	curSec = parseInt(video.currentTime);
	line.value = curSec;

	if(curSec<10){
		seconds[0].innerHTML = "0" + curSec.toString();
	}
	if(curSec>=10){
		seconds[0].innerHTML = curSec.toString();
	}
	if(curSec==60){
		curSec = parseInt(video.currentTime)-60;
		curMin++;
	}
})

/*Перемотка видео назад*/
back.addEventListener('click', function(){
	video.currentTime = parseInt(video.currentTime)-5;
})

/*Перемотка видео вперед*/
forward.addEventListener('click', function(){
	video.currentTime = parseInt(video.currentTime)+5;
})

