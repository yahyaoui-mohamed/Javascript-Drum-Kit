function Play(e)
{
	let play = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
		if(play)
		{
			document.querySelector(`audio[data-key="${e.keyCode}"]`).play();
			play.classList.add("isPlay");
			setTimeout(function(){
				play.classList.remove("isPlay")
			},70);
		}	
}

window.onkeydown = Play;
