let score = 0;  // Variable para almacenar el puntaje
let totalQuestions = 10;  // Total de preguntas
let answeredQuestions = 0;  // Preguntas respondidas

// Función para validar la respuesta y aplicar estilos
function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.classList.add('correct'); // Agregar clase de respuesta correcta
        score++;  // Aumentar puntaje si la respuesta es correcta
    } else {
        button.classList.add('incorrect'); // Agregar clase de respuesta incorrecta
    }
    
    // Deshabilitar todos los botones de la pregunta actual para evitar múltiples clics
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    // Incrementar el contador de preguntas respondidas
    answeredQuestions++;

    // Verificar si todas las preguntas han sido respondidas
    if (answeredQuestions === totalQuestions) {
        showScore();  // Mostrar puntaje al final
    }
}

// Función para mostrar el puntaje final
function showScore() {
    // Crear un mensaje con el puntaje obtenido
    const resultMessage = `Has respondido correctamente ${score} de ${totalQuestions} preguntas.`;

    // Crear un elemento div para mostrar el puntaje
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');
    resultDiv.innerHTML = `<h2>${resultMessage}</h2>`;

    // Insertar el mensaje en el cuerpo del documento
    document.body.appendChild(resultDiv);
}