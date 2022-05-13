lista_num = ['Pergunta 1', 'Pergunta 2', 'Pergunta 3', 'Pergunta 4', 'Pergunta 5', 'Pergunta 6', 'Pergunta 7', 'Pergunta 8', 'Pergunta 9', 'Pergunta 10', 'Pergunta 11', 'Pergunta 12', 'Pergunta 13', 'Pergunta 14', 'Pergunta 15', 'Pergunta 16',];

lista_pergunta = ['É a via elétrica usada para transferir dados entre componentes de um computador', 'Memória dentro da própria CPU que armazena bits.', 'Permite que certos dispositivos de hardware no computador acessem a memória do sistema para leitura e escrita independentemente da CPU', 'Tem como função armazenar grandes quantidades de informações', 'CPU de uso Avançado da intel.', 'Principal item de hardware do computador.', 'CPU de uso Intermediário da intel.', 'O processador armazena os dados com os quais esta lidando', 'Circuito digital que realiza operações de adição e booleana AND', 'O processo de gravação (e regravação) é muito mais rápido.', 'Processadores com 2 núcleos.', 'Os dados são gravados nelas apenas uma vez.', 'É usado para transferir dados entre dispositivos.', 'A capacidade de permitir que dados sejam regravados no dispositivo', 'Tambem chamado de slave select.', 'Processadores com 4 ou mais núcleos.'];

/* var c = 1;
var f1 = 0;
var f2 = 0;
var t1 = 0;

function avancar() {
    f1++

    if (f2 == 0) {
        if (c == 15) {
            h2_num.innerHTML = lista_num[c]
            h2_pergunta.innerHTML = lista_pergunta[c]
            c = 0
        }
        else {
            if (c == -1) {
                c = 0
            }
            h2_num.innerHTML = lista_num[c]
            h2_pergunta.innerHTML = lista_pergunta[c]
            c++
        }
    }

    else {
        c++;

        if (c == 15) {
            h2_num.innerHTML = lista_num[c]
            h2_pergunta.innerHTML = lista_pergunta[c]
            c = 0
        }
        else {
            if (c == 16) {
                c = 0
            }
            h2_num.innerHTML = lista_num[c]
            h2_pergunta.innerHTML = lista_pergunta[c]
            c++
        }
    }

    f2 = 0;

}

function voltar() {
    f2++

    if (f1 == 0) {
        if (t1 == 0) {
            c = 16
            if (c == 0) {
                c = 15
                h2_num.innerHTML = lista_num[c]
                h2_pergunta.innerHTML = lista_pergunta[c]
            }
            else {
                c--
                h2_num.innerHTML = lista_num[c]
                h2_pergunta.innerHTML = lista_pergunta[c]
            }
        }
        else {
            if (c == 0) {
                c = 15
                h2_num.innerHTML = lista_num[c]
                h2_pergunta.innerHTML = lista_pergunta[c]
            }
            else {
                if (c == -1) {
                    c = 0
                }
                c--
                h2_num.innerHTML = lista_num[c]
                h2_pergunta.innerHTML = lista_pergunta[c]
            }
        }
    }

    else {
        if (t1 == 0) {
            c = 16

            if (c == 0) {
                c = 15
                h2_num.innerHTML = lista_num[c]
                h2_pergunta.innerHTML = lista_pergunta[c]
            }
            else {
                if (c == -1) {
                    c = 0
                }
                c--
                h2_num.innerHTML = lista_num[c]
                h2_pergunta.innerHTML = lista_pergunta[c]
            }
        }

        else {
            c--;

            if (c == 0) {
                c = 15
                h2_num.innerHTML = lista_num[c]
                h2_pergunta.innerHTML = lista_pergunta[c]
            }
            else {
                if (c == -1) {
                    c = 0
                }
                c--
                h2_num.innerHTML = lista_num[c]
                h2_pergunta.innerHTML = lista_pergunta[c]
            }
        }

    }
    f1 = 0;
    t1++

} */

c = 0
f_v = 0

function avancar() {

    c++
    h2_num.innerHTML = lista_num[c]
    h2_pergunta.innerHTML = lista_pergunta[c]
    if (c == lista_pergunta.length - 1) {
        c = -1
    }
    console.log(c)

}

function voltar() {
    if (c == -1) {
        c = lista_pergunta.length - 1;
    }
    console.log(c)
    h2_num.innerHTML = lista_num[c]
    h2_pergunta.innerHTML = lista_pergunta[c]
    c--
}