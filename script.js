function verifica(Numero) {
    var num = Numero
    var interval = /[a-zA-Z]/;
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

        }
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
                document.getElementById("Campo11").focus()
            }
        }
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
        let c15 = document.getElementById('Campo15')
        if (c15 === document.activeElement) {
            if (Campo15.value.match(interval)) {
                document.getElementById("Campo17").focus()
            }
        }

        let c17 = document.getElementById('Campo17')
        if (c17 === document.activeElement) {
            if (Campo17.value.match(interval)) {
                document.getElementById("Campo19").focus()
            }
        }

        let c19 = document.getElementById('Campo19')
        if (c19 === document.activeElement) {
            if (Campo19.value.match(interval)) {
                document.getElementById("Campo22").focus()
            }
        }


        let c22 = document.getElementById('Campo22')
        if (c22 === document.activeElement) {
            if (Campo22.value.match(interval)) {
                document.getElementById("Campo25").focus()
            }
        }

        let c25 = document.getElementById('Campo25')
        if (c25 === document.activeElement) {
            if (Campo25.value.match(interval)) {
                document.getElementById("Campo29").focus()
            }
        }

        let c29 = document.getElementById('Campo29')
        if (c29 === document.activeElement) {
            if (Campo29.value.match(interval)) {
                document.getElementById("Campo35").focus()
            }
        }

        let c35 = document.getElementById('Campo35')
        if (c35 === document.activeElement) {
            if (Campo35.value.match(interval)) {
                document.getElementById("Campo38").focus()
            }
        }

        let c38 = document.getElementById('Campo38')
        if (c38 === document.activeElement) {
            if (Campo38.value.match(interval)) {
                document.getElementById("Campo44").focus()
            }
        }

        let c44 = document.getElementById('Campo44')
        if (c44 === document.activeElement) {
            if (Campo44.value.match(interval)) {
                document.getElementById("Campo49").focus()
            }
        }

        let c49 = document.getElementById('Campo49')
        if (c49 === document.activeElement) {
            if (Campo49.value.match(interval)) {
                document.getElementById("Campo59").focus()
            }
        }
        let c59 = document.getElementById('Campo59')
        if (c59 === document.activeElement) {
            if (Campo59.value.match(interval)) {
                document.getElementById("Campo66").focus()
            }
        }

    }
    else if (num == 2) {
        var DMA = (Campo12.value + Campo13.value + Campo14.value).toUpperCase();
        if (DMA == 'DMA') {
            Campo12.disabled = true;
            Campo13.disabled = true;
            Campo14.disabled = true;
            Campo12.style = 'border: solid #fa9905;';
            Campo13.style = 'border: solid #fa9905;';
            Campo14.style = 'border: solid #fa9905;';
            P9.style = 'color: #9acd32';
        }

        let c12 = document.getElementById('Campo12')
        if (c12 === document.activeElement) {
            if (Campo12.value.match(interval)) {
                document.getElementById("Campo13").focus()
            }
        }
        let c13 = document.getElementById('Campo13')
        if (c13 === document.activeElement) {
            if (Campo13.value.match(interval)) {
                document.getElementById("Campo14").focus()
            }
        }

    }
    else if (num == 3) {
        var MEMORIADEMASSA = (Campo13.value + Campo16.value + Campo18.value + Campo21.value +
            Campo23.value + Campo26.value + Campo32.value + Campo39.value + Campo47.value + Campo64.value +
            Campo68.value + Campo70.value + Campo71.value + Campo74.value).toUpperCase();
        if (MEMORIADEMASSA == 'MEMORIADEMASSA') {
            Campo13.disabled = true;
            Campo16.disabled = true;
            Campo18.disabled = true;
            Campo21.disabled = true;
            Campo23.disabled = true;
            Campo26.disabled = true;
            Campo32.disabled = true;
            Campo39.disabled = true;
            Campo47.disabled = true;
            Campo64.disabled = true;
            Campo68.disabled = true;
            Campo70.disabled = true;
            Campo71.disabled = true;
            Campo74.disabled = true;

            Campo13.style = "border: solid #fa9905;"
            Campo16.style = "border: solid #fa9905;"
            Campo18.style = "border: solid #fa9905;"
            Campo21.style = "border: solid #fa9905;"
            Campo23.style = "border: solid #fa9905;"
            Campo26.style = "border: solid #fa9905;"
            Campo32.style = "border: solid #fa9905;"
            Campo39.style = "border: solid #fa9905;"
            Campo47.style = "border: solid #fa9905;"
            Campo64.style = "border: solid #fa9905;"
            Campo68.style = "border: solid #fa9905;"
            Campo70.style = "border: solid #fa9905;"
            Campo71.style = "border: solid #fa9905;"
            Campo74.style = "border: solid #fa9905;"
        }

        let c13 = document.getElementById('Campo13')
        if (c13 === document.activeElement) {
            if (Campo13.value.match(interval)) {
                document.getElementById("Campo16").focus()
            }
        }
        let c16 = document.getElementById('Campo16')
        if (c16 === document.activeElement) {
            if (Campo16.value.match(interval)) {
                document.getElementById("Campo18").focus()
            }
        }
        let c18 = document.getElementById('Campo18')
        if (c18 === document.activeElement) {
            if (Campo18.value.match(interval)) {
                document.getElementById("Campo21").focus()
            }
        }
        let c21 = document.getElementById('Campo21')
        if (c21 === document.activeElement) {
            if (Campo21.value.match(interval)) {
                document.getElementById("Campo23").focus()
            }
        }
        let c23 = document.getElementById('Campo23')
        if (c23 === document.activeElement) {
            if (Campo23.value.match(interval)) {
                document.getElementById("Campo26").focus()
            }
        }
        let c26 = document.getElementById('Campo26')
        if (c26 === document.activeElement) {
            if (Campo26.value.match(interval)) {
                document.getElementById("Campo32").focus()
            }
        }
        let c32 = document.getElementById('Campo32')
        if (c32 === document.activeElement) {
            if (Campo32.value.match(interval)) {
                document.getElementById("Campo39").focus()
            }
        }
        let c39 = document.getElementById('Campo39')
        if (c39 === document.activeElement) {
            if (Campo39.value.match(interval)) {
                document.getElementById("Campo47").focus()
            }
        }
        let c47 = document.getElementById('Campo47')
        if (c47 === document.activeElement) {
            if (Campo47.value.match(interval)) {
                document.getElementById("Campo64").focus()
            }
        }
        let c64 = document.getElementById('Campo64')
        if (c64 === document.activeElement) {
            if (Campo64.value.match(interval)) {
                document.getElementById("Campo68").focus()
            }
        }
        let c68 = document.getElementById('Campo68')
        if (c68 === document.activeElement) {
            if (Campo68.value.match(interval)) {
                document.getElementById("Campo70").focus()
            }
        }
        let c70 = document.getElementById('Campo70')
        if (c70 === document.activeElement) {
            if (Campo70.value.match(interval)) {
                document.getElementById("Campo71").focus()
            }
        }
        let c71 = document.getElementById('Campo71')
        if (c71 === document.activeElement) {
            if (Campo71.value.match(interval)) {
                document.getElementById("Campo74").focus()
            }
        }
    }


    else if (num == 4) {
        var I7 = (Campo19.value + Campo20.value).toUpperCase();
        if (I7 == 'I7') {
            Campo19.disabled = true;
            Campo20.disabled = true;
            Campo19.style = 'border: solid #fa9905;';
            Campo20.style = 'border: solid #fa9905;';

        }
        let c19 = document.getElementById('Campo19')
        if (c19 === document.activeElement) {
            if (Campo19.value.match(interval)) {
                document.getElementById("Campo20").focus()
            }
        }
        
    }
    else if (num == 5) {
        var CPU = (Campo24.value + Campo28.value + Campo33.value).toUpperCase();
        if (CPU == 'CPU') {
            Campo24.disabled = true;
            Campo28.disabled = true;
            Campo33.disabled = true;
            Campo24.style = 'border: solid #fa9905;';
            Campo28.style = 'border: solid #fa9905;';
            Campo33.style = 'border: solid #fa9905;';
        }
        let c24 = document.getElementById('Campo24')
        if (c24 === document.activeElement) {
            if (Campo24.value.match(interval)) {
                document.getElementById("Campo28").focus()
            }
        }
        let c28 = document.getElementById('Campo28')
        if (c28 === document.activeElement) {
            if (Campo28.value.match(interval)) {
                document.getElementById("Campo33").focus()
            }
        }
      
    }

    else if (num == 6) {
        var I5 = (Campo26.value + Campo27.value).toUpperCase();
        if (I5 == 'I5') {
            Campo26.disabled = true;
            Campo27.disabled = true;
            Campo26.style = 'border: solid #fa9905;';
            Campo27.style = 'border: solid #fa9905;';
            P13.style = 'color: #9acd32';
        }

    }

    else if (num == 7) {
        var RAM = (Campo29.value + Campo30.value + Campo31.value).toUpperCase();
        if (RAM == 'RAM') {
            Campo29.disabled = true;
            Campo30.disabled = true;
            Campo31.disabled = true;

            Campo29.style = 'border: solid #fa9905;';
            Campo30.style = 'border: solid #fa9905;';
            Campo31.style = 'border: solid #fa9905;';


        }
        let c30 = document.getElementById('Campo30')
        if (c30 === document.activeElement) {
            if (Campo30.value.match(interval)) {
                document.getElementById("Campo31").focus()
            }
        }
    }


    else if (num == 8) {
        var ULA = (Campo33.value + Campo34.value + Campo35.value).toUpperCase();
        if (ULA == 'ULA') {
            Campo33.disabled = true;
            Campo34.disabled = true;
            Campo35.disabled = true;
            Campo33.style = 'border: solid #fa9905;';
            Campo34.style = 'border: solid #fa9905;';
            Campo35.style = 'border: solid #fa9905;';

        }
        let c33 = document.getElementById('Campo33')
        if (c33 === document.activeElement) {
            if (Campo33.value.match(interval)) {
                document.getElementById("Campo34").focus()
            }
        }
        let c34 = document.getElementById('Campo34')
        if (c34 === document.activeElement) {
            if (Campo34.value.match(interval)) {
                document.getElementById("Campo35").focus()
            }
        }
    }




    else if (num == 9) {
        var FLASH = (Campo37.value + Campo42.value + Campo48.value + Campo58.value + Campo65.value).toUpperCase();
        if (FLASH == 'FLASH') {
            Campo37.disabled = true;
            Campo42.disabled = true;
            Campo48.disabled = true;
            Campo58.disabled = true;
            Campo65.disabled = true;
            Campo37.style = 'border: solid #fa9905;';
            Campo42.style = 'border: solid #fa9905;';
            Campo48.style = 'border: solid #fa9905;';
            Campo58.style = 'border: solid #fa9905;';
            Campo65.style = 'border: solid #fa9905;';
        }
        let c37 = document.getElementById('Campo37')
        if (c37 === document.activeElement) {
            if (Campo37.value.match(interval)) {
                document.getElementById("Campo42").focus()
            }
        }
        let c42 = document.getElementById('Campo42')
        if (c42 === document.activeElement) {
            if (Campo42.value.match(interval)) {
                document.getElementById("Campo48").focus()
            }
        }
        let c48 = document.getElementById('Campo48')
        if (c48 === document.activeElement) {
            if (Campo48.value.match(interval)) {
                document.getElementById("Campo58").focus()
            }
        }
        let c58 = document.getElementById('Campo58')
        if (c58 === document.activeElement) {
            if (Campo58.value.match(interval)) {
                document.getElementById("Campo65").focus()
            }
        }
     
    }
    else if (num == 10) {
        var DUALCORE = (Campo39.value + Campo40.value + Campo41.value + Campo42.value + Campo43.value + Campo44.value +
            Campo45.value + Campo46.value).toUpperCase();
        if (DUALCORE == 'DUALCORE') {
            Campo39.disabled = true;
            Campo40.disabled = true;
            Campo41.disabled = true;
            Campo42.disabled = true;
            Campo43.disabled = true;
            Campo44.disabled = true;
            Campo45.disabled = true;
            Campo46.disabled = true;

            Campo39.style = 'border: solid #fa9905;';
            Campo40.style = 'border: solid #fa9905;';
            Campo41.style = 'border: solid #fa9905;';
            Campo42.style = 'border: solid #fa9905;';
            Campo43.style = 'border: solid #fa9905;';
            Campo44.style = 'border: solid #fa9905;';
            Campo45.style = 'border: solid #fa9905;';
            Campo46.style = 'border: solid #fa9905;';
        }
        let c39 = document.getElementById('Campo39')
        if (c39 === document.activeElement) {
            if (Campo39.value.match(interval)) {
                document.getElementById("Campo40").focus()
            }
        }
        let c40 = document.getElementById('Campo40')
        if (c40 === document.activeElement) {
            if (Campo40.value.match(interval)) {
                document.getElementById("Campo41").focus()
            }
        }
        let c41 = document.getElementById('Campo41')
        if (c41 === document.activeElement) {
            if (Campo41.value.match(interval) && Campo42.disabled == true) {
                document.getElementById("Campo43").focus()
            }
            else if (Campo41.value.match(interval)) {
                document.getElementById("Campo42").focus()
            }
        }
        let c42 = document.getElementById('Campo42')
        if (c42 === document.activeElement) {
            if (Campo42.value.match(interval)) {
                document.getElementById("Campo43").focus()
            }
        }
        let c43 = document.getElementById('Campo43')
        if (c43 === document.activeElement) {
            if (Campo43.value.match(interval) && Campo44.disabled == true) {
                document.getElementById("Campo45").focus()
            }
            else if (Campo43.value.match(interval)) {
                document.getElementById("Campo44").focus()
            }
        }
        let c44 = document.getElementById('Campo44')
        if (c44 === document.activeElement) {
            if (Campo44.value.match(interval)) {
                document.getElementById("Campo45").focus()
            }
        }
        let c45 = document.getElementById('Campo45')
        if (c45 === document.activeElement) {
            if (Campo45.value.match(interval)) {
                document.getElementById("Campo46").focus()
            }
        }
    }

    else if (num == 11) {
        var ROM = (Campo50.value + Campo62.value + Campo67.value).toUpperCase();
        if (ROM == 'ROM') {
            Campo50.disabled = true;
            Campo62.disabled = true;
            Campo67.disabled = true;

            Campo50.style = 'border: solid #fa9905;';
            Campo62.style = 'border: solid #fa9905;';
            Campo67.style = 'border: solid #fa9905;';
        }
        let c50 = document.getElementById('Campo50')
        if (c50 === document.activeElement) {
            if (Campo50.value.match(interval)) {
                document.getElementById("Campo62").focus()
            }
        }
        let c62 = document.getElementById('Campo62')
        if (c62 === document.activeElement) {
            if (Campo62.value.match(interval)) {
                document.getElementById("Campo67").focus()
            }
        }
    }
    else if (num == 12) {
        var DATABUS = (Campo51.value + Campo52.value + Campo53.value + Campo54.value + Campo56.value + 
            Campo57.value + Campo58.value).toUpperCase();
        if (DATABUS == 'DATABUS') {
            Campo51.disabled = true;
            Campo52.disabled = true;
            Campo53.disabled = true;
            Campo54.disabled = true;
            Campo56.disabled = true;
            Campo57.disabled = true;
            Campo58.disabled = true;
            Campo51.style = 'border: solid #fa9905;';
            Campo52.style = 'border: solid #fa9905;';
            Campo53.style = 'border: solid #fa9905;';
            Campo54.style = 'border: solid #fa9905;';
            Campo56.style = 'border: solid #fa9905;';
            Campo57.style = 'border: solid #fa9905;';
            Campo58.style = 'border: solid #fa9905;';        
    }
    let c51 = document.getElementById('Campo51')
    if (c51 === document.activeElement) {
        if (Campo51.value.match(interval)) {
            document.getElementById("Campo52").focus()
        }
    }
    let c52 = document.getElementById('Campo52')
        if (c52 === document.activeElement) {
            if (Campo52.value.match(interval)) {
                document.getElementById("Campo53").focus()
            }
        }
        let c53 = document.getElementById('Campo53')
        if (c53 === document.activeElement) {
            if (Campo53.value.match(interval)) {
                document.getElementById("Campo54").focus()
            }
        }
        let c54 = document.getElementById('Campo54')
        if (c54 === document.activeElement) {
            if (Campo54.value.match(interval)) {
                document.getElementById("Campo56").focus()
            }
        }
        let c56 = document.getElementById('Campo56')
        if (c56 === document.activeElement) {
            if (Campo56.value.match(interval)) {
                document.getElementById("Campo57").focus()
            }
        }
        let c57 = document.getElementById('Campo57')
        if (c57 === document.activeElement) {
            if (Campo57.value.match(interval)) {
                document.getElementById("Campo58").focus()
            }
        }
}

    else if (num == 13) {
        var EPROM = (Campo59.value + Campo60.value + Campo61.value + Campo62.value + Campo63.value).toUpperCase();
        if (EPROM == 'EPROM') {
            Campo59.disabled = true;
            Campo60.disabled = true;
            Campo61.disabled = true;
            Campo62.disabled = true;
            Campo63.disabled = true;
            Campo59.style = 'border: solid #fa9905;';
            Campo60.style = 'border: solid #fa9905;';
            Campo61.style = 'border: solid #fa9905;';
            Campo62.style = 'border: solid #fa9905;';
            Campo63.style = 'border: solid #fa9905;';     
        }
        let c60 = document.getElementById('Campo60')
        if (c60 === document.activeElement) {
            if (Campo60.value.match(interval)) {
                document.getElementById("Campo61").focus()
            }
        }
        let c61 = document.getElementById('Campo61')
        if (c61 === document.activeElement) {
            if (Campo61.value.match(interval) && Campo62.disabled == true) {
                document.getElementById("Campo63").focus()
            }
            else if (Campo61.value.match(interval)) {
                document.getElementById("Campo62").focus()
            }
        }
        let c62 = document.getElementById('Campo62')
        if (c62 === document.activeElement) {
            if (Campo62.value.match(interval)) {
                document.getElementById("Campo63").focus()
            }
        }
        
    }
    else if (num == 14) {
        var CS = (Campo69.value + Campo70.value).toUpperCase();
        if (CS == 'CS') {
            Campo69.disabled = true;
            Campo70.disabled = true;
            Campo69.style = 'border: solid #fa9905;';
            Campo70.style = 'border: solid #fa9905;';
        }
        let c69 = document.getElementById('Campo69')
        if (c69 === document.activeElement) {
            if (Campo69.value.match(interval)) {
                document.getElementById("Campo70").focus()
            }
        }
    }
    else if (num == 15) {
        var QUADCORE = (Campo72.value + Campo73.value + Campo74.value + Campo75.value + Campo76.value +
            Campo77.value + Campo78.value + Campo79.value).toUpperCase();
        if (QUADCORE == 'QUADCORE') {
            Campo74.disabled = true;
            Campo72.disabled = true;
            Campo73.disabled = true;
            Campo75.disabled = true;
            Campo76.disabled = true;
            Campo77.disabled = true;
            Campo78.disabled = true;
            Campo79.disabled = true;
            Campo74.style = 'border: solid #fa9905;';
            Campo72.style = 'border: solid #fa9905;';
            Campo73.style = 'border: solid #fa9905;';
            Campo75.style = 'border: solid #fa9905;';
            Campo76.style = 'border: solid #fa9905;';
            Campo77.style = 'border: solid #fa9905;';
            Campo78.style = 'border: solid #fa9905;';
            Campo79.style = 'border: solid #fa9905;';
            P16.style = 'color: #9acd32';
        }
        let c72 = document.getElementById('Campo72')
        if (c72 === document.activeElement) {
            if (Campo72.value.match(interval)) {
                document.getElementById("Campo73").focus()
            }
        }
        let c73 = document.getElementById('Campo73')
        if (c73 === document.activeElement) {
            if (Campo73.value.match(interval) && Campo74.disabled == true) {
                document.getElementById("Campo75").focus()
            }
            else if (Campo73.value.match(interval)) {
                document.getElementById("Campo74").focus()
            }
        }
        let c74 = document.getElementById('Campo74')
        if (c74 === document.activeElement) {
            if (Campo74.value.match(interval)) {
                document.getElementById("Campo75").focus()
            }
        }
        let c75 = document.getElementById('Campo75')
        if (c75 === document.activeElement) {
            if (Campo75.value.match(interval)) {
                document.getElementById("Campo76").focus()
            }
        }
        let c76 = document.getElementById('Campo76')
        if (c76 === document.activeElement) {
            if (Campo76.value.match(interval)) {
                document.getElementById("Campo77").focus()
            }
        }
        let c77 = document.getElementById('Campo77')
        if (c77 === document.activeElement) {
            if (Campo77.value.match(interval)) {
                document.getElementById("Campo78").focus()
            }
        }
        let c78 = document.getElementById('Campo78')
        if (c78 === document.activeElement) {
            if (Campo78.value.match(interval)) {
                document.getElementById("Campo79").focus()
            }
        }
    }
}