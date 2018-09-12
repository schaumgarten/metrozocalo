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
    animate(){
        console.log("corre" + this.id);
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
animate(){
    console.log("corre" + this.id);
}
} 

