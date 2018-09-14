class CrossingTrack {
    constructor(){
        this.id = 3;
        this.position = []
        this.source = "./images/crossing-track.png"
        this.direction = 1;
    }
    
    task(previousX,previousY) {
        xPositionCurrent = this.position[0];
        yPositionCurrent = this. position[1];
        if (previousX < this.position[0]){
            xPositionNext = this.position[0]+1;
            yPositionNext = this.position[1];
            // this.direction.push(1);
            this.direction = 1;
            expectedPieces = [2,3,6,7];
        } else if (previousX > this.position[0]) {
            xPositionNext = this.position[0]-1;
            yPositionNext = this.position[1];
            // this.direction.push(0);
            this.direction = 0;
            expectedPieces = [2,3,4,5];
        } else if (previousY < this.position[1]){
            xPositionNext = this.position[0]
            yPositionNext = this.position[1]+1;
            // this.direction.push(2);
            this.direction = 2;
            expectedPieces = [1,3,4,7];
        } else if (previousY > this.position[1]) {
            xPositionNext = this.position[0]
            yPositionNext = this.position[1]-1;
            // this.direction.push(3);
            this.direction = 3;
            expectedPieces = [1,3,6,5];
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
            if (dir === 1){
                if (cuadros<195){
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    magia(0,100, 0, 0, cornerX, cornerY, trenecito, cuadros);
                    ctx.clearRect(135,80,13,70);
                    cuadros++; 
                } else {
                    // dir.splice(0,1);
                    // console.log(dir)
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    drawGridLines();
                    clearInterval(int);
                }
                
            } else if (dir === 0){
                if (cuadros<195){
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    magia (100,0, 0, 1, cornerX, cornerY, trenecito, cuadros);
                    ctx.clearRect(135,80,13,70);
                    cuadros++; 
                } else {
                    // dir.splice(0,1);
                    // console.log(dir)
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    drawGridLines();
                    clearInterval(int);
                }
                
            } else if (dir === 2){
                if(cuadros<195){
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    magia(0,100,1,0,cornerX,cornerY,trenecitoB,cuadros);                   
                    cuadros++;                    
                } else {
                    // dir.splice(0,1);
                    // console.log(dir)
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    drawGridLines();
                    clearInterval(int);
                }
                
            } else if (dir === 3){
                if (cuadros < 195){
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    magia(100,0,1,1,cornerX,cornerY,trenecitoB,cuadros);                 
                    cuadros++; 
                } else {
                    // dir.splice(0,1);
                    // console.log(dir)
                    ctx.drawImage(via,cornerX+1,cornerY+1,68,68);
                    drawGridLines();
                    clearInterval(int);
                }
            }
        }
    }
    
}