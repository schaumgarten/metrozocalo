var canvas = document.getElementById('canvas')
var ctx = canvas.getContext("2d");
var selectorX = 0;
var absoluteX = 150;
var selectorY = 0;
var absoluteY = 80;

function drawCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.strokeRect(0,0,canvas.width,canvas.height);
    ctx.strokeRect(150,80,700,490);
    ctx.strokeRect(44,80,70,350);
    
}

function drawGridLines(){
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 1;
    for (var i = 0; i < 9; i++){
        var coeficiente = 70*i;
        ctx.beginPath();
        ctx.moveTo(220+coeficiente,80);
        ctx.lineTo(220+coeficiente,570);
        ctx.stroke();
    }
    
    for (var i= 0; i < 6; i++){
        var coeficiente = 70*i;
        ctx.beginPath();
        ctx.moveTo(150,150+coeficiente);
        ctx.lineTo(850,150+coeficiente);
        ctx.stroke();
    }
}

function drawSelector(){
    ctx.beginPath() 
    ctx.strokeStyle = "red";
    ctx.lineWidth = 4;
    ctx.rect(absoluteX, absoluteY, 70, 70);
    ctx.stroke();
    ctx.strokeStyle = "green";
    ctx.rect(44,360,70,70);
    ctx.stroke();
    
}

function placeOnCanvas(){
    placePiece(selectorX,selectorY);
}

function drawGrid(){
    
    cuadricula.forEach(function(column){
        column.forEach(function(slot){
            if(typeof slot === 'object'){
                var image = new Image();
                var origin = slot.source;
                image.src = origin;
                image.onload = function(){
                    ctx.drawImage(image, 150 + (slot.position[0]*70), 80 + (slot.position[1]*70), 70,70);
                }
            }
        })
    });
}

function drawStock(){
    piecesArray.forEach(function(piece, index){
        var image = new Image();
        var origin = piece.source;
        image.src = origin;
        image.onload = function(){
            ctx.drawImage(image, 44, 80 + (index*70), 70, 70);
            
        }
    })
}

function moveTrain(){
    let loop = 0;
    var int = setInterval(moving,(1000/60)*70);
    function moving(){
        if (loop<pathPieces.length){
            pathPieces[loop].animate();
            loop++;
        } else {
            clearInterval(int);
        }       
    }
}

function animateTrain(){
    var vuelta = new UpLeftTrack();
    var via = new Image();
    via.src = vuelta.source;
    vuelta.position.push(0,0);
    ctx.drawImage(via,150,80,70,70);
    vuelta.direction = 1;
    vuelta.animate();
    

}
