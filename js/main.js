let imgList= document.querySelectorAll(".parent img")
let layer =document.querySelector(".light-container")
let btnClose =document.getElementById("close")
let changeImg=document.querySelector(".box")
let btnNext=document.getElementById("right")
let btnBack=document.getElementById("left")
let index;



for( let i=0 ;i<imgList.length ;i++ ){
   
    
    imgList[i].addEventListener( 'click',function(e){
          index=i;
    
let currentSrc=e.target.getAttribute('src')
layer.classList.remove('d-none')
changeImg.style.backgroundImage=`url(${currentSrc})`

    }  )



}



btnClose.addEventListener('click',function(){

closeSlide()

})


btnNext.addEventListener('click',function(){
slide(1)

}) 



btnBack.addEventListener('click',function(){
slide( -1)

}) 


function slide(step){
index+=step;

if(index==imgList.length){
    index=0
}
if(index<0){
    index=imgList.length-1
}

     let currentSrc=  imgList[index].getAttribute("src")
 changeImg.style.backgroundImage=`url(${currentSrc})`
}


function closeSlide(){
    layer.classList.add('d-none')
}

document.addEventListener('keydown', function(e){

if( !   layer.classList.contains("d-none")){

    if(e.key==="ArrowRight"){
    slide(1)


}
else if(e.key==="ArrowLeft"){

 slide(-1)

}
else if(e.key==="Escape"){
closeSlide()

}
    

}
    
})


document.addEventListener('click',function(e){
if(e.target.classList.contains("light-container")){
    closeSlide()


}



})