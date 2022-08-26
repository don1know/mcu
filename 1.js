function me(){
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("GET",'------------------------------------fb---------------fb-----', true);
    xhttp.send();
    window.open('https://www.facebook.com/zafar.niloy')

}

function aaa(){
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("GET",'----------------------------------Vlc------------------------------', true);
    xhttp.send();

}

function mcus(){
// window.open('https://mcubd.herokuapp.com/ms','_self')
toastr.info('Coming soon...')
toastr.clear()

var xhttp = new XMLHttpRequest();
    
xhttp.open("GET",'----------------------------------Marvel--seris--clicked------------------------', true);
xhttp.send();
}

function mcu(){
    window.open('https://mcubd.herokuapp.com','_self')

    var xhttp = new XMLHttpRequest();
    
    xhttp.open("GET",'----------------------------------MCU-but-clicked--------------------------', true);
    xhttp.send();
}

function mar(){

    toastr.info('Coming soon...')
    toastr.clear()
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("GET",'----------------------------------Marvel-butt-clicked-------------------------', true);
    xhttp.send();
    // window.open('https://mcubd.herokuapp.com','_self')
}

function other(){

    // alert('coming...')
    // window.open('https://mcubd.herokuapp.com','_self')

    toastr.info('Coming soon...')
    toastr.clear()

    var xhttp = new XMLHttpRequest();
    
    xhttp.open("GET",'---------------------------------other-clicked-----------------------------', true);
    xhttp.send();

}

