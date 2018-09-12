class DownLeftTrack {
    constructor(){
        this.id = 6;
        this.position = []
        this.source = "./images/down-left-track.png"
        this.direction = 0;
    }
    task(previousX,previousY){
        xPositionCurrent = this.position[0];
        yPositionCurrent = this. position[1];
        if (previousX < this.position [0]){
            xPositionNext = this.position[0];
            yPositionNext = this.position[1]+1;
            this.direction = 0; 
        } else if (previousY > this.position[1]){
            xPositionNext = this.position[0]-1;
            yPositionNext = this.position[1];
            this.direction = 1;
        }    
    }
    animate(){
        this.frames = 0;
        this.train1 = new Train();
        this.vertTrain = new VerticalTrain();
        this.via = new Image();
        this.vuelta = new Image();
        this.via.src = "./images/down-left-trackb.png";
        this.vuelta.src = "./images/turning.png";
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
                    if((cornerX - 118) + frames < cornerX + 18 && (cornerX - 118) + frames>cornerX-15){
                        ctx.drawImage(movingTrain.trainBack, (cornerX-118) + frames, cornerY, 35, 70);
                    }
                    if((cornerX-102)+frames < cornerX + 18 && (cornerX-102)+frames>cornerX-15){
                        ctx.drawImage(movingTrain.wagonFront, (cornerX-102)+frames, cornerY , 35 , 70);
                    }
                    if((cornerX-85)+frames < cornerX + 18 && (cornerX-85)+frames>cornerX-15){
                        ctx.drawImage(movingTrain.wagonBack, (cornerX-85)+frames, cornerY, 35, 70);
                    }
                    if((cornerX-68)+frames < cornerX + 18 && (cornerX-68)+frames>cornerX-15){
                        ctx.drawImage(movingTrain.wagonFront, (cornerX-68)+frames, cornerY, 35, 70);
                    }
                    if((cornerX-51)+frames < cornerX + 18 && (cornerX-51)+frames>cornerX-15){
                        ctx.drawImage(movingTrain.wagonBack, (cornerX-51)+frames, cornerY, 35, 70);
                    }
                    if ((cornerX-34)+frames < cornerX + 18 && (cornerX-34)+frames>cornerX-15 ){
                        ctx.drawImage(movingTrain.wagonFront,(cornerX-34)+frames, cornerY, 35, 70);
                    }
                    if ((cornerX-17)+frames < cornerX + 18 && (cornerX-17)+frames>cornerX-15){
                        ctx.drawImage(movingTrain.wagonBack, (cornerX-17)+frames, cornerY, 35, 70);
                    }
                    if (cornerX+frames < cornerX + 18 && cornerX+frames>cornerX-15){
                        ctx.drawImage(movingTrain.front, cornerX+frames, cornerY, 35, 70);
                    }
                    
                    //sección vertical
                    if((cornerY - 112) + frames < (cornerY + 70) && (cornerY - 112) + frames > (cornerY +17)){
                        ctx.drawImage(secondTrain.trainBack,cornerX,(cornerY - 112) + frames, 70, 35);
                    }
                    if((cornerY - 96) + frames < (cornerY + 70) && (cornerY - 96) + frames > (cornerY +17)){
                        ctx.drawImage(secondTrain.wagonFront,cornerX,(cornerY - 96) + frames, 70, 35);
                    }
                    if((cornerY - 80) + frames < (cornerY + 70) && (cornerY - 80) + frames > (cornerY +17)){
                        ctx.drawImage(secondTrain.wagonBack,cornerX,(cornerY - 80) + frames, 70, 35);
                    }
                    if((cornerY - 64) + frames < (cornerY + 70) && (cornerY - 64) + frames > (cornerY +17)){
                        ctx.drawImage(secondTrain.wagonFront,cornerX,(cornerY - 64) + frames, 70, 35);
                    }
                    if((cornerY - 48) + frames < (cornerY + 70) && (cornerY - 48) + frames > (cornerY +17)){
                        ctx.drawImage(secondTrain.wagonBack,cornerX,(cornerY - 48) + frames, 70, 35);
                    }
                    if((cornerY - 32) + frames < (cornerY + 70) && (cornerY - 32) + frames > (cornerY +17)){
                        ctx.drawImage(secondTrain.wagonFront,cornerX,(cornerY - 32) + frames, 70, 35);
                    }
                    if((cornerY - 16) + frames < (cornerY + 70) && (cornerY - 16) + frames > (cornerY +17)){
                        ctx.drawImage(secondTrain.wagonBack,cornerX,(cornerY - 15) + frames, 70, 35);
                    }
                    if(cornerY + frames < (cornerY + 70) && cornerY + frames > (cornerY +17)){
                        ctx.drawImage(secondTrain.front,cornerX, cornerY + frames, 70, 35);
                    }
                    //vuelta
                    if(cornerX + frames > cornerX +18 && frames < 140){
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
                    //sección horizontal
                    if((cornerX + 70) - frames < cornerX + 18 && (cornerX + 70) - frames > cornerX -15){
                        ctx.drawImage(movingTrain.trainBack, (cornerX + 70) - frames, cornerY, 35, 70);
                    }
                    if((cornerX + 86) - frames < cornerX + 18 && (cornerX + 86) - frames > cornerX -15){
                        ctx.drawImage(movingTrain.wagonFront, (cornerX + 86) - frames, cornerY , 35 , 70);
                    }
                    if((cornerX + 102) - frames < cornerX + 18 && (cornerX + 102) - frames > cornerX -15){
                        ctx.drawImage(movingTrain.wagonBack, (cornerX + 102) - frames, cornerY, 35, 70);
                    }
                    if((cornerX + 118) - frames < cornerX + 18 && (cornerX + 118) - frames>cornerX -15){
                        ctx.drawImage(movingTrain.wagonFront, (cornerX + 118) - frames, cornerY, 35, 70);
                    }
                    if((cornerX + 134) - frames < cornerX + 18 && (cornerX + 134) - frames > cornerX -15){
                        ctx.drawImage(movingTrain.wagonBack, (cornerX + 134) - frames, cornerY, 35, 70);
                    }
                    if ((cornerX + 150) - frames < cornerX + 18 && (cornerX + 150) - frames > cornerX -15 ){
                        ctx.drawImage(movingTrain.wagonFront,(cornerX + 150) - frames, cornerY, 35, 70);
                    }
                    if ((cornerX + 166) - frames < cornerX + 18 && (cornerX + 166) - frames>cornerX -15){
                        ctx.drawImage(movingTrain.wagonBack, (cornerX + 166) - frames, cornerY, 35, 70);
                    }
                    if ((cornerX + 182) - frames < cornerX + 18 && (cornerX + 182) - frames > cornerX -15){
                        ctx.drawImage(movingTrain.front, (cornerX + 182) - frames, cornerY, 35, 70);
                    }
                    
                    //sección vertical
                    if((cornerY + 70) - frames > cornerY + 18 && (cornerY + 70) - frames < (cornerY + 50)){
                        ctx.drawImage(secondTrain.trainBack,cornerX,(cornerY + 70) - frames, 70, 35);
                    }
                    if((cornerY + 86) - frames > cornerY + 18 && (cornerY + 86) - frames < (cornerY + 50)){
                        ctx.drawImage(secondTrain.wagonFront,cornerX,(cornerY + 86) - frames, 70, 35);
                    }
                    if((cornerY + 102) - frames > cornerY + 18 && (cornerY + 102) - frames < (cornerY + 50)){
                        ctx.drawImage(secondTrain.wagonBack,cornerX,(cornerY + 102) - frames, 70, 35);
                    }
                    if((cornerY + 118) - frames > cornerY + 18 && (cornerY + 118) - frames < (cornerY + 50)){
                        ctx.drawImage(secondTrain.wagonFront,cornerX,(cornerY + 118) - frames, 70, 35);
                    }
                    if((cornerY + 134) - frames > cornerY + 18 && (cornerY + 134) - frames < (cornerY + 50)){
                        ctx.drawImage(secondTrain.wagonBack,cornerX,(cornerY + 134) - frames, 70, 35);
                    }
                    if((cornerY + 150) - frames > cornerY + 18 && (cornerY + 150) - frames < (cornerY + 50)){
                        ctx.drawImage(secondTrain.wagonFront,cornerX,(cornerY + 150) - frames, 70, 35);
                    }
                    if((cornerY + 166) - frames > cornerY + 18 && (cornerY + 166) - frames < (cornerY + 50)){
                        ctx.drawImage(secondTrain.wagonBack,cornerX,(cornerY + 166) - frames, 70, 35);
                    }
                    if((cornerY + 182) - frames > cornerY + 18 && (cornerY + 182) - frames < (cornerY + 50)){
                        ctx.drawImage(secondTrain.front,cornerX,(cornerY + 182) - frames, 70, 35);
                    }
                    //vuelta
                    if((cornerY + 70) - frames < cornerY + 25 && frames < 170){
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