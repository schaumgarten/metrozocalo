class CrossingTrack {
    constructor(){
        this.id = 3;
        this.position = []
        this.source = "./images/crossing-track.png"
        this.direction = [];
    }
    
    task(previousX,previousY) {
        xPositionCurrent = this.position[0];
        yPositionCurrent = this. position[1];
        if (previousX < this.position[0]){
            xPositionNext = this.position[0]+1;
            yPositionNext = this.position[1];
            this.direction.push(1);
        } else if (previousX > this.position[0]) {
            xPositionNext = this.position[0]-1;
            yPositionNext = this.position[1];
            this.direction.push(0);
        } else if (previousY < this.position[1]){
            xPositionNext = this.position[0]
            yPositionNext = this.position[1]+1;
            this.direction.push(2);
        } else if (previousY > this.position[1]) {
            xPositionNext = this.position[0]
            yPositionNext = this.position[1]-1;
            this.direction.push(3);
        }
    }
    animate(){
        this.movingTrain = new Train();
        this.secondTrain = new VerticalTrain();
        this.track = new Image();
        this.track.src = "./images/crossing-trackb.png";
        this.frames = 0;
        var cuadros = this.frames;
        var via = this.track;
        var trenecito = this.movingTrain;
        var trenecitoB = this.secondTrain;
        var cornerX = (this.position[0]*70)+150;
        var cornerY = (this.position[1]*70)+80;   
        var int = setInterval(movie,1000/60);
        var dir = this.direction;
        function movie(){
            if (dir[0] === 1){
                if (cuadros<200){
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    if((cornerX-118)+ cuadros < (cornerX+70) && (cornerX-118)+ cuadros > (cornerX-15)){
                        ctx.drawImage(trenecito.trainBack, (cornerX-118)+cuadros, cornerY, 35, 70);
                    }
                    if((cornerX-102)+cuadros < (cornerX+70) && (cornerX-102)+cuadros>(cornerX-15)){
                        ctx.drawImage(trenecito.wagonFront, (cornerX-102)+cuadros, cornerY , 35 , 70);
                    }
                    if((cornerX-85)+cuadros < (cornerX+70) && (cornerX-85)+cuadros>(cornerX-15)){
                        ctx.drawImage(trenecito.wagonBack, (cornerX-85)+cuadros, cornerY, 35, 70);
                    }
                    if((cornerX-68)+cuadros < (cornerX+70) && (cornerX-68)+cuadros>(cornerX-15)){
                        ctx.drawImage(trenecito.wagonFront, (cornerX-68)+cuadros, cornerY, 35, 70);
                    }
                    if((cornerX-51)+cuadros < (cornerX+70) && (cornerX-51)+cuadros>(cornerX-15)){
                        ctx.drawImage(trenecito.wagonBack, (cornerX-51)+cuadros, cornerY, 35, 70);
                    }
                    if ((cornerX-34)+cuadros < (cornerX+70) && (cornerX-34)+cuadros>(cornerX-15) ){
                        ctx.drawImage(trenecito.wagonFront,(cornerX-34)+cuadros, cornerY, 35, 70);
                    }
                    if ((cornerX-17)+cuadros < (cornerX+70) && (cornerX-17)+cuadros>(cornerX-15)){
                        ctx.drawImage(trenecito.wagonBack, (cornerX-17)+cuadros, cornerY, 35, 70);
                    }
                    if (cornerX+cuadros <(cornerX+70) && cornerX+cuadros>(cornerX-15)){
                        ctx.drawImage(trenecito.front, cornerX+cuadros, cornerY, 35, 70);
                    }
                    ctx.clearRect(135,80,13,70);
                    cuadros++; 
                } else {
                    dir.splice(0,1);
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    drawGridLines();
                    clearInterval(int);
                }
                
            } else if (dir[0] === 0){
                if (cuadros<200){
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    if((cornerX+70) - cuadros < (cornerX+70) && (cornerX+70) - cuadros > cornerX-15){
                        ctx.drawImage(trenecito.trainBack, (cornerX + 70) - cuadros, cornerY, 35, 70);
                    }
                    if((cornerX+86) - cuadros < (cornerX+70) && (cornerX+86)-cuadros>(cornerX-15)){
                        ctx.drawImage(trenecito.wagonFront, (cornerX + 86) - cuadros, cornerY , 35 , 70);
                    }
                    if((cornerX+102) - cuadros < (cornerX+70) && (cornerX+102)-cuadros>(cornerX-15)){
                        ctx.drawImage(trenecito.wagonBack, (cornerX+102) - cuadros, cornerY, 35, 70);
                    }
                    if((cornerX+118) - cuadros < (cornerX+70) && (cornerX+118)-cuadros>(cornerX-15)){
                        ctx.drawImage(trenecito.wagonFront, (cornerX+118) - cuadros, cornerY, 35, 70);
                    }
                    if((cornerX+134) - cuadros < (cornerX+70) && (cornerX+134)-cuadros>(cornerX-15)){
                        ctx.drawImage(trenecito.wagonBack, (cornerX + 134) - cuadros, cornerY, 35, 70);
                    }
                    if((cornerX+150) - cuadros < (cornerX+70) && (cornerX+150)-cuadros>(cornerX-15)){
                        ctx.drawImage(trenecito.wagonFront,(cornerX + 150) - cuadros, cornerY, 35, 70);
                    }
                    if((cornerX+166) - cuadros < (cornerX+70) && (cornerX+166)-cuadros>(cornerX-15)){
                        ctx.drawImage(trenecito.wagonBack, (cornerX + 166) - cuadros, cornerY, 35, 70);
                    }
                    if((cornerX+182) - cuadros < (cornerX+70) && (cornerX+182)-cuadros>(cornerX-15)){
                        ctx.drawImage(trenecito.front, (cornerX+182) - cuadros, cornerY, 35, 70);
                    }
                    // ctx.clearRect(135,80,13,70);
                    cuadros++; 
                } else {
                    dir.splice(0,1);
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    drawGridLines();
                    clearInterval(int);
                }
                
            } else if (dir[0] === 2){
                if(cuadros<165){
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    if((cornerY - 112) + cuadros < (cornerY + 70) && (cornerY - 112) + cuadros > (cornerY - 30)){
                        ctx.drawImage(trenecitoB.trainBack,cornerX,(cornerY - 112) + cuadros, 70, 35);
                    }
                    if((cornerY - 96) + cuadros < (cornerY + 70) && (cornerY - 96) + cuadros > (cornerY - 30)){
                        ctx.drawImage(trenecitoB.wagonFront,cornerX,(cornerY - 96) + cuadros, 70, 35);
                    }
                    if((cornerY - 80) + cuadros < (cornerY + 70) && (cornerY - 80) + cuadros > (cornerY - 30)){
                        ctx.drawImage(trenecitoB.wagonBack,cornerX,(cornerY - 80) + cuadros, 70, 35);
                    }
                    if((cornerY - 64) + cuadros < (cornerY + 70) && (cornerY - 64) + cuadros > (cornerY - 30)){
                        ctx.drawImage(trenecitoB.wagonFront,cornerX,(cornerY - 64) + cuadros, 70, 35);
                    }
                    if((cornerY - 48) + cuadros < (cornerY + 70) && (cornerY - 48) + cuadros > (cornerY - 30)){
                        ctx.drawImage(trenecitoB.wagonBack,cornerX,(cornerY - 48) + cuadros, 70, 35);
                    }
                    if((cornerY - 32) + cuadros < (cornerY + 70) && (cornerY - 32) + cuadros > (cornerY - 30)){
                        ctx.drawImage(trenecitoB.wagonFront,cornerX,(cornerY - 32) + cuadros, 70, 35);
                    }
                    if((cornerY - 16) + cuadros < (cornerY + 70) && (cornerY - 16) + cuadros > (cornerY - 30)){
                        ctx.drawImage(trenecitoB.wagonBack,cornerX,(cornerY - 15) + cuadros, 70, 35);
                    }
                    if(cornerY + cuadros < (cornerY + 70) && cornerY + cuadros > (cornerY - 30)){
                        ctx.drawImage(trenecitoB.front,cornerX, cornerY + cuadros, 70, 35);
                    }
                    cuadros++;                    
                } else {
                    dir.splice(0,1);
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    drawGridLines();
                    clearInterval(int);
                }
                
            } else if (dir[0] === 3){
                if (cuadros < 220){
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    if((cornerY + 54) - cuadros > cornerY - 35 && (cornerY + 54) - cuadros < (cornerY + 50)){
                        ctx.drawImage(trenecitoB.trainBack,cornerX,(cornerY + 54) - cuadros, 70, 35);
                    }
                    if((cornerY + 70) - cuadros > cornerY - 35 && (cornerY + 70) - cuadros < (cornerY + 50)){
                        ctx.drawImage(trenecitoB.wagonFront,cornerX,(cornerY + 70) - cuadros, 70, 35);
                    }
                    if((cornerY + 86) - cuadros > cornerY - 35 && (cornerY + 86) - cuadros < (cornerY + 50)){
                        ctx.drawImage(trenecitoB.wagonBack,cornerX,(cornerY + 86) - cuadros, 70, 35);
                    }
                    if((cornerY + 102) - cuadros > cornerY - 35 && (cornerY + 102) - cuadros < (cornerY + 50)){
                        ctx.drawImage(trenecitoB.wagonFront,cornerX,(cornerY + 102) - cuadros, 70, 35);
                    }
                    if((cornerY + 118) - cuadros > cornerY - 35 && (cornerY + 118) - cuadros < (cornerY + 50)){
                        ctx.drawImage(trenecitoB.wagonBack,cornerX,(cornerY + 118) - cuadros, 70, 35);
                    }
                    if((cornerY + 134) - cuadros > cornerY - 35 && (cornerY + 134) - cuadros < (cornerY + 50)){
                        ctx.drawImage(trenecitoB.wagonFront,cornerX,(cornerY + 134) - cuadros, 70, 35);
                    }
                    if((cornerY + 150) - cuadros > cornerY - 35 && (cornerY + 150) - cuadros < (cornerY + 50)){
                        ctx.drawImage(trenecitoB.wagonBack,cornerX,(cornerY + 150) - cuadros, 70, 35);
                    }
                    if((cornerY + 166) - cuadros > cornerY - 35 && (cornerY + 166) - cuadros < (cornerY + 50)){
                        ctx.drawImage(trenecitoB.front,cornerX,(cornerY + 166) - cuadros, 70, 35);
                    }
                    cuadros++; 
                } else {
                    dir.splice(0,1);
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    drawGridLines();
                    clearInterval(int);
                }
            }
        }
    }
    
}