function imgdiv(bname,bimg,q7pp,downl,size){
    var w = window.innerWidth;
    var h = window.innerHeight;
    var g=w*.3939


   var chidiv= document.createElement("div");
   var iiidiv= document.createElement("div");
   var p= document.createElement("p");
   p.innerText=bname
   var image= document.createElement("img");

   chidiv.classList.add('chi');
   iiidiv.classList.add('iii');
   image.src=bimg

   iiidiv.append(image)
   chidiv.append(iiidiv,p)
   var con=document.getElementById('cont')
   con.appendChild(chidiv)

   if(h-w<0){

   chidiv.style.backgroundColor='#000000';
   chidiv.style.padding='0px'
   chidiv.style.marginTop='14px'
   chidiv.style.float='left'
   chidiv.style.height=h*.9+'px'
   chidiv.style.width=g*.6+'px'

image.style.width=g*.6+'px'

iiidiv.style.height=h*.7+'px'
iiidiv.style.overflow='hidden'

   }else{
    chidiv.style.backgroundColor='#000000';
    chidiv.style.padding='0px'
    chidiv.style.marginTop='14px'
    chidiv.style.float='left'
    chidiv.style.height=h*.55+'px'
    chidiv.style.width=g+'px'

    image.style.width=g+'px'

    iiidiv.style.height=h*.4+'px'
    iiidiv.style.overflow='hidden'

   }

chidiv.onclick=() => {
    var con=document.getElementById('cont')
    con.style.display='none'
     
     var req=bimg+'--------------------'+bimg+'------------------'+bimg
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET",req, true);
    xhttp.send();





    var video= document.createElement("video");
    var source= document.createElement("source");
    var button= document.createElement("button");
    var down7= document.createElement("button");



    

    video.setAttribute('controls','true')
    video.setAttribute('autoplay','true')
    video.setAttribute('id','viddd')
    video.setAttribute('controlsList','nodownload')
    video.setAttribute('oncontextmenu','return false;')




    source.setAttribute('id','srcc')
    button.setAttribute('id','butt')
    down7.setAttribute('id','down')





    video.width=w*.94
    video.style.marginTop='20px'
    source.src=q7pp
    
    button.innerText='Home'
    down7.innerText='Download ('+size+')'


    button.style.padding='20px'
    down7.style.padding='20px'
    down7.style.backgroundColor='rgb(253, 253, 152)'

   


    video.append(source)
    document.body.append(video,button,down7)



    

    setTimeout(() => {
        if(video.readyState!=4){
            toastr.error('Video loading failed,Plz Reload the Website to fix it','',{timeOut: 20000})
        }
    }, 25000);

    var ti=setTimeout(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET",'-------------------------------'+bimg+'-----State----'+video.readyState+'--'+ Math.trunc( video.currentTime/60/60)+':'+Math.trunc((video.currentTime/60)%60) +':'+Math.trunc(video.currentTime%60)+'--------------------', true);
        xhttp.send();
        
    }, 8000);
    var ti2=setTimeout(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET",'-------------------------------'+bimg+'-----State----'+video.readyState+'--'+ Math.trunc( video.currentTime/60/60)+':'+Math.trunc((video.currentTime/60)%60) +':'+Math.trunc(video.currentTime%60)+'--------------------', true);
        xhttp.send();
        
    }, 20000);
    var ti3=setTimeout(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET",'-------------------------------'+bimg+'-----State----'+video.readyState+'--'+ Math.trunc( video.currentTime/60/60)+':'+Math.trunc((video.currentTime/60)%60) +':'+Math.trunc(video.currentTime%60)+'--------------------', true);
        xhttp.send();
        
    }, 40000);

    var ti4=setTimeout(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET",'-------------------------------'+bimg+'-----State----'+video.readyState+'--'+ Math.trunc( video.currentTime/60/60)+':'+Math.trunc((video.currentTime/60)%60) +':'+Math.trunc(video.currentTime%60)+'--------------------', true);
        xhttp.send();
        
    }, 120000);

    var ti5=setTimeout(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET",'-------------------------------'+bimg+'-----State----'+video.readyState+'--'+ Math.trunc( video.currentTime/60/60)+':'+Math.trunc((video.currentTime/60)%60) +':'+Math.trunc(video.currentTime%60)+'--------------------', true);
        xhttp.send();
        
    }, 300000);
    var ti6=setTimeout(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET",'-------------------------------'+bimg+'-----State----'+video.readyState+'--'+ Math.trunc( video.currentTime/60/60)+':'+Math.trunc((video.currentTime/60)%60) +':'+Math.trunc(video.currentTime%60)+'--------------------', true);
        xhttp.send();
        
    }, 900000);
    var ti7=setTimeout(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET",'-------------------------------'+bimg+'-----State----'+video.readyState+'--'+ Math.trunc( video.currentTime/60/60)+':'+Math.trunc((video.currentTime/60)%60) +':'+Math.trunc(video.currentTime%60)+'--------------------', true);
        xhttp.send();
        
    }, 1800000);
    var ti8=setTimeout(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET",'-------------------------------'+bimg+'-----State----'+video.readyState+'--'+ Math.trunc( video.currentTime/60/60)+':'+Math.trunc((video.currentTime/60)%60) +':'+Math.trunc(video.currentTime%60)+'--------------------', true);
        xhttp.send();
        
    }, 3600000);
    var ti9=setTimeout(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET",'-------------------------------'+bimg+'-----State----'+video.readyState+'--'+ Math.trunc( video.currentTime/60/60)+':'+Math.trunc((video.currentTime/60)%60) +':'+Math.trunc(video.currentTime%60)+'--------------------', true);
        xhttp.send();
        
    }, 5400000);
    var ti10=setTimeout(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET",'-------------------------------'+bimg+'-----State----'+video.readyState+'--'+ Math.trunc( video.currentTime/60/60)+':'+Math.trunc((video.currentTime/60)%60) +':'+Math.trunc(video.currentTime%60)+'--------------------', true);
        xhttp.send();
        
    }, 6300000);
    var ti11=setTimeout(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET",'-------------------------------'+bimg+'-----State----'+video.readyState+'--'+ Math.trunc( video.currentTime/60/60)+':'+Math.trunc((video.currentTime/60)%60) +':'+Math.trunc(video.currentTime%60)+'--------------------', true);
        xhttp.send();
        
    }, 7200000);


    video.oncanplay = function() {
        if(video.currentTime<2 && video.readyState==4){
            toastr.success('Can download now')
            down7.style.backgroundColor='rgb(94, 255, 94)'
        }
    };



down7.onclick=() => {
    if(q7pp=='' || q7pp==undefined || q7pp==null){
    toastr.info('Not available bro')
    }else{
        var viedeo = document.getElementById("viddd");
        
        if ( viedeo.readyState === 4 ) {
            var xhttp = new XMLHttpRequest();
    
            xhttp.open("GET",'------------------------------------download'+bimg+'--------------------', true);
            xhttp.send();

            window.open(downl,'_self')
        }else{
        //  alert('Click again after 10-20 second for download')
        toastr.warning('Download button is yellow,wait for green')
         var xhttp = new XMLHttpRequest();
    
         xhttp.open("GET",'----------------------------------lo...---download'+bimg+'--------------------', true);
         xhttp.send();
        }

    }

}






