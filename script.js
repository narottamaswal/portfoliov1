console.log('Its working')

let theme = localStorage.getItem('theme')
console.log("asa");

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}
function play() {
	var audio = document.getElementById("theme-audio");
	audio.play();
  }
function setTheme(mode){
	play();
	console.log(mode);
	
	
	if(mode == 'light'){
		document.getElementById('emailImg').src = './gmail.png'
		document.getElementById('linkedin').src = './li3.png'
		document.getElementById('git').src = './git2.png'

		document.getElementById('theme-style').href = './main.css'

	}

	if(mode == 'blue'){

		document.getElementById('emailImg').src = './gmail.png'
		document.getElementById('linkedin').src = './li2.png'
		document.getElementById('git').src = './git1.png'

		document.getElementById('theme-style').href = './darkmode.css'
	}
	localStorage.setItem('theme', mode)
}