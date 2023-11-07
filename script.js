var box=document.querySelector("#box");
box.addEventListener("mousemove",function(details){
    var boxLoc=box.getBoundingClientRect();
    var pointerLoc=details.clientX-boxLoc.left;
    var pointerLocy=details.clientY-boxLoc.top;
    var green=gsap.utils.mapRange(0,boxLoc.height,0,255,pointerLocy);
    if(pointerLoc<boxLoc.width/2){
        
        var red = gsap.utils.mapRange(0,boxLoc.width/2,255,0,pointerLoc);
        gsap.to(box,{
            backgroundColor:`rgb(${red},${green},0)`,
            ease:Power4,
        });
    }
    else{
        var blue = gsap.utils.mapRange(boxLoc.width/2,boxLoc.width,0,255,pointerLoc);
        gsap.to(box,{
            backgroundColor:`rgb(0,${green},${blue})`,
        });
    }
    
    // console.log(pointerLocy);
    
});
box.addEventListener("mouseout",function(){
    gsap.to(box,{
        backgroundColor:"white",
    });
});