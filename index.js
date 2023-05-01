const buttons = document.querySelectorAll('.btn-style');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  });
});

function calculoCargaPuntual(){
    let q=document.getElementById("t1").value;
    let z=document.getElementById("t2").value;
    let r=document.getElementById("t3").value;
    let p1=parseFloat((q/z**2));
    let p2=parseFloat(3/parseFloat(2*Math.PI));
    let p3=parseFloat( (((r/z)**2)+1)**(5/2) );
    p3=parseFloat(1/p3);
    esfuerzo=p1*(p2*p3);
    //console.log(esfuerzo);
    mostrarRespuesta(esfuerzo);
}
function mostrarRespuesta(respuesta){
    let lblr=document.getElementById("lblr");
    lblr.style.display="block";

    let txt=document.getElementById("respuesta");
    txt.style.display="block"
    txt.value=respuesta;
}

function cargaPuntual(){
    // Parametro 1
    let label1=document.getElementById("lbl1");
    label1.style.display="block";
    label1.innerHTML="Digite el valor de la carga (kN): ";

    let input1=document.getElementById("t1")
    input1.style.display="block"

    // Parametro 2
    let label2=document.getElementById("lbl2");
    label2.style.display="block";
    label2.innerHTML="Digite el valor de la profundidad (m): ";

    let input2=document.getElementById("t2");
    input2.style.display="block";

    // Parametro 3
    let label3=document.getElementById("lbl3");
    label3.style.display="block";
    label3.innerHTML="Digite el valor de r (m): ";

    let input3=document.getElementById("t3");
    input3.style.display="block";

    //Boton
    let calcular=document.getElementById("Calcular1");
    calcular.style.display="block";
   
    /*
    despues de recibir los datos y hacer la operacion, ocultar todo
    Se puede ocultar la respuesta apenas se le da al boton para que no quede la respuesta anterior 

    Limpiar los datos del texfield cada vez que se llama
    
    Como saber cual carga selecciono
    */
}

function ocultarTodo(){
    
}
