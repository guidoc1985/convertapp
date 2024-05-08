


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
let unidad2 = document.getElementById("unidad2").value;
let cantidad = parseFloat(document.getElementById("cantidad").value);
let resultado = document.getElementById("resultado");

if (unidad === "mt" && unidad2 === "ft"){
    let metros = cantidad * 3.281;
    resultado.textContent = cantidad + " metros son  " + metros + " pies"
}else if ( unidad === "ft" && unidad2 === "mt"){
    let pies = cantidad / 3.281
    resultado.textContent = cantidad + " pies son  " + pies + " metros"
}else if ( unidad === "km" && unidad2 === "ft"){
    let km = cantidad * 3281
    resultado.textContent = cantidad + " km son  " + km + " pies"
}else if ( unidad === "ft" && unidad2 === "km"){
    let ft = cantidad / 3281
    resultado.textContent = cantidad + " pies son  " + ft + " kms"
}
else if ( unidad === "mt" && unidad2 === "cm"){
    let mt = cantidad * 100
    resultado.textContent = cantidad + " metros son  " + mt + " centimetros"
}else if ( unidad === "cm" && unidad2 === "mt"){
    let cm = cantidad /100
    resultado.textContent = cantidad + " centimetros son  " + cm + " metros"
}
else if ( unidad === "mt" && unidad2 === "km"){
    let mt = cantidad / 1000
    resultado.textContent = cantidad + " metros son  " + mt + " kilometros"
}else if ( unidad === "km" && unidad2 === "mt"){
    let km = cantidad *1000
    resultado.textContent = cantidad + " kilometros son  " + km + " metros"
}else if ( unidad === "mt" && unidad2 === "mm"){
    let mt = cantidad * 1000
    resultado.textContent = cantidad + " metros son  " + mt + " milimetros"
}else if ( unidad === "mt" && unidad2 === "mic"){
    let mt = cantidad * 1e+6
    resultado.textContent = cantidad + " metros son  " + mt + " micrometros"
}else if ( unidad === "mt" && unidad2 === "nan"){
    let mt = cantidad * 1e+9
    resultado.textContent = cantidad + " metros son  " + mt + " nanometros"
}else if ( unidad === "mt" && unidad2 === "mil"){
    let mt = cantidad / 1609
    resultado.textContent = cantidad + " metros son  " + mt + " millas"
}else if ( unidad === "mt" && unidad2 === "yr"){
    let mt = cantidad * 1.094
    resultado.textContent = cantidad + " metros son  " + mt + " Yardas"
}else if ( unidad === "mt" && unidad2 === "pul"){
    let mt = cantidad * 39.37
    resultado.textContent = cantidad + " metros son  " + mt + " Pulgadas"
}else if ( unidad === "mt" && unidad2 === "miln"){
    let mt = cantidad / 1852
    mt = mt.toFixed(8)
    resultado.textContent = cantidad + " metros son  " + mt + " Millas Náuticas"
}

else if ( unidad === "ft" && unidad2 === "cm"){
    let ft = cantidad * 30.48
    resultado.textContent = cantidad + " pies son  " + ft + " centímetros"
}else if ( unidad === "ft" && unidad2 === "mm"){
    let ft = cantidad * 304.8
    resultado.textContent = cantidad + " pies son  " + ft + " milimetros"
}else if ( unidad === "ft" && unidad2 === "mic"){
    let ft = cantidad * 304800
    resultado.textContent = cantidad + " pies son  " + ft + " micrómetros"
}else if ( unidad === "ft" && unidad2 === "nan"){
    let ft = cantidad *3.048e+8
    resultado.textContent = cantidad + " pies son  " + ft + " nanómetros"
}else if ( unidad === "ft" && unidad2 === "mil"){
    let ft = cantidad / 5280
    resultado.textContent = cantidad + " pies son  " + ft + " Millas"
}else if ( unidad === "ft" && unidad2 === "yr"){
    let ft = cantidad / 3
    resultado.textContent = cantidad + " pies son  " + ft + " Yardas"
}else if ( unidad === "ft" && unidad2 === "pul"){
    let ft = cantidad *12
    resultado.textContent = cantidad + " pies son  " + ft + " Pulgadas"
}else if ( unidad === "ft" && unidad2 === "miln"){
    let ft = cantidad / 6076
    resultado.textContent = cantidad + " pies son  " + ft + " Millas Náuticas"
}

