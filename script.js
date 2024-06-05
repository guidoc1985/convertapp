
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.bmi').classList.remove('hidden');
    }, 500); // Retraso de 500ms
});

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
}


else if ( unidad === "mic" && unidad2 === "mt"){
    let mic = cantidad / 1e-6
    resultado.textContent = cantidad + " micrómetro  son  " + mic + " Metros"
}else if ( unidad === "mic" && unidad2 === "ft"){
    let mic = cantidad / 304800
    resultado.textContent = cantidad + " micrómetro  son  " + mic + " Pies"
}else if ( unidad === "mic" && unidad2 === "km"){
    let mic = cantidad / 1000000000
    resultado.textContent = cantidad + " micrómetro  son  " + mic + " Kilómetros"
}else if ( unidad === "mic" && unidad2 === "cm"){
    let mic = cantidad / 10000
    resultado.textContent = cantidad + " micrómetro  son  " + mic + " Centímetros"
}else if ( unidad === "mic" && unidad2 === "mm"){
    let mic = cantidad / 1000
    resultado.textContent = cantidad + " micrómetro  son  " + mic + " Milímetros"
}else if ( unidad === "mic" && unidad2 === "nan"){
    let mic = cantidad * 1000
    resultado.textContent = cantidad + " micrómetro  son  " + mic + " Nanómetros"
}else if ( unidad === "mic" && unidad2 === "mil"){
    let mic = cantidad / 1609344497.8926
    resultado.textContent = cantidad + " micrómetro  son  " + mic + " Millas"
}else if ( unidad === "mic" && unidad2 === "yr"){
    let mic = cantidad / 914400
    resultado.textContent = cantidad + " micrómetro  son  " + mic + " Yardas"
}else if ( unidad === "mic" && unidad2 === "pul"){
    let mic = cantidad / 25400
    resultado.textContent = cantidad + " micrómetro  son  " + mic + " Pulgadas"
}


else if ( unidad === "nan" && unidad2 === "mt"){
    let nan = cantidad / 1e+9
 resultado.textContent = cantidad + " Nanómetros  son  " + nan + " Metros"
}else if ( unidad === "nan" && unidad2 === "km"){
    let nan = cantidad / 1e+12
resultado.textContent = cantidad + " Nanómetros  son  " + nan + " Kilómetros"
}else if ( unidad === "nan" && unidad2 === "ft"){
    let nan = cantidad /  3.048e+8
resultado.textContent = cantidad + " Nanómetros  son  " + nan + " Pies"
}else if ( unidad === "nan" && unidad2 === "cm"){
    let nan = cantidad / 1e+7
 resultado.textContent = cantidad + " Nanómetros  son  " + nan + " Centímetros"
}else if ( unidad === "nan" && unidad2 === "mm"){
    let nan = cantidad / 1e+6
 resultado.textContent = cantidad + " Nanómetros  son  " + nan + " Milímetros"
}else if ( unidad === "nan" && unidad2 === "mic"){
    let nan = cantidad / 1000
 resultado.textContent = cantidad + " Nanómetros  son  " + nan + " Micrómetros"
}else if ( unidad === "nan" && unidad2 === "mil"){
    let nan = cantidad / 1.609e+12
 resultado.textContent = cantidad + " Nanómetros  son  " + nan + " Millas"
}else if ( unidad === "nan" && unidad2 === "yr"){
    let nan = cantidad / 9.144e+8
resultado.textContent = cantidad + " Nanómetros  son  " + nan + " Yardas"
}else if ( unidad === "nan" && unidad2 === "pul"){
    let nan = cantidad / 2.54e+7
resultado.textContent = cantidad + " Nanómetros  son  " + nan + " Pulgadas"
}else if ( unidad === "nan" && unidad2 === "miln"){
    let nan = cantidad / 1.852e+12
 resultado.textContent = cantidad + " Nanómetros  son  " + nan + " Millas Náuticas"
}

else if ( unidad === "mil" && unidad2 === "mt"){
    let mil = cantidad * 1609
 resultado.textContent = cantidad + " Millas  son  " + mil + " Metros"
}else if ( unidad === "mil" && unidad2 === "ft"){
    let mil = cantidad * 5280
 resultado.textContent = cantidad + " Millas  son  " + mil + " Pies"
}else if ( unidad === "mil" && unidad2 === "km"){
    let mil = cantidad * 1.609
 resultado.textContent = cantidad + " Millas  son  " + mil + " Kilómetros"
}else if ( unidad === "mil" && unidad2 === "cm"){
    let mil = cantidad * 160900
 resultado.textContent = cantidad + " Millas  son  " + mil + " Centímetros"
}else if ( unidad === "mil" && unidad2 === "mm"){
    let mil = cantidad * 1.609e+6
 resultado.textContent = cantidad + " Millas  son  " + mil + " Milimetros"
}else if ( unidad === "mil" && unidad2 === "mic"){
    let mil = cantidad *  1.609e+9
 resultado.textContent = cantidad + " Millas  son  " + mil + " Micrómetros"
}else if ( unidad === "mil" && unidad2 === "nan"){
    let mil = cantidad * 1.609e+12
 resultado.textContent = cantidad + " Millas  son  " + mil + " Nanómetros"
}else if ( unidad === "mil" && unidad2 === "yr"){
    let mil = cantidad * 1760
 resultado.textContent = cantidad + " Millas  son  " + mil + " Yardas"
}else if ( unidad === "mil" && unidad2 === "pul"){
    let mil = cantidad *  63360
 resultado.textContent = cantidad + " Millas  son  " + mil + " Pulgadass"
}else if ( unidad === "mil" && unidad2 === "miln"){
    let mil = cantidad /1.151
 resultado.textContent = cantidad + " Millas  son  " + mil + " Millas Náuticas"
}


