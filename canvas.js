var canvas = document.getElementById('canvas')
var ctx = canvas.getContext("2d");
var selectorX = 0;
var absoluteX = 150;
var selectorY = 0;
var absoluteY = 120;

function drawCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.strokeRect(0,0,canvas.width,canvas.height);
    ctx.strokeRect(150,120,700,490);
    ctx.strokeRect(44,120,70,350);
    
    
    for (var i = 0; i < 9; i++){
        var coeficiente = 70*i;
        ctx.beginPath();
        ctx.moveTo(220+coeficiente,120);
        ctx.lineTo(220+coeficiente,610);
        ctx.stroke();
    }
    
    for (var i= 0; i < 6; i++){
        var coeficiente = 70*i;
        ctx.beginPath();
        ctx.moveTo(150,190+coeficiente);
        ctx.lineTo(850,190+coeficiente);
        ctx.stroke();
    }
}

function drawSelector(){
    ctx.beginPath() 
    ctx.strokeStyle = "red";
    ctx.lineWidth = 4;
    ctx.rect(absoluteX, absoluteY, 70, 70);
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
                ctx.drawImage(image, 150 + (slot.position[0]*70), 120 + (slot.position[1]*70), 70,70);
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
            ctx.drawImage(image, 44, 120 + (index*70), 70, 70);
        }
    })
}