// Clear all vid stuf

button.onclick=() => {
    var con=document.getElementById('cont')
    con.style.display=''
    var srcc=document.getElementById('srcc')
    srcc.parentElement.remove()
    var butt=document.getElementById('butt')
    butt.remove()

    var dow=document.getElementById('down')
    dow.remove()

    clearTimeout(ti);
    clearTimeout(ti2);
    clearTimeout(ti3);
    clearTimeout(ti4);
    clearTimeout(ti5);
    clearTimeout(ti6);
    clearTimeout(ti7);
    clearTimeout(ti8);
    clearTimeout(ti9);
    clearTimeout(ti10);
    clearTimeout(ti11);

    toastr.remove()

    var xhttp = new XMLHttpRequest();
    
    xhttp.open("GET",'------------------------------------Home----'+bimg+'--------------------', true);
    xhttp.send();

}





}

}



setTimeout(() => {

    // imgdiv(name,img,q7,down,size)
    

    imgdiv('Guardian of the galaxy vol.2   [1.2GB]','galaxy2.jpg',
    'https://abcd.bdff.workers.dev/0:/Guardian2-mp3.mp4','https://abcd.bdff.workers.dev/0:/Guardian2-mp3.mp4','1.2GB')


    imgdiv('Thor ragnarok [1.3GB]','Thor3.jpg','https://abcd.bdff.workers.dev/0:/Thor-ragnarock-mp3.mp4','https://abcd.bdff.workers.dev/0:/Thor-ragnarock-mp3.mp4','1.3GB')

    imgdiv('Guardian of the galaxy vol.1      [1.9GB]','galaxy.jpg','https://abcd.bdff.workers.dev/0:/guardian.mp4','https://abcd.bdff.workers.dev/0:/guardian.mp4','1.9GB')

    imgdiv('Avengers age of ultron [1.2GB]','Avengers2.jpg','https://abcd.bdff.workers.dev/0:/ultron-mp3.mp4','https://abcd.bdff.workers.dev/0:/ultron-mp3.mp4','1.2GB')

    imgdiv('Avengers Infinity war [1.3GB]','war.jpg','https://abcd.bdff.workers.dev/0:/infinity.mp4','https://abcd.bdff.workers.dev/0:/infinity.mp4','1.3GB')

    imgdiv('Ant-man [920MB]','ant.jpg','https://abcd.bdff.workers.dev/0:/Ant.Man-mp3.mp4','https://abcd.bdff.workers.dev/0:/Ant.Man-mp3.mp4','920 MB')

    
    // imgdiv('Doctor Strange in the Multiverse of Madness ,Coming soon.','drst2.jpg')
    imgdiv('John Wick [1.7GB]','john1.jpg','https://abcd.bdff.workers.dev/0:/John.Wick.1-mp3.mp4','https://abcd.bdff.workers.dev/0:/John.Wick.1-mp3.mp4','1.7GB')

    imgdiv('John Wick 2     [1.6GB]','john2.jpg','https://abcd.bdff.workers.dev/0:/John.Wick-2-mp3.mp4','https://abcd.bdff.workers.dev/0:/John.Wick-2-mp3.mp4','1.6GB')



}, 1);




var scriptjq=document.createElement('script');
scriptjq.type = 'text/javascript';
scriptjq.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
scriptjq.setAttribute('onload','next()')
document.head.appendChild(scriptjq);


function next(){
    var scriptto=document.createElement('script');
    scriptto.type = 'text/javascript';
    scriptto.src = 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js';
    scriptto.setAttribute('onload','next2()')
    document.head.appendChild(scriptto);

}


function next2(){
    var cssto=document.createElement('link');
    cssto.rel = 'stylesheet';
    cssto.href = 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css';
    cssto.setAttribute('onload','next3()')
    document.head.appendChild(cssto);

}


function next3(){
toastr.success('All script loaded','', {timeOut: 1000})


}


