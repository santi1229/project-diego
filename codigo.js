const buttons = document.querySelectorAll('.btn-style');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  });
});

function mostrarBoton(nBoton){
  //Boton
  let calcular=document.getElementById("Calcular"+nBoton);
  calcular.style.display="block";
}

function cargaPuntual(){
  labelsInputs(1,'Digite el valor de la carga puntual (kN):', 'Digite el valor de la profundidad (m):', 'Digite el valor de r (m):');   
}
function franjaCarga(){
  labelsInputs(2,'Digite el valor de la carga distribuida (kPa):', 'Digite el valor de la profundidad (m):', 'Digite el valor de la base (m):', 'Digite la distancia entre la carga y el punto (m)');
}
function franjaCargaTriangular(){
  labelsInputs(3,'Digite el valor de la carga distribuida (kPa):', 'Digite el valor de la profundidad (m):', 'Digite el valor de L (m):', 'Digite el valor de x (m):', 'Digite el valor de b (m):');
}
function cargaRectangular(){
  labelsInputs(4,'Digite el valor de la carga puntual (kN):', 'Digite el valor de la profundidad (m):', 'Digite el valor de la base (m):', 'Digite el valor de la altura (m):');
}
function cargaCircular(){
  labelsInputs(5,'Digite el valor de la carga puntual (kN):', 'Digite el valor de la profundidad (m):', 'Digite r (m):');
}
function franjaTerraplen(){
  labelsInputs(6,'Digite el valor de la carga distribuida (kPa):', 'Digite el valor de la base rectangular (m):', 'Digite el valor de la base triangular (m):','Digite el valor de la produndidad (m):');
  let lbl=document.getElementById("lbl6");
  lbl.style.display="block";
  lbl.innerHTML="Nota: Para este tipo de carga suponemos que el punto está en la mitad del terraplen.";
}

function labelsInputs(boton,...values){
  ocultarTodo();
  //console.log(values.length);
  for(let i=1; i<=values.length; i++){
      document.getElementById("lbl"+i).innerHTML=values[i-1];
      document.getElementById("lbl"+i).style.display="block";
      document.getElementById("t"+i).style.display="block";
  }
  mostrarBoton(boton);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mostrarRespuesta(respuesta){
  let lblr=document.getElementById("lblr");
  lblr.style.display="block";

  let txt=document.getElementById("respuesta");
  txt.style.display="block"
  txt.value=respuesta;
}
function calculoCargaPuntual(){
  let q=parseFloat(document.getElementById("t1").value);
  let z=parseFloat(document.getElementById("t2").value);
  let r=parseFloat(document.getElementById("t3").value);
  let p1=(q/z**2);
  let p2=3/parseFloat(2*Math.PI);
  let p3=(((r/z)**2)+1)**(5/2);
  p3=parseFloat(1/p3);
  esfuerzo=p1*(p2*p3);
  mostrarRespuesta(esfuerzo);
}
function calculoFranjaCarga(){
  let q=parseFloat(document.getElementById("t1").value);
  let z=parseFloat(document.getElementById("t2").value);
  let B=parseFloat(document.getElementById("t3").value);
  let x=parseFloat(document.getElementById("t4").value);
  let anguloTotal = Math.atan((B+x)/z);
  let anguloDeltaRadianes = Math.atan(x/z);
  let anguloAlphaRadianes = anguloTotal-anguloDeltaRadianes;
  let esfuerzo=(q/Math.PI) * (anguloAlphaRadianes + Math.sin(anguloAlphaRadianes * Math.cos(anguloAlphaRadianes + 2*anguloDeltaRadianes)));
  mostrarRespuesta(esfuerzo);
}
function calculoFranjaCargaTriangular(){
  let q=parseFloat(document.getElementById("t1").value);
  let z=parseFloat(document.getElementById("t2").value);
  let L=parseFloat(document.getElementById("t3").value);
  let x=parseFloat(document.getElementById("t4").value);
  let b=parseFloat(document.getElementById("t5").value);
  let anguloTotal = Math.atan(x/z);
  let anguloBeta = Math.atan((x-L)/z);  
  let anguloAlpha = anguloTotal-anguloBeta;

  let esfuerzo=(q/(2*Math.PI))*((anguloAlpha*x/b)-Math.sin(2*anguloBeta));
  mostrarRespuesta(esfuerzo);
}
function calculoCargaRectangular(){
  let q=parseFloat(document.getElementById("t1").value);
  let z=parseFloat(document.getElementById("t2").value);
  let B=parseFloat(document.getElementById("t3").value);
  let L=parseFloat(document.getElementById("t4").value);
  let area =B*L;
  let qDis=q/area;
  let m=B/z;
  let n=L/z;
  let t1=(2*m*n*Math.sqrt(m**2+n**2+1))/(m**2+n**2+(m**2)*(n**2)+1);
  let t2=(m**2+n**2+2)/(m**2+n**2+1);
  let t3;
  if((m**2+n**2+1)<((m**2)*(n**2))){
    t3=Math.PI+Math.atan((2*m*n*Math.sqrt(m**2+n**2+1))/(m**2+n**2-(m**2)*(n**2)+1));
  }
  else{
    t3=Math.atan((2*m*n*Math.sqrt(m**2+n**2+1))/(m**2+n**2-(m**2)*(n**2)+1));
  }
  let I=1/(4*Math.PI)*(t1*t2+t3)
  let esfuerzo=qDis*I;
  mostrarRespuesta(esfuerzo);
}
function calculoCargaCircular(){
  let q=parseFloat(document.getElementById("t1").value);
  let z=parseFloat(document.getElementById("t2").value);
  let r=parseFloat(document.getElementById("t3").value);
  let area=(r**2)*Math.PI;
  let qKp=q/area;
  let esfuerzo=qKp*(1-(1/(1+(r/z)**2)**(3/2)));
  mostrarRespuesta(esfuerzo);
}
function calculoFranjaTerraplen(){
  let q=parseFloat(document.getElementById("t1").value);
  let R=parseFloat(document.getElementById("t2").value);
  let T=parseFloat(document.getElementById("t3").value);
  let z=parseFloat(document.getElementById("t4").value);
  let alpha2=Math.atan(R/z);
  let anguloTotal=Math.atan((R+T)/z);
  let alpha1=anguloTotal-alpha2;
  let esfuerzo=(q/Math.PI*(((R+T)/T)*(alpha1+alpha2)-((R/T)*alpha2)))*2;
  mostrarRespuesta(esfuerzo);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ocultarTodo(){
  for(let i=1; i<=6; i++){
    document.getElementById("lbl"+i).style.display="none";
  }
  for(let i=1; i<=5; i++){
    document.getElementById("t"+i).style.display="none";
    document.getElementById("t"+i).value="";
  }
  for(let i=1; i<=6; i++){
    document.getElementById("Calcular"+i).style.display="none";
  }
  document.getElementById("lblr").style.display="none";
  document.getElementById("respuesta").style.display="none";
}


