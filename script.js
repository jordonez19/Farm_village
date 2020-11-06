var farm = document.getElementById("the_Farm");
var paper = farm.getContext("2d");


var backGroundCanvas = {
    url: "img/farm.png",
    cargaOk: false
};
backGroundCanvas.imagen = new Image();
backGroundCanvas.imagen.src = farm.url;
backGroundCanvas.imagen.addEventListener("load", drawingMap);

//-------------------------------------
var cow = {
    url: "img/cow.png",
    cargaOk: false
};

cow.imagen  = new Image();
cow.imagen.src =  cow.url;
cow.imagen.addEventListener("load", drawingCows);



function drawingMap()
{
backGroundCanvas.cargaOk = true;
    draw();
}

function drawingCows()
{
    cow.cargaOk = true;
    draw();

}

function draw()
{
    if(backGroundCanvas.cargaOk == true)
    {
        paper.draw(ImagebackGroundCanvas.imagen, 0 , 0)
    }
}







function random(min, max)
{
    result = Math.floor(Math.random() * (max-min+1))+ min;
    return result;
}



//-------------------------------------
/* 
var chicken = {
    url: "/img/chicken.png",
    cargaOk: false
};

var.objeto = new Image();
chicken.objeto.src = "/img/chicken.png" ;
chicken.objeto.addEventListener("load", drawChicken);
 */
//-------------------------------------

/* 
var pork = {
    url: "/img/pork.png",
    cargaOk: false
};

var.objeto = new Image();
pork.objeto.src =  "/img/pork.png";
pork.objeto.addEventListener("load", drawPork);
 */
//-------------------------------------


/* 
function drawChicken()
{
    paper.drawImage(chicken, 200, 300);
}

function drawPork()
{
    paper.drawImage(pork, 340, 0);
}

 */








/* var result;


for(i=0; i < 10 ; i++ ){

    result=random(0.5,5.0);
    document.write(result+"<br>" );

}



 */