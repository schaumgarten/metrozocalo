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
                if(cuadros<200){
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    magia (0,100,1,0,cornerX,cornerY,trenecito,cuadros);
                    cuadros++;                    
                } else {
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    drawGridLines();
                    clearInterval(int);
                }
                
            } else if (dir === 0){
                if (cuadros < 220){
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    magia(100,0,1,1,cornerX,cornerY,trenecito,cuadros);
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