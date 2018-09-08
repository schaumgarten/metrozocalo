class VerticalTrack {
    constructor(){
        this.id = 1;
        this.position = [];
        this.source = "./images/vertical-track.png"
    }
   task(previousX, previousY) {
        xPositionCurrent = this.position[0];
        yPositionCurrent = this. position[1];
        if (previousY < this.position[1]){
            xPositionNext = this.position[0]
            yPositionNext = this.position[1]+1;
        } else if (previousY > this.position[1]){
            xPositionNext = this.position[1];
            yPositionNext = this.position[1]-1;
        }
    }
}
class HorizontalTrack {
    constructor() {
        this.id = 2;
        this.position = []
        this.source = "./images/horizontal-track.png"
    }
    task(previousX, previousY) {
        xPositionCurrent = this.position[0];
        yPositionCurrent = this. position[1];
        if (previousX < this.position[0]){
            xPositionNext = this.position[0]+1;
            yPositionNext = this.position[1];
        } else if (previousX > this.position[0]){
            xPositionNext = this.position[0]-1;
            yPositionNext = this.position[1];
        }
    }
    animateTrain(){
        this.movingTrain = new Train();
        this.track = new Image();
        track.src = "./images/horizontal-trackb.png";
        this.frames = 0;
        
        setInterval(function(){
            ctx.drawImage(track,150,80,70,70);
            if(32+frames < 220 && 32+frames>135){
             ctx.drawImage(movingTrain.trainBack, 32+frames, 80, 35, 70);
             }
            if(48+frames < 220 && 48+frames>135){
             ctx.drawImage(movingTrain.wagonFront, 48+frames, 80 , 35 , 70);
            }
            if(65+frames < 220 && 65+frames>135){
             ctx.drawImage(movingTrain.wagonBack, 65+frames, 80, 35, 70);
            }
           if(82+frames < 220 && 82+frames>135){
             ctx.drawImage(movingTrain.wagonFront, 82+frames, 80, 35, 70);
            }
            if(99+frames < 220 && 99+frames>135){
             ctx.drawImage(movingTrain.wagonBack, 99+frames, 80, 35, 70);
            }
            if (116+frames < 220 && 116+frames>135 ){
             ctx.drawImage(movingTrain.wagonFront,116+frames, 80, 35, 70);
            }
            if (133+frames < 220 && 133+frames>135){
             ctx.drawImage(movingTrain.wagonBack, 133+frames, 80, 35, 70);
            }
           if (150+frames <220 && 150+frames>135){
             ctx.drawImage(movingTrain.front, 150+frames, 80, 35, 70);
            }
            ctx.clearRect(135,80,13,70);
         frames++; 
         
     },1000/60);
     }
    
}

class CrossingTrack {
    constructor(){
        this.id = 3;
        this.position = []
        this.source = "./images/crossing-track.png"
    }
    
    task(previousX,previousY) {
        xPositionCurrent = this.position[0];
        yPositionCurrent = this. position[1];
        if (previousX < this.position[0]){
            xPositionNext = this.position[0]+1;
            yPositionNext = this.position[1];
        } else if (previousX > this.position[0]) {
            xPositionNext = this.position[0]-1;
            yPositionNext = this.position[1];
        } else if (previousY < this.position[1]){
            xPositionNext = this.position[0]
            yPositionNext = this.position[1]+1;
        } else if (previousY > this.position[1]) {
            xPositionNext = this.position[0]
            yPositionNext = this.position[1]-1;
        }
    }
}

class UpRightTrack {
    constructor(){
        this.id = 4;
        this.position = []
        this.source = "./images/up-right-track.png"
    }
    task(previousX,previousY) {
        xPositionCurrent = this.position[0];
        yPositionCurrent = this. position[1];
        if (previousX > this.position [0]){
            xPositionNext = this.position[0];
            yPositionNext = this.position[1]-1; 
        } else if (previousY < this.position[1]){
            xPositionNext = this.position[0]+1;
            yPositionNext = this.position[1];
        }    
    }
} 

class DownRightTrack {
    constructor(){
        this.id = 5;
        this.position = []
        this.source = "./images/down-right-track.png"
    }
    task(previousX,previousY) {
        xPositionCurrent = this.position[0];
        yPositionCurrent = this. position[1];
        if (previousX > this.position [0]){
            xPositionNext = this.position[0];
            yPositionNext = this.position[1]+1; 
        } else if (previousY > this.position[1]){
            xPositionNext = this.position[0]+1;
            yPositionNext = this.position[1];
        }    
    }
} 

class DownLeftTrack {
    constructor(){
        this.id = 6;
        this.position = []
        this.source = "./images/down-left-track.png"
    }
    task(previousX,previousY){
        xPositionCurrent = this.position[0];
        yPositionCurrent = this. position[1];
        if (previousX < this.position [0]){
            xPositionNext = this.position[0];
            yPositionNext = this.position[1]+1; 
        } else if (previousY > this.position[1]){
            xPositionNext = this.position[0]-1;
            yPositionNext = this.position[1];
        }    
    }
} 

class UpLeftTrack {constructor(){
    this.id = 7;
    this.position = []
    this.source = "./images/up-left-track.png"
}
    task(previousX,previousY) {
        xPositionCurrent = this.position[0];
        yPositionCurrent = this. position[1];
        if (previousX < this.position [0]){
            xPositionNext = this.position[0];
            yPositionNext = this.position[1]-1; 
        } else if (previousY < this.position[1]){
            xPositionNext = this.position[0]-1;
            yPositionNext = this.position[1];
        }    
    }
} 

class Train {
    constructor() {
        this.front = new Image();
        this.front.src = "./images/train-front.png";
        this.wagonFront = new Image();
        this.wagonFront.src = "./images/wagon-front.png";
        this.wagonBack = new Image();
        this.wagonBack.src = "./images/wagon-back.png";
        this.trainBack = new Image();
        this.trainBack.src = "./images/train-back.png";
        
    
  
}
    
    draw() {
        ctx.drawImage(this.trainBack, 150, 80, 35, 70);
        ctx.drawImage(this.wagonFront, 166, 80 , 35 , 70);
        ctx.drawImage(this.wagonBack, 183, 80, 35, 70);
        ctx.drawImage(this.wagonFront, 200, 80, 35, 70);
        ctx.drawImage(this.wagonBack, 217, 80, 35, 70);
        ctx.drawImage(this.wagonFront,234, 80, 35, 70);
        ctx.drawImage(this.wagonBack, 251, 80, 35, 70);
        ctx.drawImage(this.front, 268, 80, 35, 70);
        // ctx.drawImage(this.trainBack, 0, 0, 35, 70); 
        // this.trainBack.onload = function(){
        //     console.log(this.trainBack);
            
        // }
        //console.log(this.trainBack);
        
        // this.wagonFront.onload = function(){
        //    
        // }
        // this.wagonBack.onload = function(){
        //     
        // }
        // this.wagonFront.onload = function(){
        //     
        // }
        // this.wagonBack.onload = function(){
        //     
        // }
        // this.front.onload = function(){
        //     
        // }
    }
}