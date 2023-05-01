var label1=document.getElementById("lbl1");
var label2=document.getElementById("lbl2");
var label3=document.getElementById("lbl3");
var label4=document.getElementById("lbl4");
var label5=document.getElementById("lbl5");
var label6=document.getElementById("lbl6");
var label7=document.getElementById("lbl7");

function mostrarBoton(){
    //Boton
    let calcular=document.getElementById("Calcular1");
    calcular.style.display="block";
}

function cargaPuntual(){
    labelsInputs('Digite el valor de la carga (kN):', 'Digite el valor de la profundidad (m):', 'Digite el valor de r (m):');   
}
function franjaCarga(){
    labelsInputs('Digite:', 'Digite:', 'Digite:');
}
function franjaCargaTriangular(){
    labelsInputs('Digite:', 'Digite:', 'Digite:');
}
function cargaRectangular(){
    labelsInputs('Digite:', 'Digite:', 'Digite:');
}
function cargaCircular(){
    labelsInputs('Digite:', 'Digite:', 'Digite:');
}
function franjaTerraplen(){
    labelsInputs('Digite:', 'Digite:', 'Digite:');
}

function labelsInputs(...values){
    ocultarTodo();
    //console.log(values.length);
    for(let i=1; i<=values.length; i++){
        document.getElementById("lbl"+i).innerHTML=values[i-1];
        document.getElementById("lbl"+i).style.display="block";
        document.getElementById("t"+i).style.display="block";
    }    
    mostrarBoton();
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
function calculoFranjaCarga(){
    temporal();
}
function calculoFranjaCargaTriangular(){
    temporal();
}
function calculoCargaRectangular(){
    temporal();
}
function calculoCargaCircular(){
    temporal();
}
function calculoFranjaTerraplen(){
    temporal();
}
function temporal(){
    let q=document.getElementById("t1").value;
    let z=document.getElementById("t2").value;
    let r=document.getElementById("t3").value;
    let p1=parseFloat((q/z**2));
    let p2=parseFloat(3/parseFloat(2*Math.PI));
    let p3=parseFloat( (((r/z)**2)+1)**(5/2) );
    p3=parseFloat(1/p3);
    
    esfuerzo=p1*(p2*p3);
    mostrarRespuesta(esfuerzo);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ocultarTodo(){
    for(let i=1; i<=7; i++){
        document.getElementById("lbl"+i).style.display="none";
    }
    for(let i=1; i<=7; i++){
        document.getElementById("t"+i).style.display="none";
        document.getElementById("t"+i).value="";
    }
        document.getElementById("lblr").style.display="none";
    document.getElementById("respuesta").style.display="none";
}

