        //  Codigo de formatacao de  dia, mes, dia da Semana e anos.

let data = new Date
let diaSemana = data.getDay() 
let mes = data.getMonth() ;
let dia = data.getDate()
let  ano = data.getFullYear()

//   Formatacao basica do Array para  os meses do ano
const MesAno = 
[
 "Janeiro" ,
 "Fevereiro",
 "Março",
 "Abril",
 "Maio",
 "Junho",
 "Julho",
 "Agosto",
 "Setembro",
 "Outubro",
 "Novembro",
 "Dezembro"

]

// Formatação basica do Array para dias da semana
const diasSem = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-Feira",
    "Sabado"

]


document.getElementById('dia').innerHTML = diasSem[diaSemana] + ".," + adicionarZero (dia) + "/" + MesAno[mes]+ "/" + adicionarZero(ano) ;


//  Codigo de Formatacao de Hora minutos e segundos

minutos = setInterval(() => {
    let data = new Date
    let segundos = data.getSeconds()
    let minutos = data.getMinutes()
    document.getElementById('minutos').innerHTML = adicionarZero (minutos);
}, 1000);


segundos = setInterval(() => {
    let data = new Date
    let segundos = data.getSeconds()
    document.getElementById('segundos').innerHTML = adicionarZero (segundos)
}, 1000);

 
    Hora = setInterval(() => {
        let data = new Date;
        let segundos = data.getSeconds();
        let minutos = data.getMinutes();
        let hora = data.getHours();
        document.getElementById('hora').innerHTML = adicionarZero(hora);
    }, 1000);


    //   Função Basica para adicionar zero (0) na formatacao dos dias, meses, anos, semanas, minutos , horas e segundos
function adicionarZero (x){
    return x < 10 ? '0' + x : ' ' + x
}