else if ( unidad === "km" && unidad2 === "cm"){
    let km = cantidad * 100000
    resultado.textContent = cantidad + " kilómetros son  " + km + " centímetros"
}else if ( unidad === "km" && unidad2 === "mm"){
    let km = cantidad * 1e+6
    resultado.textContent = cantidad + " kilómetros son  " + km + " Milímetros"
}else if ( unidad === "km" && unidad2 === "mm"){
    let km = cantidad * 1e+6
    resultado.textContent = cantidad + " kilómetros son  " + km + " Milímetros"
}else if ( unidad === "km" && unidad2 === "mic"){
    let km = cantidad * 1e+9
    resultado.textContent = cantidad + " kilómetros son  " + km + " Micómetros"
}else if ( unidad === "km" && unidad2 === "mm"){
    let km = cantidad * 1e+6
    resultado.textContent = cantidad + " kilómetros son  " + km + " Milímetros"
}else if ( unidad === "km" && unidad2 === "nan"){
    let km = cantidad * 1e+12
    resultado.textContent = cantidad + " kilómetros son  " + km + " Nanómetros"
}else if ( unidad === "km" && unidad2 === "mil"){
    let km = cantidad /1.609
    resultado.textContent = cantidad + " kilómetros son  " + km + " Millas"
}else if ( unidad === "km" && unidad2 === "yr"){
    let km = cantidad * 1094
    resultado.textContent = cantidad + " kilómetros son  " + km + " Yardas"
}else if ( unidad === "km" && unidad2 === "pul"){
    let km = cantidad * 39370
    resultado.textContent = cantidad + " kilómetros son  " + km + " Pulgada"
}else if ( unidad === "km" && unidad2 === "miln"){
    let km = cantidad / 1.852
    resultado.textContent = cantidad + " kilómetros son  " + km + " Millas Náuticas"
}

else if ( unidad === "cm" && unidad2 === "ft"){
    let cm = cantidad / 30.48
    resultado.textContent = cantidad + " centímetros son  " + cm + " pies"
}else if ( unidad === "cm" && unidad2 === "km"){
    let cm = cantidad / 100000
    resultado.textContent = cantidad + " centímetros son  " + cm + " Kilometros"
}else if ( unidad === "cm" && unidad2 === "mm"){
    let cm = cantidad *10
    resultado.textContent = cantidad + " centímetros son  " + cm + " Milímetros"
}else if ( unidad === "cm" && unidad2 === "mic"){
    let cm = cantidad *10000
    resultado.textContent = cantidad + " centímetros son  " + cm + " Micrómetros"
}else if ( unidad === "cm" && unidad2 === "nan"){
    let cm = cantidad * 1e+7
    resultado.textContent = cantidad + " centímetros son  " + cm + " Nanómetros"
}else if ( unidad === "cm" && unidad2 === "mil"){
    let cm = cantidad / 160900
    resultado.textContent = cantidad + " centímetros son  " + cm + " Millas"
}else if ( unidad === "cm" && unidad2 === "yr"){
    let cm = cantidad / 91.44
    resultado.textContent = cantidad + " centímetros son  " + cm + " Yardas"
}else if ( unidad === "cm" && unidad2 === "pul"){
    let cm = cantidad / 2.54
    resultado.textContent = cantidad + " centímetros son  " + cm + " Pulgadas"
}else if ( unidad === "cm" && unidad2 === "miln"){
    let cm = cantidad / 185200
    resultado.textContent = cantidad + " centímetros son  " + cm + " Millas Náuticas"
}


else if ( unidad === "mm" && unidad2 === "mt"){
    let mm = cantidad / 1000
    resultado.textContent = cantidad + " milímetros  son  " + mm + " Metros"
}else if ( unidad === "mm" && unidad2 === "ft"){
    let mm = cantidad / 304.8
    resultado.textContent = cantidad + " milímetros  son  " + mm + " Pies"
}else if ( unidad === "mm" && unidad2 === "km"){
    let mm = cantidad / 1e-6
    resultado.textContent = cantidad + " milímetros  son  " + mm + " Kilómetros"
}else if ( unidad === "mm" && unidad2 === "cm"){
    let mm = cantidad / 10
    resultado.textContent = cantidad + " milímetros  son  " + mm + " Centímetros"
}
else if ( unidad === "mm" && unidad2 === "mic"){
    let mm = cantidad * 1000
    resultado.textContent = cantidad + " milímetros  son  " + mm + " Micrómetros"
}else if ( unidad === "mm" && unidad2 === "nan"){
    let mm = cantidad * 1e+6
    resultado.textContent = cantidad + " milímetros  son  " + mm + " Nanómetros"
}else if ( unidad === "mm" && unidad2 === "mil"){
    let mm = cantidad / 1612903.2258065
    resultado.textContent = cantidad + " milímetros  son  " + mm + " Millas"
}else if ( unidad === "mm" && unidad2 === "yr"){
    let mm = cantidad / 914.4
    resultado.textContent = cantidad + " milímetros  son  " + mm + " Yardas"
}else if ( unidad === "mm" && unidad2 === "pul"){
    let mm = cantidad / 25.4
    resultado.textContent = cantidad + " milímetros  son  " + mm + " Pulgadas"
}else if ( unidad === "mm" && unidad2 === "miln"){
    let mm = cantidad / 1851999.3258722
    resultado.textContent = cantidad + " milímetros  son  " + mm + " Metros"
}else if ( unidad === "mm" && unidad2 === "mt"){
    let mm = cantidad / 1000
    resultado.textContent = cantidad + " milímetros  son  " + mm + " Metros"
}


else{
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

            function calcularBmi(){
                let kilos = parseFloat(document.getElementById("kilos").value)
                let altura = parseFloat(document.getElementById("altura").value)
              
                let mensaje = document.getElementById("mensaje")

               let resultado = kilos / Math.pow(altura,2);

                mensaje.textContent = (" your BMI is " + resultado)



            }