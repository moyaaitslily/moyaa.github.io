let canvasImg;
let vid;
let imgElement;
let playButton;

function preload() {
    canvasImg = loadImage('IMG_2755.JPG');
}

function setup() {
    let c = createCanvas(400, 600);
    c.position(10,60);

    vid = createVideo('IMG_2403.mp4', ()=>{
        vid.volume(0);  
        vid.loop();     
        vid.play();       
      });
      vid.size(320, 500);
      vid.position(60,60);
      vid.hide(); 

    imgElement = createImg('IMG_2776.JPG');
    imgElement.size(350, 200); 
    imgElement.position(400,200); 
}
    function draw(){
        background(225);
        if (canvasImg){
            image(canvasImg,0,0,width,height);
        }
        if (vid){
            image(vid, 60, 80, 250, 350);
        }
    }
