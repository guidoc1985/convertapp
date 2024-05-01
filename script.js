function convertirKilometros(){
    let kilometros = document.getElementById("kilometros").value;
    let mensaje = document.getElementById("mensaje")

    let resultado = kilometros / 1.609;

    mensaje.textContent= ("El resultado es " + resultado  + " millas");
}

function convertirMillas(){
    let millas = document.getElementById("millas").value;
    let mensaje2 = document.getElementById("mensaje2")

    let resultado2 = millas * 1.609;

    mensaje2.textContent= ("El resultado es " + resultado2  + " KM");
}

function convertirMetros(){
    let kilometros = document.getElementById("kilometros").value;
    let mensaje = document.getElementById("mensaje")

    let resultado = kilometros * 3.281;

    mensaje.textContent= ("El resultado es " + resultado  + " pies");
}

function convertirPies(){
    let kilometros = document.getElementById("kilometros").value;
    let mensaje = document.getElementById("mensaje2")

    let resultado = kilometros / 3.281;

    mensaje.textContent= ("El resultado es " + resultado  + " metros");
}


function convertirCelcius(){
    let kilometros = document.getElementById("kilometros").value;
    let mensaje = document.getElementById("mensaje")

    let resultado = kilometros * (kilometros *9/5) + 32

    mensaje.textContent= ("El resultado es " + resultado + " grados Farenheit");
}


function convertirFarenheit(){
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    let celsius = (fahrenheit - 32) * 5/9;
    let mensaje2 = document.getElementById("mensaje2");
    mensaje2.textContent = "El resultado es " + celsius.toFixed(2) + " grados Celsius";
}


function calcular() {
    var unidad = document.getElementById("unidad").value;
    var cantidad = parseFloat(document.getElementById("cantidad").value);
    var resultado = document.getElementById("resultado");

    if (unidad === "km") {
        var millas = cantidad * 0.621371;
        resultado.textContent = cantidad + " kilómetros son " + millas + " millas.";
    } else if (unidad === "mi") {
        var kilometros = cantidad / 0.621371;
        resultado.textContent = cantidad + " millas son " + kilometros + " kilómetros.";
    } else {
        resultado.textContent = "Por favor, selecciona una unidad.";
    }
}

function calcularMetros(){
let unidad = document.getElementById("unidad").value;
let cantidad = parseFloat(document.getElementById("cantidad").value);
let resultado = document.getElementById("resultado");

if (unidad === "mt"){
    let metros = cantidad * 3.281;
    resultado.textContent = cantidad + " pies son  " + metros + " metros"
}else if ( unidad === "ft"){
    let pies = cantidad / 3.281
    resultado.textContent = cantidad + " metros son  " + pies + " pies"
}else{
    resultado.textContent = "Por favor, selecciona una unidad.";
}



}


function calcularTemp(){
    let unidad = document.getElementById("unidad").value;
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let resultado = document.getElementById("resultado");
    
    if (unidad === "cel"){
        let celsius = (cantidad *9/5) + 32
        resultado.textContent = cantidad + " celsius son  " + celsius + " fahrenheit"
    }else if ( unidad === "ft"){
        let fahrenheit =  (cantidad - 32) * 5/9;
        resultado.textContent = cantidad + " Fahrenheit son  " + fahrenheit + " celsius"
    }else{
        resultado.textContent = "Por favor, selecciona una unidad.";
    }
    
    
    
    }

    function calcularKilos(){
        let unidad = document.getElementById("unidad").value;
        let cantidad = parseFloat(document.getElementById("cantidad").value);
        let resultado = document.getElementById("resultado");
        
        if (unidad === "kg"){
            let kilos = cantidad * 2.205; 
            resultado.textContent = cantidad + " Kilograms son  " + kilos + " libras"
        }else if ( unidad === "pd"){
            let libras =  cantidad / 2.205;
            resultado.textContent = cantidad + " Libras  " + libras + " Kilos"
        }else{
            resultado.textContent = "Por favor, selecciona una unidad.";
        }
        
        
        
        }


        function calcularLitros(){
            let unidad = document.getElementById("unidad").value;
            let cantidad = parseFloat(document.getElementById("cantidad").value);
            let resultado = document.getElementById("resultado");
            
            if (unidad === "lt"){
                let litros = cantidad /3.785; 
                resultado.textContent = cantidad + " litros son  " + litros + " galones"
            }else if ( unidad === "gl"){
                let galon =  cantidad * 3.785;
                resultado.textContent = cantidad + " Galones  " + galon + " litros"
            }else{
                resultado.textContent = "Por favor, selecciona una unidad.";
            }
            
            
            
            }