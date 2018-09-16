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
var piecesPlaced = 5;
var pathPieces = []
var movingPieces = []
var expectedPieces = [2,3,6];

// function  tracePath(valorX,valorY){
//     var piece = cuadricula[valorX][valorY];
//     if(typeof piece == 'object'){
//         piece.task(xPositionCurrent,yPositionCurrent);
//     } else {
//         return false;
//     }
// }

function checkIfMatches(piece){
    var r = false;
    expectedPieces.forEach(function(id){
        if (id === piece.id){
            r = true;
        }    
    });
    return r;
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
    if (valorX > 9 || valorX < 0 || valorY > 6 || valorY < 0){
        return false;
    }
    // console.log(valorX,valorY);
    var piece = cuadricula[valorX][valorY];
    //console.log(piece);
    if(typeof piece == 'object' && checkIfMatches(piece) === true){
        //console.log(piece);
        piece.task(xPositionCurrent,yPositionCurrent);
        pathPieces.push(piece);
    } else {
        return false;
    }
} 


//
function verifyPath(){
    for (var i = 0; i<piecesPlaced; i++){
        //console.log(i);
        var fun = tracePath(xPositionNext,yPositionNext);
        if (fun == false){
            break;
        } else {
            travelLog.push(xPositionCurrent,yPositionCurrent);
        }
    }
}

// console.log(travelLog);
function comparePaths(){
    pathPieces.forEach(function(piece,index){
        // console.log(piece);
        // console.log(movingPieces[index]);
        if (piece === movingPieces[index]){
            // console.log("todo igualitio")
        } else {
            // console.log("diferente! pieza:" + piece.id);
            movingPieces.splice(index,1,piece);
        }
    })
}


function placePiece(x,y){
    if (typeof cuadricula[x][y] == 'object'){
        var changing = new Changing();
        changing.position.push(x,y);
        cuadricula[x].splice(y,1,changing);
        refresh();
        setTimeout(function(){
             placing();
             refresh();
        },500) 
    } else {
        placing();
    }
    function placing(){
    piecesPlaced++;
    let placedPiece = piecesArray[4];
    placedPiece.position.push(x,y);
    cuadricula[x].splice(y,1,placedPiece);
    piecesArray.pop();
    piecesArray.unshift(getRandomPiece());
    }
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
//console.log(piecesArray);

function checkIfWinner(){
       setInterval(dibujos,1000/60);
       function dibujos(){
   if(xPositionNext === 10 && yPositionNext === 6){
        console.log("ganaste");
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvas.width,canvas.height);
        ctx.fillStyle = "white";
        ctx.font = "70px metro";
        ctx.fillText("¡Ganaste!", 210, 290);
        ctx.fillText("Puntaje " + loop , 190,380);
    } else {
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, canvas.width,canvas.height);
        ctx.fillStyle = "white";
        ctx.font = "70px metro";
        ctx.fillText("¡Perdiste!", 210, 290);
        ctx.fillText("Ctrl + R", 240,380);
    }
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
    //animateTrain();  
}

function refresh(){
    drawCanvas();
    drawGridLines();
    drawSelector();
    drawGrid();
    drawStock();
}


// setInterval(function(){
//     //verifyPath(); 
//     checkIfWinner();
//     //moveTrain();
// },50000);




var startButton = document.getElementById("start-button");
startButton.onclick =function(){
    var instrucciones = document.getElementById("instrucciones");
    var body = document.getElementById('body');
    var boton = document.getElementById('boton');
    body.removeChild(instrucciones);
    body.removeChild(boton);
    startGame();
    delayTrain();
};

function delayTrain(){
    setTimeout(function(){
        //console.log("hola");
        verifyPath();
        createMovingPath();
        moveTrain();   
        setInterval(function(){
            //console.log("holi")
            //reassignTracingValues();
            xPositionCurrent = -1;
            yPositionCurrent = 0;
            xPositionNext = 0;
            yPositionNext = 0;
            expectedPieces = [2,3,6];
            pathPieces = [];
            verifyPath(); 
            comparePaths();   
            //console.log(pathPieces);         
        },500);       
    },20000);
}

function createMovingPath(){
    pathPieces.forEach(function(piece){
        movingPieces.push(piece);
    });
}

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
    
    refresh();
    
  });
  

