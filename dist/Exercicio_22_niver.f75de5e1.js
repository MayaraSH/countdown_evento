AOS.init();
//Countdown
const dataDoEvento = new Date("dec 10, 2025 10:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diaEmMs = 86400000;
    const horaEmMs = 3600000;
    const minutoEmMs = 60000;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % diaEmMs / horaEmMs);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % horaEmMs / minutoEmMs);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % minutoEmMs / 1000);
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);
//Popup
const popup = document.getElementById('popup');
const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');
openPopup.addEventListener('click', (e)=>{
    e.preventDefault();
    popup.style.display = 'flex';
});
closePopup.addEventListener('click', ()=>{
    popup.style.display = 'none';
});
window.addEventListener('click', (e)=>{
    if (e.target === popup) popup.style.display = 'none';
});
window.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape') popup.style.display = 'none';
});

//# sourceMappingURL=Exercicio_22_niver.f75de5e1.js.map
