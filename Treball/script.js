    let datosFigura1 = document.querySelector('#datos1');
    let datosFigura2 = document.querySelector('#datos2');
    let datosFigura3 = document.querySelector('#datos3');
    



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

    function dibujar(x, y) {

      context.beginPath();
      context.moveTo(x + 200, y + 100);
      context.lineTo(x + 170, y + 150);
      context.lineTo(x + 230, y + 150);
      context.closePath();

      context.lineWidth = 5;
      context.strokeStyle = "rgba(0,0,0,1)";
      context.stroke();

      context.fillStyle = "rgba(251, 38, 38, 1)";
      context.fill();
    }

    function animar() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      dibujar(deltaX, deltaY);

      requestAnimationFrame(animar);
    }
    animar();
  
