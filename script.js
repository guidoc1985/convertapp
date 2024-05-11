


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
                    resultado.textContent = `${cantidad} ${unidad} son ${resultadoConversion} ${unidad2}`;
                } else {
                    resultado.textContent = "Por favor, selecciona una unidad válida.";
                }
            }
            