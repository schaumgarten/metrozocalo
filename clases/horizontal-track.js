class HorizontalTrack {
    constructor() {
        this.id = 2;
        this.position = []
        this.source = "./images/horizontal-track.png"
        this.direction = 0
    }
    task(previousX, previousY) {
        xPositionCurrent = this.position[0];
        yPositionCurrent = this. position[1];
        if (previousX < this.position[0]){
            xPositionNext = this.position[0]+1;
            yPositionNext = this.position[1];
            this.direction = 1;
        } else if (previousX > this.position[0]){
            xPositionNext = this.position[0]-1;
            yPositionNext = this.position[1];
        }
    }
    
    animate(){
        this.movingTrain = new Train();
        this.track = new Image();
        this.track.src = "./images/horizontal-trackb.png";
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
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    drawGridLines();
                    clearInterval(int);
                }
                
            } else {
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
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    drawGridLines();
                    clearInterval(int);
                }
                
            }
        }
    }
    
}
