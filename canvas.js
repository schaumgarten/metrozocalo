var canvas = document.getElementById('canvas')
var ctx = canvas.getContext("2d");
// var ctx = document.getElementById("perro").getContext("2d");
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
                let t = new Train();
                t.draw();
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

function drawTrain(){
    var image = new Train();
    // image.trainBack.onload = function(){
    // }
    image.draw();
      
}

function animateTrain(){
   var movingTrain = new Train();
   var track = new Image();
   track.src = "./images/horizontal-trackb.png";
   var frames = 0;
   
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