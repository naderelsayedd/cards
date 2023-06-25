var imgs =Array.from(document.getElementsByClassName("img_item"))
var lightBoxContainer = document.getElementById("lightBoxContainer")
var lightBoxItem = document.getElementById("lightBoxItem")
var close = document.getElementById("close")
var next = document.getElementById("next")
var prev = document.getElementById("prev")
var currentIndexSlide = 0 

for(var i = 0 ; i<imgs.length ; i++)
{
    imgs[i].addEventListener("click" , function(eventinfo){
        lightBoxContainer.style.display= "flex"
        console.log(eventinfo.target.src)
        var imgSrc = eventinfo.target.src ; 
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`
        currentIndexSlide = imgs.indexOf(eventinfo.target)
    })
}
next.addEventListener("click" ,nextslide)
function nextslide(){
    currentIndexSlide++
    if(currentIndexSlide == imgs.length)
    {
        currentIndexSlide = 0 ;
    }
    var imgSrc = imgs[currentIndexSlide].src
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}

prev.addEventListener("click" , prevSlide)
function prevSlide(){
    currentIndexSlide-- ;
    if(currentIndexSlide == 0)
    {
        currentIndexSlide = (imgs.length)-1
    }
    var imgSrc = imgs[currentIndexSlide].src
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}

// close image ///////////////////////////
close.addEventListener("click" , closeSlide)
function closeSlide(){
    lightBoxContainer.style.display = "none"
}

// slider using right , left and escape  buttons 
document.addEventListener("keydown" , function(keyinfo){
    if(keyinfo.keyCode == 39)
    {
        nextslide()
    }

    else if(keyinfo.keyCode == 37)
    {
        prevSlide()
    }
    else if(keyinfo.keyCode == 27)
    {
        closeSlide()
    }
})
