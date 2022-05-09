function verifica(Numero) {
    var num = Numero
    if (num == 0) {
        var ADDRESSBUS = (Campo1.value + Campo2.value + Campo3.value + Campo4.value + Campo5.value +
            Campo6.value + Campo7.value + Campo9.value + Campo10.value + Campo11.value).toUpperCase();
        if (ADDRESSBUS == 'ADDRESSBUS') {
            Campo1.disabled = true;
            Campo2.disabled = true;
            Campo3.disabled = true;
            Campo4.disabled = true;
            Campo5.disabled = true;
            Campo6.disabled = true;
            Campo7.disabled = true;
            Campo9.disabled = true;
            Campo10.disabled = true;
            Campo11.disabled = true;

            Campo1.style = "border: solid #fa9905;"
            Campo2.style = "border: solid #fa9905;"
            Campo3.style = "border: solid #fa9905;"
            Campo4.style = "border: solid #fa9905;"
            Campo5.style = "border: solid #fa9905;"
            Campo6.style = "border: solid #fa9905;"
            Campo7.style = "border: solid #fa9905;"
            Campo9.style = "border: solid #fa9905;"
            Campo10.style = "border: solid #fa9905;"
            Campo11.style = "border: solid #fa9905;"


            let c1 = document.getElementById('Campo1')
            if (c1 === document.activeElement) {
                if (Campo1.value.match(interval)) {
                    document.getElementById("Campo2").focus()
                }
            }
    
            let c2 = document.getElementById('Campo2')
            if (c2 === document.activeElement) {
                if (Campo2.value.match(interval)) {
                    document.getElementById("Campo3").focus()
                }
            }
    
            let c3 = document.getElementById('Campo3')
            if (c3 === document.activeElement) {
                if (Campo3.value.match(interval)) {
                    document.getElementById("Campo4").focus()
                }
            }
            
            
            let c4 = document.getElementById('Campo4')
            if (c4 === document.activeElement) {
                if (Campo4.value.match(interval)) {
                    document.getElementById("Campo5").focus()
                }
            }

            let c5 = document.getElementById('Campo5')
            if (c5 === document.activeElement) {
                if (Campo5.value.match(interval)) {
                    document.getElementById("Campo6").focus()
                }
            }

            let c6 = document.getElementById('Campo6')
            if (c6 === document.activeElement) {
                if (Campo6.value.match(interval)) {
                    document.getElementById("Campo7").focus()
                }
            }

            let c7 = document.getElementById('Campo7')
            if (c7 === document.activeElement) {
                if (Campo7.value.match(interval)) {
                    document.getElementById("Campo9").focus()
                }
            }

            let c9 = document.getElementById('Campo9')
            if (c9 === document.activeElement) {
                if (Campo9.value.match(interval)) {
                    document.getElementById("Campo10").focus()
                }
            }

            let c10 = document.getElementById('Campo10')
            if (c10 === document.activeElement) {
                if (Campo10.value.match(interval)) {
                    document.getElementById("Campo11;U").focus()
                }
            }

        /* var CPU = (Campo43.value + Campo44.value + Campo21.value).toUpperCase();
        if (CPU == 'CPU') {
            Campo43.disabled = true;
            Campo44.disabled = true;
            Campo21.disabled = true;
            Campo43.style = 'border: solid #fa9905;';
            Campo44.style = 'border: solid #fa9905;';
            Campo21.style = 'border: solid #fa9905;';
            P1.style = 'color: #9acd32';
        }
         */
    }
    else if (num == 1) {
        var REGISTRADORES = (Campo4.value + Campo15.value + Campo17.value + Campo19.value + Campo22.value +
            Campo25.value + Campo29.value + Campo35.value + Campo38.value +
            Campo44.value + Campo49.value + Campo59.value + Campo66.value).toUpperCase();
        if (REGISTRADORES == 'REGISTRADORES') {
            Campo4.disabled = true;
            Campo15.disabled = true;
            Campo17.disabled = true;
            Campo19.disabled = true;
            Campo22.disabled = true;            
            Campo25.disabled = true;
            Campo29.disabled = true;
            Campo35.disabled = true;
            Campo38.disabled = true;
            Campo44.disabled = true;
            Campo49.disabled = true;
            Campo59.disabled = true;
            Campo66.disabled = true;
            Campo4.style = 'border: solid #fa9905;';
            Campo15.style = 'border: solid #fa9905;';
            Campo17.style = 'border: solid #fa9905;';
            Campo19.style = 'border: solid #fa9905;';
            Campo22.style = 'border: solid #fa9905;';
            Campo25.style = 'border: solid #fa9905;';
            Campo29.style = 'border: solid #fa9905;';
            Campo35.style = 'border: solid #fa9905;';
            Campo38.style = 'border: solid #fa9905;';
            Campo44.style = 'border: solid #fa9905;';
            Campo49.style = 'border: solid #fa9905;';
            Campo59.style = 'border: solid #fa9905;';
            Campo66.style = 'border: solid #fa9905;';
            
        }
        /* var ULA = (Campo53.value + Campo59.value + Campo60.value).toUpperCase();
        if (ULA == 'ULA') {
            Campo53.disabled = true;
            Campo59.disabled = true;
            Campo60.disabled = true;
            Campo53.style = 'border: solid #fa9905;';
            Campo59.style = 'border: solid #fa9905;';
            Campo6  0.style = 'border: solid #fa9905;';
            P1.style = 'color: #9acd32';
        } */
    }
    else if (num == 2) {
        
    }
    else if (num == 3) {
        var RAM = (Campo40.value + Campo49.value + Campo50.value).toUpperCase();
        if (RAM == 'RAM') {
            Campo40.disabled = true;
            Campo49.disabled = true;
            Campo50.disabled = true;
            Campo40.style = 'border: solid #fa9905;';
            Campo49.style = 'border: solid #fa9905;';
            Campo50.style = 'border: solid #fa9905;';
            P4.style = 'color: #9acd32';
        }
    }
    else if (num == 4) {
        var ROM = (CampoAUX.value + CampoAUX2.value + Campo50.value).toUpperCase();
        if (ROM == 'ROM') {
            CampoAUX.disabled = true;
            CampoAUX2.disabled = true;
            Campo50.disabled = true;

            CampoAUX.style = 'border: solid #fa9905;';
            CampoAUX2.style = 'border: solid #fa9905;';
            Campo50.style = 'border: solid #fa9905;';

            P5.style = 'color: #9acd32';
        }
    }
    else if (num == 5) {
        var EPROM = (Campo38.value + Campo39.value + Campo40.value + Campo41.value + Campo42.value).toUpperCase();
        if (EPROM == 'EPROM') {
            Campo38.disabled = true;
            Campo39.disabled = true;
            Campo40.disabled = true;
            Campo41.disabled = true;
            Campo42.disabled = true;
            Campo38.style = 'border: solid #fa9905;';
            Campo39.style = 'border: solid #fa9905;';
            Campo40.style = 'border: solid #fa9905;';
            Campo41.style = 'border: solid #fa9905;';
            Campo42.style = 'border: solid #fa9905;';
            P6.style = 'color: #9acd32';
        }
    }

    else if (num == 6) {
        var FLASH = (Campo45.value + Campo46.value + Campo47.value + Campo22.value + Campo48.value).toUpperCase();
        if (FLASH == 'FLASH') {
            Campo45.disabled = true;
            Campo46.disabled = true;
            Campo47.disabled = true;
            Campo22.disabled = true;
            Campo48.disabled = true;
            Campo45.style = 'border: solid #fa9905;';
            Campo46.style = 'border: solid #fa9905;';
            Campo47.style = 'border: solid #fa9905;';
            Campo22.style = 'border: solid #fa9905;';
            Campo48.style = 'border: solid #fa9905;';
            P7.style = 'color: #9acd32';
        }
    }

    else if (num == 7) {
        var MEMORIADEMASSA = (Campo1.value + Campo2.value + Campo3.value + Campo4.value +
            Campo5.value + Campo6.value + Campo7.value + Campo8.value + Campo9.value + Campo10.value +
            Campo11.value + Campo12.value + Campo13.value + Campo14.value).toUpperCase();
        if (MEMORIADEMASSA == 'MEMORIADEMASSA') {
            Campo1.disabled = true;
            Campo2.disabled = true;
            Campo3.disabled = true;
            Campo4.disabled = true;
            Campo5.disabled = true;
            Campo6.disabled = true;
            Campo7.disabled = true;
            Campo8.disabled = true;
            Campo9.disabled = true;
            Campo10.disabled = true;
            Campo11.disabled = true;
            Campo12.disabled = true;
            Campo13.disabled = true;
            Campo14.disabled = true;

            Campo1.style = "border: solid #fa9905;"
            Campo2.style = "border: solid #fa9905;"
            Campo3.style = "border: solid #fa9905;"
            Campo4.style = "border: solid #fa9905;"
            Campo5.style = "border: solid #fa9905;"
            Campo6.style = "border: solid #fa9905;"
            Campo7.style = "border: solid #fa9905;"
            Campo8.style = "border: solid #fa9905;"
            Campo9.style = "border: solid #fa9905;"
            Campo10.style = "border: solid #fa9905;"
            Campo11.style = "border: solid #fa9905;"
            Campo12.style = "border: solid #fa9905;"
            Campo13.style = "border: solid #fa9905;"
            Campo14.style = "border: solid #fa9905;"
            P8.style = 'color: #9acd32';
        }
    }
    else if (num == 8) {
        var DMA = (Campo61.value + Campo42.value + Campo62.value).toUpperCase();
        if (DMA == 'DMA') {
            Campo61.disabled = true;
            Campo42.disabled = true;
            Campo62.disabled = true;
            Campo61.style = 'border: solid #fa9905;';
            Campo42.style = 'border: solid #fa9905;';
            Campo62.style = 'border: solid #fa9905;';
            P9.style = 'color: #9acd32';
        }
    }
    else if (num == 9) {
        var CS = (Campo26.value + Campo30.value).toUpperCase();
        if (CS == 'CS') {
            Campo26.disabled = true;
            Campo30.disabled = true;
            Campo26.style = 'border: solid #fa9905;';
            Campo30.style = 'border: solid #fa9905;';
            P10.style = 'color: #9acd32';
        }
    }
    else if (num == 10) {
        
        }
    }

    else if (num == 11) {
        var DATABUS = (Campo16.value + Campo17.value + Campo18.value + Campo19.value + Campo20.value + Campo21.value + Campo22.value).toUpperCase();
        if (DATABUS == 'DATABUS') {
            Campo16.disabled = true;
            Campo17.disabled = true;
            Campo18.disabled = true;
            Campo19.disabled = true;
            Campo20.disabled = true;
            Campo21.disabled = true;
            Campo22.disabled = true;
            Campo16.style = 'border: solid #fa9905;';
            Campo17.style = 'border: solid #fa9905;';
            Campo18.style = 'border: solid #fa9905;';
            Campo19.style = 'border: solid #fa9905;';
            Campo20.style = 'border: solid #fa9905;';
            Campo21.style = 'border: solid #fa9905;';
            Campo22.style = 'border: solid #fa9905;';
            P12.style = 'color: #9acd32';
        }
    }
    else if (num == 12) {
        var I5 = (Campo6.value + Campo15.value).toUpperCase();
        if (I5 == 'I5') {
            Campo6.disabled = true;
            Campo15.disabled = true;
            Campo6.style = 'border: solid #fa9905;';
            Campo15.style = 'border: solid #fa9905;';
            P13.style = 'color: #9acd32';
        }
    }
    else if (num == 13) {
        var I7 = (Campo66.value + Campo73.value).toUpperCase();
        if (I7 == 'I7') {
            Campo66.disabled = true;
            Campo73.disabled = true;
            Campo66.style = 'border: solid #fa9905;';
            Campo73.style = 'border: solid #fa9905;';
            P14.style = 'color: #9acd32';
        }
    }
    else if (num == 14) {
        var DUALCORE = (Campo52.value + Campo53.value + Campo54.value + Campo55.value + Campo56.value + Campo41.value +
            Campo57.value + Campo58.value).toUpperCase();
        if (DUALCORE == 'DUALCORE') {
            Campo52.disabled = true;
            Campo53.disabled = true;
            Campo54.disabled = true;
            Campo55.disabled = true;
            Campo56.disabled = true;
            Campo41.disabled = true;
            Campo57.disabled = true;
            Campo58.disabled = true;

            Campo52.style = 'border: solid #fa9905;';
            Campo53.style = 'border: solid #fa9905;';
            Campo54.style = 'border: solid #fa9905;';
            Campo55.style = 'border: solid #fa9905;';
            Campo56.style = 'border: solid #fa9905;';
            Campo41.style = 'border: solid #fa9905;';
            Campo57.style = 'border: solid #fa9905;';
            Campo58.style = 'border: solid #fa9905;';

            P15.style = 'color: #9acd32';
        }
    }
    else if (num == 15) {
        var QUADCORE = (Campo23.value + Campo24.value + Campo19.value + Campo25.value + Campo26.value +
            Campo27.value + Campo28.value + Campo29.value).toUpperCase();
        if (QUADCORE == 'QUADCORE') {
            Campo19.disabled = true;
            Campo23.disabled = true;
            Campo24.disabled = true;
            Campo25.disabled = true;
            Campo26.disabled = true;
            Campo27.disabled = true;
            Campo28.disabled = true;
            Campo29.disabled = true;
            Campo19.style = 'border: solid #fa9905;';
            Campo23.style = 'border: solid #fa9905;';
            Campo24.style = 'border: solid #fa9905;';
            Campo25.style = 'border: solid #fa9905;';
            Campo26.style = 'border: solid #fa9905;';
            Campo27.style = 'border: solid #fa9905;';
            Campo28.style = 'border: solid #fa9905;';
            Campo29.style = 'border: solid #fa9905;';
            P16.style = 'color: #9acd32';
        }
    }
}