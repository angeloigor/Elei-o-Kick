function submitVote() {
    const form = document.getElementById('formularioVotacao');
    const vote = form.vote.value;
    const resultDiv = document.getElementById('resultado');

    if (vote) {
        resultDiv.textContent = `Você votou em: ${vote}`;
    } else {
        resultDiv.textContent = 'Por favor, selecione uma opção para votar.';
        resultDiv.style.color = 'red';
    }
}

function changeBackgroundColor() {
    const color = document.getElementById('bgColor').value;
    document.body.style.backgroundColor = color;
}