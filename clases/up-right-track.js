class UpRightTrack {
    constructor(){
        this.id = 4;
        this.position = []
        this.source = "./images/up-right-track.png"
        this.direction = 0;
    }
    task(previousX,previousY) {
        xPositionCurrent = this.position[0];
        yPositionCurrent = this. position[1];
        if (previousX > this.position [0]){
            xPositionNext = this.position[0];
            yPositionNext = this.position[1]-1; 
            this.direction = 0;
        } else if (previousY < this.position[1]){
            xPositionNext = this.position[0]+1;
            yPositionNext = this.position[1];
            this.direction = 0;
        }    
    }
    animate(){
        this.frames = 0;
        this.train1 = new Train();
        this.vertTrain = new VerticalTrain();
        this.via = new Image();
        this.vuelta = new Image();
        this.via.src = "./images/up-right-trackb.png";
        this.vuelta.src = "./images/turning-1-0.png";
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
                    if((cornerX + 70) - frames < cornerX + 70 && (cornerX + 70) - frames > cornerX + 35){
                        ctx.drawImage(movingTrain.trainBack, (cornerX + 70) - frames, cornerY, 35, 70);
                    }
                    if((cornerX + 86) - frames < cornerX + 70 && (cornerX + 86) - frames > cornerX + 35){
                        ctx.drawImage(movingTrain.wagonFront, (cornerX + 86) - frames, cornerY , 35 , 70);
                    }
                    if((cornerX + 102) - frames < cornerX + 70 && (cornerX + 102) - frames > cornerX + 35){
                        ctx.drawImage(movingTrain.wagonBack, (cornerX + 102) - frames, cornerY, 35, 70);
                    }
                    if((cornerX + 118) - frames < cornerX + 70 && (cornerX + 118) - frames>cornerX + 35){
                        ctx.drawImage(movingTrain.wagonFront, (cornerX + 118) - frames, cornerY, 35, 70);
                    }
                    if((cornerX + 134) - frames < cornerX + 70 && (cornerX + 134) - frames > cornerX + 35){
                        ctx.drawImage(movingTrain.wagonBack, (cornerX + 134) - frames, cornerY, 35, 70);
                    }
                    if ((cornerX + 150) - frames < cornerX + 70 && (cornerX + 150) - frames > cornerX + 35 ){
                        ctx.drawImage(movingTrain.wagonFront,(cornerX + 150) - frames, cornerY, 35, 70);
                    }
                    if ((cornerX + 166) - frames < cornerX + 70 && (cornerX + 166) - frames>cornerX + 35){
                        ctx.drawImage(movingTrain.wagonBack, (cornerX + 166) - frames, cornerY, 35, 70);
                    }
                    if ((cornerX + 182) - frames < cornerX + 70 && (cornerX + 182) - frames > cornerX + 35){
                        ctx.drawImage(movingTrain.front, (cornerX + 182) - frames, cornerY, 35, 70);
                    }
                    //sección vertical 
                    if((cornerY + 54) - frames > cornerY - 35 && (cornerY + 54) - frames < (cornerY + 15)){
                        ctx.drawImage(secondTrain.trainBack,cornerX,(cornerY +42) - frames, 70, 35);
                    }
                    if((cornerY + 70) - frames > cornerY - 35 && (cornerY + 70) - frames < (cornerY + 15)){
                        ctx.drawImage(secondTrain.wagonFront,cornerX,(cornerY + 58) - frames, 70, 35);
                    }
                    if((cornerY + 86) - frames > cornerY - 35 && (cornerY + 86) - frames < (cornerY + 15)){
                        ctx.drawImage(secondTrain.wagonBack,cornerX,(cornerY + 74) - frames, 70, 35);
                    }
                    if((cornerY + 102) - frames > cornerY - 35 && (cornerY + 108) - frames < (cornerY + 15)){
                        ctx.drawImage(secondTrain.wagonFront,cornerX,(cornerY + 90) - frames, 70, 35);
                    }
                    if((cornerY + 118) - frames > cornerY - 35 && (cornerY + 118) - frames < (cornerY + 15)){
                        ctx.drawImage(secondTrain.wagonBack,cornerX,(cornerY + 106) - frames, 70, 35);
                    }
                    if((cornerY + 134) - frames > cornerY - 35 && (cornerY + 134) - frames < (cornerY + 15)){
                        ctx.drawImage(secondTrain.wagonFront,cornerX,(cornerY + 122) - frames, 70, 35);
                    }
                    if((cornerY + 150) - frames > cornerY - 35 && (cornerY + 150) - frames < (cornerY + 15)){
                        ctx.drawImage(secondTrain.wagonBack,cornerX,(cornerY + 138) - frames, 70, 35);
                    }
                    if((cornerY + 166) - frames > cornerY - 35 && (cornerY + 166) - frames < (cornerY + 15)){
                        ctx.drawImage(secondTrain.front,cornerX,(cornerY + 154) - frames, 70, 35);
                    }
                    //vuelta
                    if(cornerX + frames > cornerX + 30 && frames < 150){
                        ctx.drawImage(cornerPiece,cornerX,cornerY,70,70);
                    }
                    
                    frames++;
                } else {
                    drawGridLines();
                    clearInterval(int);
                }
            } else if (dir === 1){
                if (frames < 200){

                } else {

                }
            }
        }
    }   
}