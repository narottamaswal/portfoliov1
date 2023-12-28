console.log('Its working')
setTheme('light')
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
		document.getElementById('linkedin').src = './images/linkedinlogo.png'
		document.getElementById('git').src = './git2.png'

		document.getElementById('theme-style').href = './main.css'

	}

	if(mode == 'blue'){

		document.getElementById('emailImg').src = './gmail.png'
		document.getElementById('linkedin').src = './images/linkedinlogo.png'
		document.getElementById('git').src = './git1.png'

		document.getElementById('theme-style').href = './darkmode.css'
	}
	localStorage.setItem('theme', mode)
}



const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper #carousel1buttons");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        console.log(icon);
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        
        carousel.scrollLeft += icon.class == "carousel1buttonsleft" ? -firstImgWidth : firstImgWidth;
        console.log(carousel.scrollLeft);
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);




const carousel2 = document.querySelector(".carousel2"),
firstImg2 = carousel2.querySelectorAll("img")[0],
arrowIcons2 = document.querySelectorAll(".wrapper #carousel2buttons");
let isdragStart22 = false, isdragging22 = false, prevPageX2, prevScrollLeft2, positionDiff2;
const showHideIcons2 = () => {
    // showing and hiding prev/next icon according to carousel2 scroll left value
    let scrollWidth = carousel2.scrollWidth - carousel2.clientWidth; // getting max scrollable width
    console.log(carousel2.scrollLeft+" "+ carousel2.scrollWidth+" "+carousel2.clientWidth);
    console.log(Math.ceil(carousel2.scrollLeft+carousel2.clientWidth));

    arrowIcons2[0].style.display = carousel2.scrollLeft == 0 ? "none" : "block";
    arrowIcons2[1].style.display = carousel2.scrollLeft == scrollWidth ? "none" : "block";
    if(Math.ceil(carousel2.scrollLeft+carousel2.clientWidth)==carousel2.scrollWidth){
        console.log(true);
        arrowIcons2[1].style.display =  "none" ;
    }
}
arrowIcons2.forEach(icon => {
    icon.addEventListener("click", () => {
        console.log(icon);
        let firstImg2Width = firstImg2.clientWidth +14; 
       
        // if clicked icon is left, reduce width value from the carousel2 scroll left else add to it
        carousel2.scrollLeft += icon.class == "carousel2buttonsleft" ? -firstImg2Width : firstImg2Width;
        setTimeout(() => showHideIcons2(), 60); // calling showHideIcons2 after 60ms
    });
});
const autoSlide2 = () => {
    // if there is no image left to scroll then return from here
    if(carousel2.scrollLeft - (carousel2.scrollWidth - carousel2.clientWidth) > -1 || carousel2.scrollLeft <= 0) return;
    positionDiff2 = Math.abs(positionDiff2); // making positionDiff2 value to positive
    let firstImg2Width = firstImg2.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel2 left to take middle img center
    let valDifference = firstImg2Width - positionDiff2;
    if(carousel2.scrollLeft > prevScrollLeft2) { // if user is scrolling to the right
        return carousel2.scrollLeft += positionDiff2 > firstImg2Width / 3 ? valDifference : -positionDiff2;
    }
    // if user is scrolling to the left
    carousel2.scrollLeft -= positionDiff2 > firstImg2Width / 3 ? valDifference : -positionDiff2;
}
const dragStart2 = (e) => {
    // updatating global variables value on mouse down event
    isdragStart22 = true;
    prevPageX2 = e.pageX || e.touches[0].pageX;
    prevScrollLeft2 = carousel2.scrollLeft;
}
const dragging2 = (e) => {
    // scrolling images/carousel2 to left according to mouse pointer
    if(!isdragStart22) return;
    e.preventDefault();
    isdragging22 = true;
    carousel2.classList.add("dragging2");
    positionDiff2 = (e.pageX || e.touches[0].pageX) - prevPageX2;
    carousel2.scrollLeft = prevScrollLeft2 - positionDiff2;
    showHideIcons2();
}
const dragStop2 = () => {
    isdragStart22 = false;
    carousel2.classList.remove("dragging2");
    if(!isdragging22) return;
    isdragging22 = false;
    autoSlide2();
}
carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("touchstart", dragStart2);
document.addEventListener("mousemove", dragging2);
carousel2.addEventListener("touchmove", dragging2);
document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("touchend", dragStop2);