let context = null;
let desplazamiento = 0;
let elementoClicado = null;
let x_antes, y_antes; // Inicializadas con elemento clicado
let elementos = [
    {
        colour: '#05aeaff',
        width: 100,
        height: 100,
        top: 20,
        left: 15
    },
    {
        colour: '#05ef32',
        width: 100,
        height: 100,
        top: 50,
        left: 125
    },{
        colour: '#f5efff',
        width: 100,
        height: 100,
        top: 150,
        left: 185
    }
];


function moverRaton(event){
    if(elementoClicado == null) return;
    let infoPos = canvas.getBoundingClientRect();

    x_click = event.clientX - infoPos.left;
    y_click = event.clientY - infoPos.top;
    desplazamientoX = x_click - x_antes;
    desplazamientoY = y_click - y_antes;
    elementoClicado.top = elementoClicado.top + desplazamientoY;
    elementoClicado.left = elementoClicado.left + desplazamientoX;

    x_antes = x_click;
    y_antes = y_click;
    window.requestAnimationFrame(dibujar)
}
function soltarBotonRaton(){
    elementoClicado = null;
}

function pulsarBotonRaton(event){
    let x_click;
    let y_click;

    x_click = event.clientX;
    y_click = event.clientY;

    let infoPos = canvas.getBoundingClientRect();

    x_click = event.clientX - infoPos.left;
    y_click = event.clientY - infoPos.top;
    x_antes = x_click;
    y_antes = y_click;

    elementoClicado = null;

    elementos.forEach(function dentro(element){
        
        x_final = element.left + element.width;
        y_final = element.top + element.height;
    
        if((x_click > element.left) && (x_click < x_final) && (y_click > element.top) && (y_click < x_final)){
            elementoClicado = element;
        }
    })

   //elementoClicado tiene el elemento al que se le ha hecho clic, o bien tiene el valor null si no se ha acertado en un rectángulo

   

}







function initialize(){
    let boton = document.getElementById('boton');
    boton.addEventListener('click', dibujar);
    canvas = document.getElementById('tutorial');

    /* canvas.addEventListener('click', clickRaton); */

    /*    canvas.addEventListener('click', function(event){
        let infopos = canvas.getBoundingClientRect();
        let xpos = event.clientX - infopos.left;
        let ypos = event.clientY - infopos.top;
        window.alert('Click en x: ' +xpos+ ' y en y: ' +ypos);
    }); */

    canvas.addEventListener('mousedown', pulsarBotonRaton);
    canvas.addEventListener('mousemove', moverRaton );
    canvas.addEventListener('mosueup', soltarBotonRaton);

    if(canvas.getContext)
        context = canvas.getContext('2d');
    dibujar();
}



function dibujar(){
    console.log('boton pulsado');
    canvas = document.getElementById('tutorial');
    let infopos = canvas.getBoundingClientRect();
        let anchura = infopos.width;
        let altura = infopos.height;
        

    if(context != null /* && desplazamiento < 100 */){  
        context.clearRect(0,0,anchura,altura);
        elementos.forEach(function(element){
            context.fillStyle = element.colour;
            context.fillRect(element.left, element.top, element.width,element.height);
            
        })
      
      /*ANIMACION*/
        /* let infopos = canvas.getBoundingClientRect();
        let anchura = infopos.width;
        let altura = infopos.height;
        context.clearRect(0,0,anchura,altura);
        let estilo = 'rgb(200,'+desplazamiento*20+',0)';      
        context.fillStyle = estilo;
        context.fillRect(10+ desplazamiento ,30,10,40);
        desplazamiento++;
        window.requestAnimationFrame(dibujar); */
    }
}

document.addEventListener('DOMContentLoaded', initialize);