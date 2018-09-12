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
    var vuelta = new UpRightTrack();
    var via = new Image();
    via.src = vuelta.source;
    vuelta.position.push(0,0);
    ctx.drawImage(via,150,80,70,70);
    vuelta.direction = 0;
    vuelta.animate();
}
//     var movingTrain = new Train();
//     var track = new Image();
//     var frames = 0;
//     var secondTrain = new VerticalTrain();
//     track.src = "./images/down-left-trackb.png";
//     var cornerPiece = new Image();
//     cornerPiece.src = "./images/turning.png";
//     var cornerX = 150;
//     var cornerY = 80;   
//     var int = setInterval(movie,1000/60);
//     var dir = 0;
//     function movie(){
//         if (dir === 0){
//             //sección horizontal
//             ctx.drawImage(track,150,80,70,70);
//             if(32+frames < cornerX + 18 && 32+frames>135){
//                 ctx.drawImage(movingTrain.trainBack, 32+frames, 80, 35, 70);
//             }
//             if(48+frames < cornerX + 18 && 48+frames>135){
//                 ctx.drawImage(movingTrain.wagonFront, 48+frames, 80 , 35 , 70);
//             }
//             if(65+frames < cornerX + 18 && 65+frames>135){
//                 ctx.drawImage(movingTrain.wagonBack, 65+frames, 80, 35, 70);
//             }
//             if(82+frames < cornerX + 18 && 82+frames>135){
//                 ctx.drawImage(movingTrain.wagonFront, 82+frames, 80, 35, 70);
//             }
//             if(99+frames < cornerX + 18 && 99+frames>135){
//                 ctx.drawImage(movingTrain.wagonBack, 99+frames, 80, 35, 70);
//             }
//             if (116+frames < cornerX + 18 && 116+frames>135 ){
//                 ctx.drawImage(movingTrain.wagonFront,116+frames, 80, 35, 70);
//             }
//             if (133+frames < cornerX + 18 && 133+frames>135){
//                 ctx.drawImage(movingTrain.wagonBack, 133+frames, 80, 35, 70);
//             }
//             if (150+frames < cornerX + 18 && 150+frames>135){
//                 ctx.drawImage(movingTrain.front, 150+frames, 80, 35, 70);
//             }
            
//             //sección vertical
//             if((cornerY - 112) + frames < (cornerY + 70) && (cornerY - 112) + frames > (cornerY +17)){
//                 ctx.drawImage(secondTrain.trainBack,cornerX,(cornerY - 112) + frames, 70, 35);
//             }
//             if((cornerY - 96) + frames < (cornerY + 70) && (cornerY - 96) + frames > (cornerY +17)){
//                 ctx.drawImage(secondTrain.wagonFront,cornerX,(cornerY - 96) + frames, 70, 35);
//             }
//             if((cornerY - 80) + frames < (cornerY + 70) && (cornerY - 80) + frames > (cornerY +17)){
//                 ctx.drawImage(secondTrain.wagonBack,cornerX,(cornerY - 80) + frames, 70, 35);
//             }
//             if((cornerY - 64) + frames < (cornerY + 70) && (cornerY - 64) + frames > (cornerY +17)){
//                 ctx.drawImage(secondTrain.wagonFront,cornerX,(cornerY - 64) + frames, 70, 35);
//             }
//             if((cornerY - 48) + frames < (cornerY + 70) && (cornerY - 48) + frames > (cornerY +17)){
//                 ctx.drawImage(secondTrain.wagonBack,cornerX,(cornerY - 48) + frames, 70, 35);
//             }
//             if((cornerY - 32) + frames < (cornerY + 70) && (cornerY - 32) + frames > (cornerY +17)){
//                 ctx.drawImage(secondTrain.wagonFront,cornerX,(cornerY - 32) + frames, 70, 35);
//             }
//             if((cornerY - 16) + frames < (cornerY + 70) && (cornerY - 16) + frames > (cornerY +17)){
//                 ctx.drawImage(secondTrain.wagonBack,cornerX,(cornerY - 15) + frames, 70, 35);
//             }
//             if(cornerY + frames < (cornerY + 70) && cornerY + frames > (cornerY +17)){
//                 ctx.drawImage(secondTrain.front,cornerX, cornerY + frames, 70, 35);
//             }
//             //vuelta
//             if(150+frames > cornerX +18 && frames < 140){
//                 ctx.drawImage(cornerPiece,cornerX,cornerY,70,70);
//             }
//             ctx.clearRect(135,80,13,70);
//             frames++; 

//         }
//     }
// }