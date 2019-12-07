var canvas=document.querySelector('canvas')
canvas.width=window.innerWidth-25;
canvas.height=window.innerHeight-90;
var middle=canvas.width/2;

//drwa a line in the middle
var c=canvas.getContext('2d');


 c.font="30px Permanent Marker";
 c.fillStyle="blue";
 c.fillText("PRESS START NOW!",canvas.width/3,canvas.height/2)

var speed=15;
function changeSpeed(){
  speed=Number(prompt("Please enter your desired speed."));
}
function drawLine(){
  c.setLineDash([5,3])//draw dotted line
  c.beginPath();
c.strokeStyle="gray";
c.moveTo(middle,0);
c.lineTo(middle,canvas.height);
c.stroke();
}

//set up client block
var mouseY=10;
window.addEventListener('mousemove',(e)=>{
  if(e.y-80<0){
    mouseY=0
  }else if(
  e.y-80>canvas.height-150){
    mouseY=canvas.height-150
  }else{
  mouseY=e.y-80};
  
})

function clientBlock(){
    c.fillStyle="blue";
     c.fillRect(0,mouseY,10,150);  
}

//set up computer block
function computerBlock(computerY){
c.fillStyle="green";
c.fillRect(canvas.width-10,computerY,10,150)}

function gameover(x,y){
  c.font="30px Permanent Marker";
  c.fillStyle="red";
  c.fillText("GAME OVER, COMPUTER WON!",x,y)
}

function startTheGame(){
var  x=Math.random()*canvas.width;
var   y=Math.random()*canvas.height; 

  document.getElementById('computer').innerHTML=0;
  draw(x,y,speed)
}

function draw(x,y,speed){
  var xspeed=speed;
  var yspeed=speed; 

  
function animation(){
c.clearRect(0,0,canvas.width,canvas.height) ;
drawLine();
clientBlock();
computerBlock(y-70);
var id=window.requestAnimationFrame(animation);
c.beginPath();
c.arc(x,y,20,0,Math.PI*2,false);
c.fillStyle='yellow';
c.fill()  
if(x+30>canvas.width){
  xspeed=-xspeed;
} 
  
 if (y>=mouseY-10&&mouseY+140>=y&&x-30<0){
    xspeed=-xspeed;
  }else if ((y<mouseY-10||mouseY+140<y)&&x<-20){
    //lose every round
   window.cancelAnimationFrame(id)
  var value=Number(document.getElementById('computer').innerHTML) ;
    document.getElementById('computer').innerHTML=value+1;
   x=Math.random()*canvas.width;
   y=Math.random()*canvas.height; 
   if(value+1<5){
     draw(x,y,speed)
   } else{
     window.cancelAnimationFrame(id)
     gameover(canvas.width/3,canvas.height/2);
   }
    
  }
 
if(y+10>canvas.height||y-10<0){
  yspeed=-yspeed;
}  
x+=xspeed;
y+=yspeed;  
    
  }
animation()
}

//set up the starting point
/**
document.addEventListener('click',(e)=>{
 draw(e.x,e.y-80,speed)
},{once:true});// put once:true will only allow work once.*/



