var cuadricula = [[1,2,3],[4,5,6],[7,8,9]];
var xPositionCurrent = -1;
var yPositionCurrent = 0;
var xPositionNext=0;
var yPositionNext=0;
var travelLog = [];
var numberOfSlots = 9;
var piecesArray = [];

class VerticalTrack {
    constructor(){
        this.id = 1;
        this.position = []
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

// let horizontal = new HorizontalTrack;
// horizontal.position.push(0,0);
// cuadricula[0].splice(0,1,horizontal);
// let turnDown = new DownLeftTrack;
// turnDown.position.push(1,0);
// cuadricula[1].splice(0,1,turnDown);
// let crossing = new CrossingTrack;
// crossing.position.push(1,1);
// cuadricula[1].splice(1,1,crossing);
// let turnLeft = new UpLeftTrack;
// turnLeft.position.push(1,2);
// cuadricula[1].splice(2,1,turnLeft);
// let turnUp = new UpRightTrack;
// turnUp.position.push(0,2);
// cuadricula[0].splice(2,1,turnUp);
// let turnRight = new DownRightTrack;
// turnRight.position.push(0,1);
// cuadricula[0].splice(1,1,turnRight);
// let vertical = new VerticalTrack;
// vertical.position.push(2,0);
// cuadricula[2].splice(0,1,vertical);
// console.log(cuadricula);


// //cuadricula = [[horizontalTrack,downRightTrack,upRightTrack],[downLeftTrack,crossingTrack,upLeftTrack],["","",""]];
// function  tracePath(valorX,valorY){
//     var piece = cuadricula[valorX][valorY];
//     if(typeof piece == 'object'){
//         piece.task(xPositionCurrent,yPositionCurrent);
//     } else {
//         return false;
//     }
// }

// for (var i = 0; i<numberOfSlots; i++){
//     var fun = tracePath(xPositionNext,yPositionNext);
//     if (fun == false){
//         break;
//     } else {
//         travelLog.push(xPositionCurrent,yPositionCurrent);
//     }
// }
// console.log(travelLog);

function getRandomPiece(){
    var randomNumber = Math.floor((Math.random()*6)+1);
    console.log("holi")
    switch(randomNumber){
        case 1:
            return new VerticalTrack;
        case 2:
            return new HorizontalTrack;
        case 3:
            return new CrossingTrack;
        case 4:
            return new UpRightTrack;
        case 5:
            return new DownRightTrack;
        case 6:
            return new DownLeftTrack;
        case 7:
            return new UpLeftTrack;

    }
}

function formArray(){
    for (var i = 1; i <= 5; i++){
        piecesArray.push(getRandomPiece())
    }
}

formArray();
console.log(piecesArray);

// console.log(cuadricula);

