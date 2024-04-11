let dias = window.document.getElementById('dias')
let horas = window.document.getElementById('horas')
let minutos = window.document.getElementById('minutos')
let segundos = window.document.getElementById('segundos')

const evento = '1 dec 2024'

function contar () {
    const dataEvento = new Date(evento)
    const dataAtual = new Date()

    const contagem = (dataEvento - dataAtual) / 1000;

    const tempoDias = Math.floor(contagem / 60 / 60 / 24);
    const tempoHoras = Math.floor(contagem / 60 / 60) % 24;
    const tempoMinutos = Math.floor(contagem / 60) % 60;
    const tempoSegundos = Math.floor(contagem) % 60; 

    dias.innerHTML = formatoTempo(tempoDias)
    horas.innerHTML = formatoTempo(tempoHoras)
    minutos.innerHTML = formatoTempo(tempoMinutos)
    segundos.innerHTML = formatoTempo(tempoSegundos)
}

function formatoTempo (tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

contar()
setInterval(contar, 1000)