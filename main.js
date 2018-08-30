var cuadricula = [[1,2,3],[4,5,6],[7,8,9]];
var xPositionCurrent = -1;
var yPositionCurrent = 0;
var xPositionNext=0;
var yPositionNext=0;
var travelLog = [];
var numberOfPieces = 8;
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


// downLeftTrack.task(xPosition,yPosition);
// console.log(xPosition,yPosition);
// cuadricula[0].splice(2,1,xPosition,yPosition);
// console.log(cuadricula)

cuadricula = [[horizontalTrack,downRightTrack,upRightTrack],[downLeftTrack,crossingTrack,upLeftTrack],[verticalTrack,"",""]];
function  tracePath(valorX,valorY){
    var x = valorX;
    var y = valorY;
    travelLog.push(x,y);
    var piece = cuadricula[x][y];
    piece.task(xPositionCurrent,yPositionCurrent);
}

for (var i = 0; i<numberOfPieces; i++){
    tracePath(xPositionNext,yPositionNext);
    console.log(xPositionCurrent,yPositionCurrent);
}
console.log(travelLog);
