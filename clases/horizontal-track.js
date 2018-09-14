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
            expectedPieces = [2,3,6,7];
        } else if (previousX > this.position[0]){
            xPositionNext = this.position[0]-1;
            yPositionNext = this.position[1];
            expectedPieces = [2,3,4,5];
        }
    }
    
    animate(){
        this.movingTrain = new Train();
        this.track = new Image();
        this.track.src = "./images/horizontal-trackb.png";
        this.frames = 0;
        var frames = this.frames;
        var via = this.track;
        var trenecito = this.movingTrain;
        var cornerX = (this.position[0]*70)+150;
        var cornerY = (this.position[1]*70)+80;   
        var int = setInterval(movie,1000/60);
        var dir = this.direction;
        function movie(){
            if (dir === 1){
                if (frames<200){
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    magia(0,100, 0, 0, cornerX, cornerY, trenecito, frames);
                    frames++; 
                } else {
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    drawGridLines();
                    clearInterval(int);
                }
                
            } else {
                if (frames<200){
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    magia (100,0, 0, 1, cornerX, cornerY, trenecito, frames);
                    ctx.clearRect(135,80,13,70);
                    frames++; 
                } else {
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    drawGridLines();
                    clearInterval(int);
                }
                
            }
        }
    }
    
}
