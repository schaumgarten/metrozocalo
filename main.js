var cuadricula = [];
for (var i = 0; i<10; i++){
    cuadricula.push([]);
}
cuadricula.forEach(function(col){
    for (var i=0; i<7; i++){
        col.push("");
    }
})
var xPositionCurrent = -1;
var yPositionCurrent = 0;
var xPositionNext=0;
var yPositionNext=0;
var travelLog = [];
var numberOfSlots = 70;
var piecesArray = [];
//var piecesPlaced = 0;
var pathPieces = []

function  tracePath(valorX,valorY){
    var piece = cuadricula[valorX][valorY];
    if(typeof piece == 'object'){
        piece.task(xPositionCurrent,yPositionCurrent);
    } else {
        return false;
    }
}



function getRandomPiece(){
    var randomNumber = Math.floor((Math.random()*7)+1);
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


function  tracePath(valorX,valorY){
    var piece = cuadricula[valorX][valorY];
    if(typeof piece == 'object'){
        pathPieces.push(piece);
        piece.task(xPositionCurrent,yPositionCurrent);
    } else {
        return false;
    }
}

//
function verifyPath(){
    for (var i = 0; i<numberOfSlots; i++){
        console.log(i);
        var fun = tracePath(xPositionNext,yPositionNext);
        if (fun == false){
            return;
        } else {
            travelLog.push(xPositionCurrent,yPositionCurrent);
        }
    }
}
// console.log(travelLog);

function placePiece(x,y){
    //piecesPlaced++;
    let placedPiece = piecesArray[4];
    placedPiece.position.push(x,y);
    cuadricula[x].splice(y,1,placedPiece);
    piecesArray.pop();
    piecesArray.unshift(getRandomPiece());
    
}

function initPlacement(){
    let origin = new HorizontalTrack();
    let end = new HorizontalTrack();
    origin.position.push(0,0);
    end.position.push(9,6);
    cuadricula[0].splice(0,1,origin);
    cuadricula[9].splice(6,1,end);
}


formArray();
console.log(piecesArray);

function checkIfWinner(){
    verifyPath();    
   if(travelLog.length>=14 && xPositionNext === 10){
        console.log("ganaste");
    } else {
        console.log("perdedor");
    }
}

function startGame(){
    //drawTrain();
    drawCanvas();
    drawGridLines();
    drawSelector();
    drawStock();
    initPlacement();
    drawGrid();
    ctx.clearRect(135,80,13,70);
    //animateTrain();  
}


setInterval(function(){
    checkIfWinner();
},50000);

var startButton = document.getElementById("start-button");
startButton.onclick =function(){
    startGame()
};

var tren = new Train();


document.addEventListener("keydown", function(e){
    
    if(e.keyCode === 37 && absoluteX > 150){
      selectorX -= 1;
      absoluteX -= 70;
    }
    if(e.keyCode === 39 && absoluteX < 780){
      selectorX += 1;
      absoluteX += 70;
    }
    if(e.keyCode === 38 && absoluteY > 120){
        selectorY -= 1;
        absoluteY -= 70;
      }
    if(e.keyCode === 40 && absoluteY < 470){
        selectorY += 1;
        absoluteY += 70;
      }
      if(e.keyCode === 65){
        placeOnCanvas();
    }
    
    drawCanvas();
    drawGridLines();
    drawSelector();
    drawGrid();
    drawStock();
    //drawTrain();
   
  });
  

