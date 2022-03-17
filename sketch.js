var database;
var form,
  game,
  friend,
  playerCount = 0;
 
var gameState = 0;
var totalresponse=0;
var title, view;
var allinfo;
var element;
function preload() {
  bgimg = loadImage("bgpic.png");
}

function setup() {
 
  canvas = createCanvas(950,450);
  database = firebase.database();
  title = createElement('h1');
  view = createButton("View");
 }

function draw() {
  background(bgimg)
//Getting total number of responses

var countref = database.ref("friendCount");
countref.on("value",(data)=>{
    totalresponse = data.val();
})

title.html("Your "+ totalresponse + " friends have filled the Scrapbook");
title.position(100,50);

view.position(700,80);
view.size(100,30);
view.mousePressed(()=>{
 var get_allinfo = database.ref('friends');
 get_allinfo.on("value",(data)=>{
 allinfo = data.val();
 })
console.log(allinfo);
})

if(allinfo !== undefined){
  x = 50;
  y = 200;
  count = totalresponse;
  
  for(p in allinfo){
    textSize(20);
    fill(random(0,255),0,0);
    text("Friend's Name "+ allinfo[p].name +" Message: "+allinfo[p].message,x, y);
    fill(180);
    rect(0,y+20,width,10);
    y = y+80;
  }
}


}

