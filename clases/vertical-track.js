class VerticalTrack {
    constructor(){
        this.id = 1;
        this.position = [];
        this.source = "./images/vertical-track.png"
        this.direction = 0;
    }
    task(previousX, previousY) {
        xPositionCurrent = this.position[0];
        yPositionCurrent = this. position[1];
        if (previousY < this.position[1]){
            xPositionNext = this.position[0]
            yPositionNext = this.position[1]+1;
            this.direction = 1;
        } else if (previousY > this.position[1]){
            xPositionNext = this.position[0];
            yPositionNext = this.position[1]-1;
        }
    }
    animate(){
        this.movingTrain = new VerticalTrain();
        this.track = new Image();
        this.track.src = "./images/vertical-trackb.png";
        this.frames = 0;
        var cuadros = this.frames;
        var via = this.track;
        var trenecito = this.movingTrain;
        var cornerX = (this.position[0]*70)+150;
        var cornerY = (this.position[1]*70)+80;   
        var int = setInterval(movie,1000/60);
        var dir = this.direction;
        function movie(){
            if (dir === 1){
                if(cuadros<165){
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    if((cornerY - 112) + cuadros < (cornerY + 70) && (cornerY - 112) + cuadros > (cornerY - 30)){
                        ctx.drawImage(trenecito.trainBack,cornerX,(cornerY - 112) + cuadros, 70, 35);
                    }
                    if((cornerY - 96) + cuadros < (cornerY + 70) && (cornerY - 96) + cuadros > (cornerY - 30)){
                        ctx.drawImage(trenecito.wagonFront,cornerX,(cornerY - 96) + cuadros, 70, 35);
                    }
                    if((cornerY - 80) + cuadros < (cornerY + 70) && (cornerY - 80) + cuadros > (cornerY - 30)){
                        ctx.drawImage(trenecito.wagonBack,cornerX,(cornerY - 80) + cuadros, 70, 35);
                    }
                    if((cornerY - 64) + cuadros < (cornerY + 70) && (cornerY - 64) + cuadros > (cornerY - 30)){
                        ctx.drawImage(trenecito.wagonFront,cornerX,(cornerY - 64) + cuadros, 70, 35);
                    }
                    if((cornerY - 48) + cuadros < (cornerY + 70) && (cornerY - 48) + cuadros > (cornerY - 30)){
                        ctx.drawImage(trenecito.wagonBack,cornerX,(cornerY - 48) + cuadros, 70, 35);
                    }
                    if((cornerY - 32) + cuadros < (cornerY + 70) && (cornerY - 32) + cuadros > (cornerY - 30)){
                        ctx.drawImage(trenecito.wagonFront,cornerX,(cornerY - 32) + cuadros, 70, 35);
                    }
                    if((cornerY - 16) + cuadros < (cornerY + 70) && (cornerY - 16) + cuadros > (cornerY - 30)){
                        ctx.drawImage(trenecito.wagonBack,cornerX,(cornerY - 15) + cuadros, 70, 35);
                    }
                    if(cornerY + cuadros < (cornerY + 70) && cornerY + cuadros > (cornerY - 30)){
                        ctx.drawImage(trenecito.front,cornerX, cornerY + cuadros, 70, 35);
                    }
                    cuadros++;                    
                } else {
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    drawGridLines();
                    clearInterval(int);
                }
                
            } else {
                if (cuadros < 220){
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    if((cornerY + 54) - cuadros > cornerY - 35 && (cornerY + 54) - cuadros < (cornerY + 50)){
                        ctx.drawImage(trenecito.trainBack,cornerX,(cornerY + 54) - cuadros, 70, 35);
                    }
                    if((cornerY + 70) - cuadros > cornerY - 35 && (cornerY + 70) - cuadros < (cornerY + 50)){
                        ctx.drawImage(trenecito.wagonFront,cornerX,(cornerY + 70) - cuadros, 70, 35);
                    }
                    if((cornerY + 86) - cuadros > cornerY - 35 && (cornerY + 86) - cuadros < (cornerY + 50)){
                        ctx.drawImage(trenecito.wagonBack,cornerX,(cornerY + 86) - cuadros, 70, 35);
                    }
                    if((cornerY + 102) - cuadros > cornerY - 35 && (cornerY + 102) - cuadros < (cornerY + 50)){
                        ctx.drawImage(trenecito.wagonFront,cornerX,(cornerY + 102) - cuadros, 70, 35);
                    }
                    if((cornerY + 118) - cuadros > cornerY - 35 && (cornerY + 118) - cuadros < (cornerY + 50)){
                        ctx.drawImage(trenecito.wagonBack,cornerX,(cornerY + 118) - cuadros, 70, 35);
                    }
                    if((cornerY + 134) - cuadros > cornerY - 35 && (cornerY + 134) - cuadros < (cornerY + 50)){
                        ctx.drawImage(trenecito.wagonFront,cornerX,(cornerY + 134) - cuadros, 70, 35);
                    }
                    if((cornerY + 150) - cuadros > cornerY - 35 && (cornerY + 150) - cuadros < (cornerY + 50)){
                        ctx.drawImage(trenecito.wagonBack,cornerX,(cornerY + 150) - cuadros, 70, 35);
                    }
                    if((cornerY + 166) - cuadros > cornerY - 35 && (cornerY + 166) - cuadros < (cornerY + 50)){
                        ctx.drawImage(trenecito.front,cornerX,(cornerY + 166) - cuadros, 70, 35);
                    }
                    cuadros++; 
                } else {
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    drawGridLines();
                    clearInterval(int);
                }
            }
        }
    }
}