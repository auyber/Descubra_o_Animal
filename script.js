function toggleNome(id) {
    const elemento = document.getElementById(id);

    if (elemento.style.display === 'none' || elemento.style.display === '') {
        elemento.style.display = 'block';
        // Esconde o nome após 2 segundos
        setTimeout(() => {
            elemento.style.display = 'none';
        }, 2000);
    } else {
        elemento.style.display = 'none';
    }
}
