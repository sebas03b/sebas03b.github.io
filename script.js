function calcularPotencial() {
    const R = 25;
    const A = 40;
    const B = 34;

    const distancia = document.getElementById("distancia");
    const resultado = document.getElementById("resultado");

    let potencial;

    const dist = parseFloat(distancia.value);

    if (dist > R) {
        potencial = (A * B) / (dist ** 2); 
        resultado.textContent = `El potencial es: ${potencial.toFixed(2)}`;
    } else {
        potencial = (A * B) / dist;
        resultado.textContent = `El potencial es: ${potencial.toFixed(2)}`;
    }
}

