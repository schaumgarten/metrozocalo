var cuadricula = [[1,2,3],[4,5,6],[7,8,9]];
var xPositionCurrent = -1;
var yPositionCurrent = 0;
var xPositionNext=0;
var yPositionNext=0;
var travelLog = [];
var numberOfSlots = 9;
var verticalTrack = {
    id : 1,
    position: [2,0], 
    task: function(previousX, previousY){
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
var horizontalTrack = {
    id : 2,
    position: [0,0], 
    task: function(previousX, previousY){
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

var crossingTrack = {
    id : 3,
    position: [1,1],
    task: function(previousX,previousY){
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

var upRightTrack = {
    id : 4,
    position: [0,2],
    task : function(previousX,previousY){
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

var downRightTrack = {
    id : 5,
    position: [0,1],
    task : function(previousX,previousY){
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

var downLeftTrack = {
    id : 6,
    position: [1,0],
    task : function(previousX,previousY){
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

var upLeftTrack = {
    id : 7,
    position: [1,2],
    task : function(previousX,previousY){
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


cuadricula = [[horizontalTrack,downRightTrack,upRightTrack],[downLeftTrack,crossingTrack,upLeftTrack],[verticalTrack,"",""]];
function  tracePath(valorX,valorY){
    var piece = cuadricula[valorX][valorY];
    if(typeof piece == 'object'){
        piece.task(xPositionCurrent,yPositionCurrent);
    } else {
        return false;
    }
}

for (var i = 0; i<numberOfSlots; i++){
    var fun = tracePath(xPositionNext,yPositionNext);
    if (fun == false){
        break;
    } else {
        travelLog.push(xPositionCurrent,yPositionCurrent);
    }
}
console.log(travelLog);
