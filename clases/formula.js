function magia(initPercent, finalPercent, richtung, direction, cornerX, cornerY,trenecito,frames){
    var initialPosition = (initPercent*70)/100;
    var finalPosition = (finalPercent*70)/100;
    if (richtung === 0){
        
        if (direction === 0){      
            initialPosition = initialPosition - 16;   
            if (cornerX +  frames < cornerX+ finalPosition + 118 && cornerX - 118 + frames > cornerX + initialPosition){
                ctx.drawImage(trenecito.trainBack, (cornerX-118)+ frames, cornerY, 35, 70);
            }
            if (cornerX + frames < cornerX + finalPosition + 102 && cornerX - 102 + frames > cornerX + initialPosition){
                ctx.drawImage(trenecito.wagonFront, (cornerX-102)+ frames, cornerY , 35 , 70);
            }
            if (cornerX + frames < cornerX + finalPosition + 85 && cornerX - 85 + frames > cornerX + initialPosition){
                ctx.drawImage(trenecito.wagonBack, cornerX - 85 + frames, cornerY, 35, 70);
            }
            if (cornerX + frames < cornerX + finalPosition + 68 && cornerX - 68 + frames > cornerX + initialPosition){
                ctx.drawImage(trenecito.wagonFront, cornerX - 68 + frames, cornerY, 35, 70);
            }
            if (cornerX + frames < cornerX + finalPosition + 51 && cornerX - 51 + frames > cornerX + initialPosition){
                ctx.drawImage(trenecito.wagonBack, cornerX - 51 + frames, cornerY, 35, 70);
            }
            if (cornerX + frames < cornerX + finalPosition + 34 && cornerX - 34 + frames > cornerX + initialPosition) {
                ctx.drawImage(trenecito.wagonFront, cornerX - 34 + frames, cornerY, 35, 70);
            }
            if (cornerX + frames < cornerX + finalPosition + 17 && cornerX - 17 + frames > cornerX + initialPosition) {
                ctx.drawImage(trenecito.wagonBack, cornerX - 17 + frames, cornerY, 35, 70);
            }
            if (cornerX + frames < cornerX + finalPosition && cornerX + frames > cornerX + initialPosition) {
                ctx.drawImage(trenecito.front, cornerX+ frames, cornerY, 35, 70);
            }
        }
        if (direction === 1){
            finalPosition = finalPosition - 15;
            if((cornerX+70) - frames < cornerX + initialPosition && cornerX + 70 - frames > cornerX + finalPosition){
                ctx.drawImage(trenecito.trainBack, cornerX + 70 - frames, cornerY, 35, 70);
            }
            if((cornerX+86) - frames < cornerX + initialPosition && cornerX + 86 - frames > cornerX + finalPosition){
                ctx.drawImage(trenecito.wagonFront, cornerX + 86 - frames, cornerY , 35 , 70);
            }
            if((cornerX+102) - frames < cornerX + initialPosition && cornerX + 102 -frames > cornerX + finalPosition){
                ctx.drawImage(trenecito.wagonBack, cornerX + 102 - frames, cornerY, 35, 70);
            }
            if((cornerX+118) - frames < cornerX + initialPosition && cornerX + 118-frames> cornerX + finalPosition){
                ctx.drawImage(trenecito.wagonFront, cornerX + 118 - frames, cornerY, 35, 70);
            }
            if((cornerX+134) - frames < cornerX + initialPosition && cornerX + 134 - frames > cornerX + finalPosition){
                ctx.drawImage(trenecito.wagonBack, cornerX + 134 - frames, cornerY, 35, 70);
            }
            if((cornerX+150) - frames < cornerX + initialPosition && cornerX + 150 - frames > cornerX + finalPosition){
                ctx.drawImage(trenecito.wagonFront, cornerX + 150 - frames, cornerY, 35, 70);
            }
            if((cornerX+166) - frames < cornerX + initialPosition && cornerX + 166 - frames > cornerX + finalPosition){
                ctx.drawImage(trenecito.wagonBack, cornerX + 166 - frames, cornerY, 35, 70);
            }
            if((cornerX+182) - frames < cornerX + initialPosition && cornerX + 182 - frames > cornerX + finalPosition){
                ctx.drawImage(trenecito.front, cornerX + 182 - frames, cornerY, 35, 70);
            }
        }
    } else if (richtung === 1){
        if (direction === 0){
            initialPosition = initialPosition - 34;
            
            if((cornerY - 144) + frames < cornerY + finalPosition && (cornerY - 144) + frames > cornerY + initialPosition){
                ctx.drawImage(trenecito.trainBack,cornerX, cornerY - 144 + frames, 70, 35);
            }
            if((cornerY - 128) + frames < cornerY + finalPosition && (cornerY - 128) + frames > cornerY + initialPosition){
                ctx.drawImage(trenecito.wagonFront,cornerX, cornerY - 128 + frames, 70, 35);
            }
            if((cornerY - 112) + frames < cornerY + finalPosition && (cornerY - 112) + frames > cornerY + initialPosition){
                ctx.drawImage(trenecito.wagonBack,cornerX,cornerY - 112 + frames, 70, 35);
            }
            if((cornerY - 96) + frames < cornerY + finalPosition && (cornerY - 96) + frames > cornerY + initialPosition){
                ctx.drawImage(trenecito.wagonFront,cornerX,cornerY - 96 + frames, 70, 35);
            }
            if((cornerY - 80) + frames < cornerY + finalPosition && (cornerY - 80) + frames > cornerY + initialPosition){
                ctx.drawImage(trenecito.wagonBack,cornerX,cornerY - 80 + frames, 70, 35);
            }
            if((cornerY - 64) + frames < cornerY + finalPosition && cornerY - 64 + frames > cornerY + initialPosition){
                ctx.drawImage(trenecito.wagonFront,cornerX,cornerY - 64 + frames, 70, 35);
            }
            if((cornerY - 48) + frames < cornerY + finalPosition && cornerY - 48 + frames > cornerY + initialPosition){
                ctx.drawImage(trenecito.wagonBack,cornerX, cornerY - 48 + frames, 70, 35);
            }
            if(cornerY - 32 + frames < cornerY + finalPosition && cornerY - 32 + frames > cornerY + initialPosition){
                ctx.drawImage(trenecito.front,cornerX, cornerY - 32 + frames, 70, 35);
            }
        }
        if (direction === 1){
            finalPosition -= 35;
            initialPosition -= 20;
            if((cornerY + 54) - frames > cornerY + finalPosition && (cornerY + 54) - frames < (cornerY + initialPosition)){
                ctx.drawImage(trenecito.trainBack,cornerX,(cornerY + 54) - frames, 70, 35);
            }
            if((cornerY + 70) - frames > cornerY + finalPosition && (cornerY + 70) - frames < (cornerY + initialPosition)){
                ctx.drawImage(trenecito.wagonFront,cornerX,(cornerY + 70) - frames, 70, 35);
            }
            if((cornerY + 86) - frames > cornerY + finalPosition && (cornerY + 86) - frames < (cornerY + initialPosition)){
                ctx.drawImage(trenecito.wagonBack,cornerX,(cornerY + 86) - frames, 70, 35);
            }
            if((cornerY + 102) - frames > cornerY + finalPosition && (cornerY + 102) - frames < (cornerY + initialPosition)){
                ctx.drawImage(trenecito.wagonFront,cornerX,(cornerY + 102) - frames, 70, 35);
            }
            if((cornerY + 118) - frames > cornerY + finalPosition && (cornerY + 118) - frames < (cornerY + initialPosition)){
                ctx.drawImage(trenecito.wagonBack,cornerX,(cornerY + 118) - frames, 70, 35);
            }
            if((cornerY + 134) - frames > cornerY + finalPosition && (cornerY + 134) - frames < (cornerY + initialPosition)){
                ctx.drawImage(trenecito.wagonFront,cornerX,(cornerY + 134) - frames, 70, 35);
            }
            if((cornerY + 150) - frames > cornerY + finalPosition && (cornerY + 150) - frames < (cornerY + initialPosition)){
                ctx.drawImage(trenecito.wagonBack,cornerX,(cornerY + 150) - frames, 70, 35);
            }
            if((cornerY + 166) - frames > cornerY + finalPosition && (cornerY + 166) - frames < (cornerY + initialPosition)){
                ctx.drawImage(trenecito.front,cornerX,(cornerY + 166) - frames, 70, 35);
            }
        }
    }
}
