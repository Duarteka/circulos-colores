window.addEventListener('load', function(){
    var circulo = document.querySelectorAll(".circulo");
    
        function cambiaColor(evento){
            evento.preventDefault()
            for (var i = 0; i < circulo.length; i++) {
                circulo[i].style.background = colorRandom();
                movimiento();
              };


            //circulo[i].style.backgroundColor = `rgb(${color.join(",")})`;
        }
        //console.log(circulo)
        function colorRandom() {
            var colores = ["#1abd9d", "#2ecc71", "#3498db", "#9b59b6", "#19b496", "#27ae60", "#2980b9", "#8e44ad", "#f1c40f", "#e67e22", "#e74c3c", "#f39c12", "#d35400", "#c0392b"];
            return colores[Math.floor(Math.random() * colores.length)];
          }
          function movimiento(){
              setTimeout(()=>{
                  colorRandom()
              },100)

            
          }

   document.addEventListener("click", cambiaColor);



});