// Espera a que todo el contenido del HTML esté cargado
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Obtenemos los elementos clave del HTML
    const chatFormulario = document.getElementById("chat-formulario");
    const chatInput = document.getElementById("chat-input");
    const chatVisor = document.getElementById("chat-visor");

    // 2. Escuchamos cuando el usuario envía el formulario (da "Enter" o "click")
    chatFormulario.addEventListener("submit", (evento) => {
        // Prevenimos que la página se recargue (comportamiento por defecto)
        evento.preventDefault(); 

        // Obtenemos el texto que escribió el usuario y eliminamos espacios extra
        const mensajeTexto = chatInput.value.trim();

        // Si no escribió nada, no hacemos nada
        if (!mensajeTexto) {
            return;
        }

        // 3. Mostramos el mensaje del usuario en el chat
        agregarMensaje(mensajeTexto, 'usuario');

        // 4. Limpiamos el campo de entrada
        chatInput.value = "";

        // 5. Simulamos la respuesta de la IA (el "backend falso")
        simularRespuestaIA();
    });

    /**
     * Función para añadir un nuevo mensaje al visor del chat
     * @param {string} texto - El contenido del mensaje
     * @param {string} tipo - 'usuario' o 'ia'
     */
    function agregarMensaje(texto, tipo) {
        // Creamos un nuevo elemento <div>
        const mensajeDiv = document.createElement("div");
        
        // Le añadimos las clases CSS para que tenga el estilo correcto
        mensajeDiv.classList.add("mensaje");
        mensajeDiv.classList.add(tipo); // 'usuario' o 'ia'

        // Le ponemos el texto dentro
        mensajeDiv.innerText = texto;

        // Lo añadimos al final del visor del chat
        chatVisor.appendChild(mensajeDiv);

        // Hacemos scroll hasta el final para ver el último mensaje
        chatVisor.scrollTop = chatVisor.scrollHeight;
    }

    /**
     * Simula que la IA tarda un poco en responder
     */
    function simularRespuestaIA() {
        // Mostramos un indicador de "escribiendo..." (opcional pero útil)
        // (Por ahora lo saltamos para mantenerlo simple)

        // Esperamos 1.5 segundos (1500 milisegundos)
        setTimeout(() => {
            const respuestaFalsa = "Respuesta simulada: Nunc intellego! Hoc est exemplum 'Ablativus Absolutus'. Visne plura scire?";
            
            // Añadimos la respuesta falsa de la IA
            agregarMensaje(respuestaFalsa, 'ia');

        }, 1500); // 1.5 segundos
    }

});