else if ( unidad === "yr" && unidad2 === "mt"){
    let yr = cantidad /1.094
 resultado.textContent = cantidad + " Yardas  son  " + yr + " Metros"
}else if ( unidad === "yr" && unidad2 === "ft"){
    let yr = cantidad *3
 resultado.textContent = cantidad + " Yardas  son  " + yr + " Pies"
}else if ( unidad === "yr" && unidad2 === "km"){
    let yr = cantidad /1094
 resultado.textContent = cantidad + " Yardas  son  " + yr + " Kilómetros"
}else if ( unidad === "yr" && unidad2 === "cm"){
    let yr = cantidad * 91.44
 resultado.textContent = cantidad + " Yardas  son  " + yr + " Centímetros"
}else if ( unidad === "yr" && unidad2 === "mm"){
    let yr = cantidad *914.4
 resultado.textContent = cantidad + " Yardas  son  " + yr + " Milímetros"
}else if ( unidad === "yr" && unidad2 === "mic"){
    let yr = cantidad * 914400
 resultado.textContent = cantidad + " Yardas  son  " + yr + " Micrómetros"
}else if ( unidad === "yr" && unidad2 === "nan"){
    let yr = cantidad *9.144e+8
 resultado.textContent = cantidad + " Yardas  son  " + yr + " Nanometros"
}else if ( unidad === "yr" && unidad2 === "mil"){
    let yr = cantidad / 1760
 resultado.textContent = cantidad + " Yardas  son  " + yr + " Millas"
}else if ( unidad === "yr" && unidad2 === "pul"){
    let yr = cantidad * 36
 resultado.textContent = cantidad + " Yardas  son  " + yr + " Pulgadas"
}else if ( unidad === "yr" && unidad2 === "miln"){
    let yr = cantidad / 2025
 resultado.textContent = cantidad + " Yardas  son  " + yr + " Millas Náuticas"
}



else if ( unidad === "pul" && unidad2 === "mt"){
    let pul = cantidad / 39.37
 resultado.textContent = cantidad + " Pulgadas  son  " + pul + " Metros"
}else if ( unidad === "pul" && unidad2 === "ft"){
    let pul = cantidad / 12
 resultado.textContent = cantidad + " Pulgadas  son  " + pul + " Pies"
}else if ( unidad === "pul" && unidad2 === "km"){
    let pul = cantidad / 39370
 resultado.textContent = cantidad + " Pulgadas  son  " + pul + " Kilómetros"
}else if ( unidad === "pul" && unidad2 === "cm"){
    let pul = cantidad *2.54
 resultado.textContent = cantidad + " Pulgadas  son  " + pul + " centímetros"
}else if ( unidad === "pul" && unidad2 === "mm"){
    let pul = cantidad * 25.4
 resultado.textContent = cantidad + " Pulgadas  son  " + pul + " milímetros"
}else if ( unidad === "pul" && unidad2 === "mic"){
    let pul = cantidad * 25400
 resultado.textContent = cantidad + " Pulgadas  son  " + pul + " Micrómetros"
}else if ( unidad === "pul" && unidad2 === "nan"){
    let pul = cantidad * 2.54e+7
 resultado.textContent = cantidad + " Pulgadas  son  " + pul + " Nanóetros"
}else if ( unidad === "pul" && unidad2 === "mil"){
    let pul = cantidad / 63360
 resultado.textContent = cantidad + " Pulgadas  son  " + pul + " Millas"
}else if ( unidad === "pul" && unidad2 === "yr"){
    let pul = cantidad / 36
 resultado.textContent = cantidad + " Pulgadas  son  " + pul + " Yardas"
}else if ( unidad === "pul" && unidad2 === "miln"){
    let pul = cantidad / 72910
 resultado.textContent = cantidad + " Pulgadas  son  " + pul + " Millas Náuticas"
}

