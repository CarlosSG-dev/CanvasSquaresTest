    let canvas = document.querySelector("#proyectoCanvas");
    let context = canvas.getContext("2d");

    let deltaX = 0;
    let deltaY = 0;

    window.addEventListener("keydown", teclaPulsada, false);
    window.addEventListener("keyup", teclaSoltada, false);

    let tecla = [];

    function teclaPulsada(e) {

        tecla[e.keyCode] = true;

        if (tecla[37]) {
          deltaX -= 5;
        }

        if (tecla[39]) {
          deltaX += 5;
        }

        if (tecla[38]) {
          deltaY -= 5;
        }

        if (tecla[40]) {
          deltaY += 5;
        }
		
		e.preventDefault();
    }

    function teclaSoltada(e) {
        tecla[e.keyCode] = false;
    }

    function dibujarTriangulo(x, y) {
      
      context.beginPath();
      context.moveTo(x + 200, y + 100);
      context.lineTo(x + 170, y + 150);
      context.lineTo(x + 230, y + 150);
      context.closePath();
      context.lineWidth = 5;


      if(document.getElementById('seleccionarColor').value=='4'){
        context.strokeStyle = "rgba(0,0,0,1)";
        context.stroke();
        context.fillStyle = "rgba(0, 0, 0, 1)";
        context.fill();
      }else if(document.getElementById('seleccionarColor').value=='3'){
        context.strokeStyle = "rgba(0,0,0,1)";
        context.stroke();
        context.fillStyle = "rgba(251, 38, 38, 1)";
        context.fill();
      }
    }

      function dibujarRectangulo(x,y){
      context.beginPath();
      context.moveTo(x+25, y+25);
      context.rect(x+10,y+10,50,50);
      context.lineWidth = 5;

      if(document.getElementById('seleccionarColor').value=='4'){
        context.strokeStyle = "rgba(0,0,0,1)";
        context.stroke();
        context.fillStyle = "rgba(0, 0, 0, 1)";
        context.fill();
      }else if(document.getElementById('seleccionarColor').value=='3'){
        context.strokeStyle = "rgba(0,0,0,1)";
        context.stroke();
        context.fillStyle = "rgba(251, 38, 38, 1)";
        context.fill();
      }
     



    }  
    

    function animar() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      if(document.getElementById('inlineFormCustomSelect').value=='1'){
        dibujarTriangulo(deltaX, deltaY);
        console.log('Has seleccionado el triangulo')

      }else if(document.getElementById('inlineFormCustomSelect').value=='2'){
        console.log('Has seleccionado el rectangulo')
        dibujarRectangulo(deltaX,deltaY);
        
        
      }
      requestAnimationFrame(animar);
      
    }
    animar();
  
