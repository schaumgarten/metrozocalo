class UpLeftTrack {constructor(){
    this.id = 7;
    this.position = []
    this.source = "./images/up-left-track.png"
    this.direction = 0;
}
task(previousX,previousY) {
    xPositionCurrent = this.position[0];
    yPositionCurrent = this. position[1];
    if (previousX < this.position [0]){
        xPositionNext = this.position[0];
        yPositionNext = this.position[1]-1; 
        this.direction = 0;
        expectedPieces = [1,3,5,6];
    } else if (previousY < this.position[1]){
        xPositionNext = this.position[0]-1;
        yPositionNext = this.position[1];
        this.direction = 1;
        expectedPieces = [2,3,4,5];
    }    
}
animate(){
    this.frames = 0;
        this.train1 = new Train();
        this.vertTrain = new VerticalTrain();
        this.via = new Image();
        this.vuelta = new Image();
        this.via.src = "./images/up-left-trackb.png";
        this.vuelta.src = "./images/turning-0-0.png";
        var track = this.via;    
        var movingTrain = this.train1;
        var secondTrain = this.vertTrain;
        var cornerPiece = this.vuelta;
        var cornerX = (this.position[0]*70)+150;
        var cornerY = (this.position[1]*70)+80; 
        var dir = this.direction;
        var frames = this.frames;
        var int = setInterval(movie,1000/60);
        
        function movie(){
            if (dir === 0){
                if (frames < 200){
                    ctx.drawImage(track, cornerX + 1, cornerY + 1, 68, 68);
                    //sección horizontal
                    magia (0, 30, 0, 0, cornerX, cornerY, movingTrain, frames);
                    
                    //sección vertical 
                    magia (33,0,1,1,cornerX,cornerY,secondTrain,frames);
                   
                    //vuelta
                    if(cornerX + frames > cornerX + 20 && frames < 168){
                        ctx.drawImage(cornerPiece,cornerX,cornerY,70,70);
                    }
                   
                    frames++;
                } else {
                    drawGridLines();
                    clearInterval(int);
                }
            } else if (dir === 1){
                if (frames < 200){
                    ctx.drawImage(track, cornerX + 1, cornerY + 1, 68, 68);
                    //seccion horizontal
                    magia(30, 0, 0, 1, cornerX, cornerY, movingTrain, frames);
                    //sección vertical
                    magia (0, 10, 1 , 0,cornerX,cornerY,secondTrain,frames);
                     //vuelta
                     if(cornerX + frames > cornerX + 20 && frames < 170){
                        ctx.drawImage(cornerPiece,cornerX,cornerY,70,70);
                    }
                    frames++;
                } else {
                    clearInterval(int);
                }
            }
        }
}
} 