else if ( unidad === "miln" && unidad2 === "mt"){
    let miln = cantidad *1852
 resultado.textContent = cantidad + " Millas Náuticas  son  " + miln + " Metros"
}else if ( unidad === "miln" && unidad2 === "ft"){
    let miln = cantidad *6076
 resultado.textContent = cantidad + " Millas Náuticas  son  " + miln + " Pies"
}else if ( unidad === "miln" && unidad2 === "km"){
    let miln = cantidad *1.852
 resultado.textContent = cantidad + " Millas Náuticas  son  " + miln + " kilómetros"
}else if ( unidad === "miln" && unidad2 === "cm"){
    let miln = cantidad *185200
 resultado.textContent = cantidad + " Millas Náuticas  son  " + miln + " Centímetros"
}else if ( unidad === "miln" && unidad2 === "mm"){
    let miln = cantidad *1.852e+6
 resultado.textContent = cantidad + " Millas Náuticas  son  " + miln + " Milimetros"
}else if ( unidad === "miln" && unidad2 === "mic"){
    let miln = cantidad *1.852e+9
 resultado.textContent = cantidad + " Millas Náuticas  son  " + miln + " Micrómetros"
}else if ( unidad === "miln" && unidad2 === "nan"){
    let miln = cantidad *1.852e+12
 resultado.textContent = cantidad + " Millas Náuticas  son  " + miln + " Nanómetros"
}else if ( unidad === "miln" && unidad2 === "mil"){
    let miln = cantidad *1.151
 resultado.textContent = cantidad + " Millas Náuticas  son  " + miln + " Millas"
}else if ( unidad === "miln" && unidad2 === "yr"){
    let miln = cantidad * 2025
 resultado.textContent = cantidad + " Millas Náuticas  son  " + miln + " Yardas"
}else if ( unidad === "miln" && unidad2 === "pul"){
    let miln = cantidad *72910
 resultado.textContent = cantidad + " Millas Náuticas  son  " + miln + " Pulgadas"
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
                let mensaje2 =document.getElementById("mensaje2")
              
                let mensaje = document.getElementById("mensaje")
                

               let resultado = kilos / Math.pow(altura,2);

                mensaje.textContent = (" your BMI is " + resultado);

                if ( resultado < 18.5){
                    mensaje2.textContent = ("Tu imc es bajo peso")

                } else if  (resultado >18.6 && resultado <= 24.9){
                        mensaje2.textContent = ("Tu imc es Normal")
                  } 
                  else if(resultado >= 25 && resultado <=29.9){
                    mensaje2.textContent = ("Tu imc es sobre peso")
                  }
                  else if (resultado >30){
                    mensaje2.textContent = ("Tu imc es obesidad")
                  }

                }


                const medidas ={
                    tn: "Toneladas",
                    gr: "gramos",
                    mg: "Miligramos",
                    micg: "microgramos",                        
                    tnl: "Toneladas largas"   ,
                    tnc: "Toneladas cortas",
                    st: "Stones",
                    lib: "Libras",
                    oz: "onzas",
                    kg: "Kilogramos"

                }

            function calcularPeso() {
                
                const conversiones = {
                    kg: {
                        tn: cantidad => cantidad /1000,
                        gr: cantidad => cantidad * 1000,
                        mg: cantidad => cantidad * 1e+6,
                        micg: cantidad => cantidad * 1e+9,                        
                        tnl: cantidad => cantidad / 1016   ,
                        tnc: cantidad => cantidad /907.2,
                        st: cantidad => cantidad / 6.35,
                        lib: cantidad => cantidad * 2.205,
                        oz: cantidad => cantidad * 35.274,
                        
                    },
                    tn: {
                        kg: cantidad => cantidad *1000,
                        gr: cantidad => cantidad * 1e+6    ,
                        mg: cantidad => cantidad * 1e+9  ,
                        micg: cantidad => cantidad * 1e+12,
                        tnl: cantidad => cantidad /1.016,
                        tnc: cantidad => cantidad / 1.102,
                        st: cantidad => cantidad *157.5,
                        lib: cantidad => cantidad * 2205,
                        oz: cantidad => cantidad *35270,
                    },
                    gr: {
                        kg: cantidad => cantidad /1000,
                        tn: cantidad => cantidad / 1e+6    ,
                        mg: cantidad => cantidad * 1000 ,
                        micg: cantidad => cantidad * 1e+6,                        
                        tnl: cantidad => cantidad /1.016e+6         ,
                        tnc: cantidad => cantidad / 907200,
                        st: cantidad => cantidad /6350,
                        lib: cantidad => cantidad /453.6,
                        oz: cantidad => cantidad /  28.35,
                    },
                    mg: {
                        kg: cantidad => cantidad /1e+6 ,
                        tn: cantidad => cantidad / 1e+9    ,
                        gr: cantidad => cantidad / 1000 ,
                        micg: cantidad => cantidad * 1000,                        
                        tnl: cantidad => cantidad /1.016e+9    ,
                        tnc: cantidad => cantidad /  9.072e+8,
                        st: cantidad => cantidad /6.35e+6,
                        lib: cantidad => cantidad /453600,
                        oz: cantidad => cantidad / 28350,
                    },

                    // aca me quedé
                    micg: {
                        kg: cantidad => cantidad /1e+9,
                        tn: cantidad => cantidad / 1e+12    ,
                        gr: cantidad => cantidad /1e+6 ,
                        mg: cantidad => cantidad / 1000,                        
                        tnl: cantidad => cantidad /1.016e+12        ,
                        tnc: cantidad => cantidad / 9.072e+11,
                        st: cantidad => cantidad /6.35e+9,
                        lib: cantidad => cantidad /4.536e+8,
                        oz: cantidad => cantidad /  2.835e+7,
                    },
                    tnl: {
                        kg: cantidad => cantidad *1016,
                        tn: cantidad => cantidad * 1.016    ,
                        gr: cantidad => cantidad * 1.016e+6 ,
                        mg: cantidad => cantidad * 1.016e+9,                        
                        micg: cantidad => cantidad *1.016e+12      ,
                        tnc: cantidad => cantidad * 1.12,
                        st: cantidad => cantidad *160,
                        lib: cantidad => cantidad *2240,
                        oz: cantidad => cantidad *  35840,
                    },
                    tnc: {
                        kg: cantidad => cantidad *907.2            ,
                        tn: cantidad => cantidad / 1.102    ,
                        gr: cantidad => cantidad * 907200 ,
                        mg: cantidad => cantidad * 9.072e+8,                        
                        micg: cantidad => cantidad *9.072e+11 ,
                        tnl: cantidad => cantidad / 1.12,
                        st: cantidad => cantidad *142.9,
                        lib: cantidad => cantidad *2000,
                        oz: cantidad => cantidad * 32000,
                    },
                    st: {
                        kg: cantidad => cantidad *6.35,
                        tn: cantidad => cantidad /157.5   ,
                        gr: cantidad => cantidad *6350 ,
                        mg: cantidad => cantidad * 6.35e+6,                        
                        micg: cantidad => cantidad *6.35e+9  ,
                        tnl: cantidad => cantidad / 160,
                        tnc: cantidad => cantidad /142.9,
                        lib: cantidad => cantidad *14,
                        oz: cantidad => cantidad *  224,
                    },
                    lib: {
                        kg: cantidad => cantidad /2.205,
                        tn: cantidad => cantidad / 2250    ,
                        gr: cantidad => cantidad * 453.6 ,
                        mg: cantidad => cantidad * 453600,                        
                        micg: cantidad => cantidad *4.536e+8         ,
                        tnl: cantidad => cantidad / 2240,
                        tnc: cantidad => cantidad /2000        ,
                        st: cantidad => cantidad /14,
                        oz: cantidad => cantidad * 16,
                    },
                    oz: {
                        kg: cantidad => cantidad /35.274,
                        tn: cantidad => cantidad / 35270   ,
                        gr: cantidad => cantidad * 28.35 ,
                        mg: cantidad => cantidad * 28350,                        
                        micg: cantidad => cantidad * 2.835e+7         ,
                        tnl: cantidad => cantidad / 35840,
                        tnc: cantidad => cantidad /32000,
                        st: cantidad => cantidad /224       ,
                        lib: cantidad => cantidad /  16,
                    },
                   
                   
                };
            
                let unidad = document.getElementById("unidad").value;
                let unidad2 = document.getElementById("unidad2").value;
                let cantidad = parseFloat(document.getElementById("cantidad").value);
                let resultado = document.getElementById("resultado");
            
                if (unidad in conversiones && unidad2 in conversiones[unidad]) {
                    
                    let resultadoConversion = conversiones[unidad][unidad2](cantidad);
                    resultado.textContent = `${cantidad} ${medidas[unidad]} son ${resultadoConversion} ${medidas[unidad2]}`;
                } else {
                    resultado.textContent = "Por favor, selecciona una unidad válida.";
                }
            }
            

            const nombresUnidades = {
                litro: "litros",
                galon: "galones",
                qtr: "cuartos",
                pt: "pintas",
                taza: "tazas",
                onza: "onzas",
                cucharada: "cucharadas",
                cucharadita: "cucharaditas",
                m3: "metros cúbicos",
                ml: "mililitros",
                gal: "galones imperiales",
                ctimperial: "cuartos imperiales",
                ptImperial: "pintas imperiales",
                tazaImperial: "tazas imperiales",
                ozLiquidaImperial: "onzas líquidas imperiales",
                cucharadaImperial: "cucharadas imperiales",
                cucharaditaImperial: "cucharaditas imperiales",
                pie3: "pies cúbicos",
                pulgada3: "pulgadas cúbicas",
            };

            function calcularLitro() {
                
                const conversiones = {
                    litro: {
                        galon: cantidad => cantidad /3.785,
                        qtr: cantidad => cantidad * 1.057  ,
                        pt: cantidad => cantidad * 2.113,
                        taza: cantidad => cantidad * 4.167,                        
                        onza: cantidad => cantidad *33.814,
                        cucharada: cantidad => cantidad *67.628,
                        cucharadita: cantidad => cantidad * 202.9,
                        m3: cantidad => cantidad / 1000,
                        ml: cantidad => cantidad * 1000,
                        gal: cantidad => cantidad / 4.546,
                        ctimperial: cantidad => cantidad / 1.136,
                        ptImperial: cantidad => cantidad * 1.76,
                        tazaImperial: cantidad => cantidad * 3.52,
                        ozLiquidaImperial: cantidad => cantidad * 35.195,
                        cucharadaImperial: cantidad => cantidad * 56.312,
                        cucharaditaImperial: cantidad => cantidad * 168.9 ,
                        pie3: cantidad => cantidad / 28.317 ,
                        pulgada3: cantidad => cantidad * 61.024,
                        
                    },
                     
                    galon: {
                        litro: cantidad => cantidad *3.785,
                        qtr: cantidad => cantidad * 4,
                        pt: cantidad => cantidad*8,
                        taza: cantidad => cantidad * 15.773,                        
                        onza: cantidad => cantidad * 128   ,
                        cucharada: cantidad => cantidad *256,
                        cucharadita: cantidad => cantidad *768,
                        m3: cantidad => cantidad /264.2,
                        ml: cantidad => cantidad * 3785,
                        gal: cantidad => cantidad / 1.201 ,
                        ctimperial: cantidad => cantidad * 3.331,
                        ptImperial: cantidad => cantidad * 6.661,
                        tazaImperial: cantidad => cantidad * 13.323,
                        ozLiquidaImperial: cantidad => cantidad * 133.2,
                        cucharadaImperial: cantidad => cantidad * 213.2,
                        cucharaditaImperial: cantidad => cantidad * 639.5,
                        pie3: cantidad => cantidad / 7.48,
                        pulgada3: cantidad => cantidad * 231,
                        
                    },

                    
                    qtr: {
                        litro: cantidad => cantidad /1.057,
                        galon: cantidad => cantidad /4,
                        pt: cantidad => cantidad * 2,
                        taza: cantidad => cantidad * 3.943,                        
                        onza: cantidad => cantidad *32   ,
                        cucharada: cantidad => cantidad *64,
                        cucharadita: cantidad => cantidad *192,
                        m3: cantidad => cantidad /1057 ,
                        ml: cantidad => cantidad * 946.4 ,
                        gal: cantidad => cantidad / 4.804,
                        ctimperial: cantidad => cantidad /1.201,
                        ptImperial: cantidad => cantidad * 1.665,
                        tazaImperial: cantidad => cantidad * 3.331,
                        ozLiquidaImperial: cantidad => cantidad * 33.307,
                        cucharadaImperial: cantidad => cantidad * 53.291,
                        cucharaditaImperial: cantidad => cantidad * 159.9,
                        pie3: cantidad => cantidad / 29.922,
                        pulgada3: cantidad => cantidad * 57.75,
                        
                    },
                    pt: {
                        litro: cantidad => cantidad /2.113,
                        galon: cantidad => cantidad /8,
                        qtr: cantidad => cantidad /2,
                        taza: cantidad => cantidad * 1.972,                        
                        onza: cantidad => cantidad *16  ,
                        cucharada: cantidad => cantidad *32,
                        cucharadita: cantidad => cantidad *96,
                        m3: cantidad => cantidad /2113,
                        ml: cantidad => cantidad * 473.2 ,
                        gal: cantidad => cantidad /9.608 ,
                        ctimperial: cantidad => cantidad / 2.402,
                        ptImperial: cantidad => cantidad /1.201,
                        tazaImperial: cantidad => cantidad * 1.665,
                        ozLiquidaImperial: cantidad => cantidad * 16.653,
                        cucharadaImperial: cantidad => cantidad * 26.646                        ,
                        cucharaditaImperial: cantidad => cantidad * 79.937,
                        pie3: cantidad => cantidad /59.844,
                        pulgada3: cantidad => cantidad * 28.875,
                        
                    },

                  
                    taza: {
                        litro: cantidad => cantidad / 4.167,
                        galon: cantidad => cantidad /15.772,
                        qtr: cantidad => cantidad /  3.943,
                        pt: cantidad => cantidad / 1.972 ,                       
                        onza: cantidad => cantidad * 8.115  ,
                        cucharada: cantidad => cantidad *16.231,
                        cucharadita: cantidad => cantidad * 48.692 ,
                        m3: cantidad => cantidad / 4167,
                        ml: cantidad => cantidad * 240,
                        gal: cantidad => cantidad / 18.942,
                        ctimperial: cantidad => cantidad / 4.736  ,
                        ptImperial: cantidad => cantidad / 2.368,
                        tazaImperial: cantidad => cantidad / 1.184,
                        ozLiquidaImperial: cantidad => cantidad * 8.447 ,
                        cucharadaImperial: cantidad => cantidad * 13.515,
                        cucharaditaImperial: cantidad => cantidad * 40.545,
                        pie3: cantidad => cantidad / 118,
                        pulgada3: cantidad => cantidad *  14.646 ,
                        
                    },

                    
                    onza: {
                        litro: cantidad => cantidad /33.814,
                        galon: cantidad => cantidad /128,
                        qtr: cantidad => cantidad /32,
                        pt: cantidad => cantidad /16,
                        taza: cantidad => cantidad / 8.115,                        
                        cucharada: cantidad => cantidad *2,
                        cucharadita: cantidad => cantidad *6,
                        m3: cantidad => cantidad /33810                        ,
                        ml: cantidad => cantidad * 29.574                        ,
                        gal: cantidad => cantidad /153.7,
                        ctimperial: cantidad => cantidad /38.43,
                        ptImperial: cantidad => cantidad /19.215,
                        tazaImperial: cantidad => cantidad /9.608,
                        ozLiquidaImperial: cantidad => cantidad * 1.041,
                        cucharadaImperial: cantidad => cantidad * 1.665,
                        cucharaditaImperial: cantidad => cantidad * 4.996,
                        pie3: cantidad => cantidad /957.5,
                        pulgada3: cantidad => cantidad * 1.805,
                        
                    },
                    
                    cucharada: {
                        litro: cantidad => cantidad /67.628,
                        galon: cantidad => cantidad /256,
                        qtr: cantidad => cantidad /64,
                        pt: cantidad => cantidad /32,
                        taza: cantidad => cantidad /16.231,                        
                        onza: cantidad => cantidad / 2   ,
                        cucharadita: cantidad => cantidad *3,
                        m3: cantidad => cantidad /67630,
                        ml: cantidad => cantidad * 14.787,
                        gal: cantidad => cantidad /307.4,
                        ctimperial: cantidad => cantidad /76.861,
                        ptImperial: cantidad => cantidad / 38.43,
                        tazaImperial: cantidad => cantidad /19.215,
                        ozLiquidaImperial: cantidad => cantidad /1.922,
                        cucharadaImperial: cantidad => cantidad /1.201,
                        cucharaditaImperial: cantidad => cantidad * 2.498,
                        pie3: cantidad => cantidad /1915,
                        pulgada3: cantidad => cantidad /1.108,
                        
                    },
                    
                    cucharadita: {
                        litro: cantidad => cantidad /202.9,
                        galon: cantidad => cantidad /768,
                        qtr: cantidad => cantidad /192,
                        pt: cantidad => cantidad /96,
                        taza: cantidad => cantidad /48.692,                        
                        onza: cantidad => cantidad / 6   ,
                        cucharada: cantidad => cantidad /3,
                        m3: cantidad => cantidad / 202900,
                        ml: cantidad => cantidad * 4.929,
                        gal: cantidad => cantidad /922.3,
                        ctimperial: cantidad => cantidad /230.6,
                        ptImperial: cantidad => cantidad /115.3,
                        tazaImperial: cantidad => cantidad /57.646,
                        ozLiquidaImperial: cantidad => cantidad /5.765,
                        cucharadaImperial: cantidad => cantidad /3.603,
                        cucharaditaImperial: cantidad => cantidad /1.201,
                        pie3: cantidad => cantidad /5745,
                        pulgada3: cantidad => cantidad /3.325,
                        
                    },
                    m3: {
                        litro: cantidad => cantidad *1000,
                        galon: cantidad => cantidad *264.2,
                        qtr: cantidad => cantidad * 1057,
                        pt: cantidad => cantidad * 2113,
                        taza: cantidad => cantidad * 4167,                        
                        onza: cantidad => cantidad * 33810  ,
                        cucharada: cantidad => cantidad * 67630,
                        cucharadita: cantidad => cantidad *2029,
                        ml: cantidad => cantidad * 1e+6,
                        gal: cantidad => cantidad * 220,
                        ctimperial: cantidad => cantidad * 880,
                        ptImperial: cantidad => cantidad * 1759.75,
                        tazaImperial: cantidad => cantidad *3520,
                        ozLiquidaImperial: cantidad => cantidad * 35200,
                        cucharadaImperial: cantidad => cantidad * 56310,
                        cucharaditaImperial: cantidad => cantidad * 168900,
                        pie3: cantidad => cantidad * 35.315 ,
                        pulgada3: cantidad => cantidad * 61020,
                        
                    },
                    
                    gal: {
                        litro: cantidad => cantidad * 4.546  ,
                        galon: cantidad => cantidad * 1.201  ,
                        qtr: cantidad => cantidad * 4.804,
                        pt: cantidad => cantidad * 9.608,
                        taza: cantidad => cantidad * 18.942,                        
                        onza: cantidad => cantidad * 153.7  ,
                        cucharada: cantidad => cantidad * 307.443,
                        cucharadita: cantidad => cantidad *922.3,
                        m3: cantidad => cantidad /220,
                        ml: cantidad => cantidad * 4546,
                        ctimperial: cantidad => cantidad * 4,
                        ptImperial: cantidad => cantidad * 8,
                        tazaImperial: cantidad => cantidad * 16,
                        ozLiquidaImperial: cantidad => cantidad * 16,
                        cucharadaImperial: cantidad => cantidad * 256,
                        cucharaditaImperial: cantidad => cantidad * 768,
                        pie3: cantidad => cantidad /6.229,
                        pulgada3: cantidad => cantidad * 277.4,
                        
                    },
                    
                    ctimperial: {
                        litro: cantidad => cantidad * 1.137 ,
                        galon: cantidad => cantidad /3.331                        ,
                        qtr: cantidad => cantidad * 1.201,
                        pt: cantidad => cantidad * 2.402,
                        taza: cantidad => cantidad * 4.736,                        
                        onza: cantidad => cantidad *38.43  ,
                        cucharada: cantidad => cantidad *76.861,
                        cucharadita: cantidad => cantidad *230.6,
                        m3: cantidad => cantidad / 879.9,
                        ml: cantidad => cantidad * 1137,
                        gal: cantidad => cantidad /4,
                        ctimperial: cantidad => cantidad * 35.274,
                        ptImperial: cantidad => cantidad * 2,
                        tazaImperial: cantidad => cantidad * 4,
                        ozLiquidaImperial: cantidad => cantidad * 40,
                        cucharadaImperial: cantidad => cantidad * 64,
                        cucharaditaImperial: cantidad => cantidad * 192,
                        pie3: cantidad => cantidad /24.915,
                        pulgada3: cantidad => cantidad * 69.355,
                        
                    },

                    
                    ptimperial: {
                        litro: cantidad => cantidad /1.76                        ,
                        galon: cantidad => cantidad /6.661,
                        qtr: cantidad => cantidad /1.665,
                        pt: cantidad => cantidad * 1.201,
                        taza: cantidad => cantidad * 2.368,                        
                        onza: cantidad => cantidad *19.215   ,
                        cucharada: cantidad => cantidad *38.43,
                        cucharadita: cantidad => cantidad *115.3,
                        m3: cantidad => cantidad /1760,
                        ml: cantidad => cantidad * 568.3,
                        gal: cantidad => cantidad /8,
                        ctimperial: cantidad => cantidad /2,
                    
                        tazaImperial: cantidad => cantidad * 2,
                        ozLiquidaImperial: cantidad => cantidad * 20,
                        cucharadaImperial: cantidad => cantidad * 32,
                        cucharaditaImperial: cantidad => cantidad * 96,
                        pie3: cantidad => cantidad /49.831,
                        pulgada3: cantidad => cantidad * 34.677,
                        
                    },
                    
                    tazaImperial: {
                        litro: cantidad => cantidad /3.52,
                        galon: cantidad => cantidad /13.323,
                        qtr: cantidad => cantidad /3.331,
                        pt: cantidad => cantidad /1.665,
                        taza: cantidad => cantidad * 1.184,                        
                        onza: cantidad => cantidad * 9.608   ,
                        cucharada: cantidad => cantidad *19.215,
                        cucharadita: cantidad => cantidad * 57.646,
                        m3: cantidad => cantidad / 3520,
                        ml: cantidad => cantidad * 284.1,
                        gal: cantidad => cantidad /16,
                        ctimperial: cantidad => cantidad / 4,
                        ptImperial: cantidad => cantidad /2,
                    
                        ozLiquidaImperial: cantidad => cantidad * 10,
                        cucharadaImperial: cantidad => cantidad * 16,
                        cucharaditaImperial: cantidad => cantidad * 48,
                        pie3: cantidad => cantidad /99.661,
                        pulgada3: cantidad => cantidad * 17.339,
                        
                    },
                    
                    ozLiquidaImperial: {
                        litro: cantidad => cantidad /35.195,
                        galon: cantidad => cantidad /133.2,
                        qtr: cantidad => cantidad /33.307,
                        pt: cantidad => cantidad /16.654,
                        taza: cantidad => cantidad /8.447,                        
                        onza: cantidad => cantidad / 1.041   ,
                        cucharada: cantidad => cantidad *1.922,
                        cucharadita: cantidad => cantidad *5.765,
                        m3: cantidad => cantidad /35200,
                        ml: cantidad => cantidad *28.413,
                        gal: cantidad => cantidad /160,
                        ctimperial: cantidad => cantidad /40,
                        ptImperial: cantidad => cantidad /20,
                        tazaImperial: cantidad => cantidad /10,
                        
                        cucharadaImperial: cantidad => cantidad * 1.6,
                        cucharaditaImperial: cantidad => cantidad * 4.8,
                        pie3: cantidad => cantidad /996.6,
                        pulgada3: cantidad => cantidad * 1.734,
                        
                    },
                    
                    cucharadaImperial: {
                        litro: cantidad => cantidad /56.312,
                        galon: cantidad => cantidad /213.2,
                        qtr: cantidad => cantidad /53.291,
                        pt: cantidad => cantidad /26.646,
                        taza: cantidad => cantidad /13.515,                        
                        onza: cantidad => cantidad / 1.665   ,
                        cucharada: cantidad => cantidad *1.201,
                        cucharadita: cantidad => cantidad *3.603,
                        m3: cantidad => cantidad /56310,
                        ml: cantidad => cantidad *17.758,
                        gal: cantidad => cantidad /256,
                        ctimperial: cantidad => cantidad /64,
                        ptImperial: cantidad => cantidad /32,
                        tazaImperial: cantidad => cantidad /16,
                        ozLiquidaImperial: cantidad => cantidad /1.6,
                        
                        cucharaditaImperial: cantidad => cantidad * 3,
                        pie3: cantidad => cantidad /1595,
                        pulgada3: cantidad => cantidad * 1.084,
                        
                    },
                    
                    cucharaditaImperial: {
                        litro: cantidad => cantidad /168.9,
                        galon: cantidad => cantidad /639.5,
                        qtr: cantidad => cantidad / 159.9  ,
                        pt: cantidad => cantidad /79.937,
                        taza: cantidad => cantidad /40.545,                        
                        onza: cantidad => cantidad / 4.996   ,
                        cucharada: cantidad => cantidad /2.498,
                        cucharadita: cantidad => cantidad *1.201,
                        m3: cantidad => cantidad /168900,
                        ml: cantidad => cantidad * 5.919,
                        gal: cantidad => cantidad /768,
                        ctimperial: cantidad => cantidad /192,
                        ptImperial: cantidad => cantidad  /96,
                        tazaImperial: cantidad => cantidad /48,
                        ozLiquidaImperial: cantidad => cantidad /4.8,
                        cucharadaImperial: cantidad => cantidad /3,
                        
                        pie3: cantidad => cantidad /4784,
                        pulgada3: cantidad => cantidad /2.768,
                        
                    },
                  
                    pie3: {
                        litro: cantidad => cantidad *28.317,
                        galon: cantidad => cantidad *7.48,
                        qtr: cantidad => cantidad * 29.922,
                        pt: cantidad => cantidad * 59.844,
                        taza: cantidad => cantidad * 118,                        
                        onza: cantidad => cantidad *957.506   ,
                        cucharada: cantidad => cantidad *1915,
                        cucharadita: cantidad => cantidad *5745,
                        m3: cantidad => cantidad /35.315,
                        ml: cantidad => cantidad * 28320,
                        gal: cantidad => cantidad * 6.229,
                        ctimperial: cantidad => cantidad * 24.915,
                        ptImperial: cantidad => cantidad * 49.831,
                        tazaImperial: cantidad => cantidad * 99.661,
                        ozLiquidaImperial: cantidad => cantidad * 996.6,
                        cucharadaImperial: cantidad => cantidad * 1595,
                        cucharaditaImperial: cantidad => cantidad * 4784,
                        
                        pulgada3: cantidad => cantidad * 1728,
                        
                    },
                      
                    pulgada3: {
                        litro: cantidad => cantidad /61.024,
                        galon: cantidad => cantidad /231,
                        qtr: cantidad => cantidad /57.75,
                        pt: cantidad => cantidad /28.875,
                        taza: cantidad => cantidad /14.646,                        
                        onza: cantidad => cantidad / 1.805   ,
                        cucharada: cantidad => cantidad *1.108,
                        cucharadita: cantidad => cantidad *3.325,
                        m3: cantidad => cantidad /61020,
                        ml: cantidad => cantidad * 16.387,
                        gal: cantidad => cantidad /277.4,
                        ctimperial: cantidad => cantidad /69.355,
                        ptImperial: cantidad => cantidad /34.677,
                        tazaImperial: cantidad => cantidad /17.339,
                        ozLiquidaImperial: cantidad => cantidad /1.734,
                        cucharadaImperial: cantidad => cantidad /1.084,
                        cucharaditaImperial: cantidad => cantidad * 2.768,
                        pie3: cantidad => cantidad /1728,
                        
                        
                    },
         
                   
                };
            
                let unidad = document.getElementById("unidad").value;
                let unidad2 = document.getElementById("unidad2").value;
                let cantidad = parseFloat(document.getElementById("cantidad").value);
                let resultado = document.getElementById("resultado");
            
                if (unidad in conversiones && unidad2 in conversiones[unidad]) {
                    
                    let resultadoConversion = conversiones[unidad][unidad2](cantidad);
                    resultado.textContent = `${cantidad} ${nombresUnidades[unidad]} son ${resultadoConversion} ${nombresUnidades[unidad2]}`;
                } else {
                    resultado.textContent = "Por favor, selecciona una unidad válida.";
                }
            }
            