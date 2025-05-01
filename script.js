window.onload = function() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    // variaveis

    snake = [] 
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20; 
    tam = 3;

    // chamando a funçao jogo a cada 100miliseg
    setInterval(jogo, 100)

    // fazendo os controles

    document.addEventListener("keydown", function(e){
        switch(e.keyCode){
            // seta direita = 39
            case 39:
                velX  = 1;
                velY = 0
                break;
            //seta esquerda = 37 
            case 37:
                velX = -1
                velY = 0
                break;
            // seta cima = 38
            case 38:
                velX = 0;
                velY = -1;
                break;
            //seta baixo = 40
            case 40:
                velX = 0;
                velY = 1;
                break;

        }
    })
}

// funçao jogo

function jogo() {
    // config da tela
    ctx.fillStyle = "#7309fa";

    //distancia borda h. distancia borda v, largura, altura
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    //deslocamento cobra

    positionX += velX;
    positionY += velY

    //espelhamento

    if(positionX < 0){
        positionX = grid;
    }
    if(positionX > grid){
        positionX = 0
    }
    if(positionY < 0) {
        positionY = grid
    }
    if(positionY > grid){
        positionY = 0
    }


    // config cobra
    ctx.fillStyle = "#7efa09";
    for(let i= 0;i < snake.length; i++) {
        ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid -1, grid -1);
        if(snake[i].x == positionX && snake[i].y == positionY) {
            tam = 3;
        }
    }

    // posicionando a cobra

    snake.push({x:positionX, y:positionY})


    //apagando

    while(snake.length > tam) {
        snake.shift();
    }

    //configurando a comida

    ctx.fillStyle = "yellow";
    ctx.fillRect(foodX * grid, foodY * grid, grid-1, grid-1);

    // comendo a comida

    if(positionX == foodX && positionY == foodY) {
        tam++;
        foodX = Math.floor(Math.random()*grid);
        foodY = Math.floor(Math.random()*grid);
    }
   
}