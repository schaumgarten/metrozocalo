class DownRightTrack {
    constructor(){
        this.id = 5;
        this.position = []
        this.source = "./images/down-right-track.png"
        this.direction = 0;
    }
    task(previousX,previousY) {
        xPositionCurrent = this.position[0];
        yPositionCurrent = this. position[1];
        if (previousX > this.position [0]){
            xPositionNext = this.position[0];
            yPositionNext = this.position[1]+1; 
            this.direction = 0;
            expectedPieces = [1,3,4,7];
        } else if (previousY > this.position[1]){
            xPositionNext = this.position[0]+1;
            yPositionNext = this.position[1];
            this.direction = 1;
            expectedPieces = [2,3,6,7];
        }    
    }
    animate(){
        this.frames = 0;
        this.train1 = new Train();
        this.vertTrain = new VerticalTrain();
        this.via = new Image();
        this.vuelta = new Image();
        this.via.src = "./images/down-right-trackb.png";
        this.vuelta.src = "./images/turning-1-1.png";
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
                    //sección horizontal
                    ctx.drawImage(track,cornerX + 1,cornerY + 1, 68, 68);
                    magia (100, 70, 0, 1, cornerX, cornerY, movingTrain, frames);
                                        
                    //sección vertical
                    magia(67,100,1,0,cornerX,cornerY,secondTrain,frames);
                    
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
                    ctx.drawImage(track, cornerX + 1, cornerY + 1, 68, 66);
                    //sección horizontal
                    magia(70,100,0,0,cornerX,cornerY,movingTrain,frames);
                                        
                    //sección vertical
                    magia(100,70,1,1,cornerX,cornerY,secondTrain,frames);
                    
                    //vuelta
                    if((cornerY + 70) - frames < cornerY + 45 && frames < 168){
                        ctx.drawImage(cornerPiece,cornerX,cornerY,70,70);
                    }
                    ctx.clearRect(135,80,13,70);
                    frames++; 
                } else {
                    drawGridLines();
                    clearInterval(int);
                }
            }
        }
    }    
}
 