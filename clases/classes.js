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