document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            authButtons.style.display = authButtons.style.display === 'flex' ? 'none' : 'flex';
            
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'var(--white)';
                navLinks.style.padding = '1rem';
                navLinks.style.boxShadow = '0 5px 15px var(--shadow)';
                navLinks.style.zIndex = '999';
                
                authButtons.style.flexDirection = 'column';
                authButtons.style.position = 'absolute';
                authButtons.style.top = navLinks.offsetHeight + 80 + 'px';
                authButtons.style.left = '0';
                authButtons.style.width = '100%';
                authButtons.style.backgroundColor = 'var(--white)';
                authButtons.style.padding = '1rem';
                authButtons.style.boxShadow = '0 5px 15px var(--shadow)';
                authButtons.style.zIndex = '999';
            }
        });
    }
    
    // Control de rango para volumen
    const volumeRange = document.getElementById('volume');
    const volumeValue = document.getElementById('volume-value');
    
    if (volumeRange && volumeValue) {
        volumeRange.addEventListener('input', function() {
            volumeValue.textContent = this.value + ' kg';
        });
    }
    
    // Pestañas de perfil
    const profileMenuItems = document.querySelectorAll('.profile-menu li a');
    const profileTabs = document.querySelectorAll('.profile-tab');
    
    profileMenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover clase active de todos los elementos del menú
            document.querySelectorAll('.profile-menu li').forEach(li => {
                li.classList.remove('active');
            });
            
            // Añadir clase active al elemento clickeado
            this.parentElement.classList.add('active');
            
            // Ocultar todas las pestañas
            profileTabs.forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Mostrar la pestaña correspondiente
            const targetTab = document.querySelector(this.getAttribute('href'));
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
    
    // Preguntas frecuentes
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            
            // Cerrar otras preguntas
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            
            // Alternar estado de la pregunta actual
            faqItem.classList.toggle('active');
        });
    });
    
    // Slider de testimonios
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    const testimonialSlider = document.querySelector('.testimonials-slider');
    
    if (testimonialDots.length > 0 && testimonialSlider) {
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                // Remover clase active de todos los dots
                testimonialDots.forEach(d => {
                    d.classList.remove('active');
                });
                
                // Añadir clase active al dot clickeado
                this.classList.add('active');
                
                // Calcular la posición de desplazamiento
                const testimonialCard = document.querySelector('.testimonial-card');
                if (testimonialCard) {
                    const cardWidth = testimonialCard.offsetWidth;
                    const gap = 16; // gap entre tarjetas
                    testimonialSlider.scrollTo({
                        left: index * (cardWidth + gap),
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Sistema de mensajería
    const contactItems = document.querySelectorAll('.contact-item');
    const chatInput = document.querySelector('.chat-input input');
    const sendBtn = document.querySelector('.send-btn');
    const chatMessages = document.querySelector('.chat-messages');
    
    if (contactItems.length > 0) {
        contactItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remover clase active de todos los contactos
                contactItems.forEach(contact => {
                    contact.classList.remove('active');
                });
                
                // Añadir clase active al contacto clickeado
                this.classList.add('active');
                
                // Aquí se podría cargar la conversación correspondiente
                // Para este ejemplo, simplemente cambiamos el nombre del contacto en el encabezado
                const contactName = this.querySelector('h4').textContent;
                const contactAvatar = this.querySelector('img').src;
                
                document.querySelector('.chat-contact h4').textContent = contactName;
                document.querySelector('.chat-contact img').src = contactAvatar;
                
                // Eliminar indicador de mensajes no leídos
                const unreadBadge = this.querySelector('.contact-unread');
                if (unreadBadge) {
                    unreadBadge.remove();
                }
            });
        });
    }
    
    if (chatInput && sendBtn && chatMessages) {
        // Función para enviar mensaje
        function sendMessage() {
            const messageText = chatInput.value.trim();
            
            if (messageText !== '') {
                // Crear elemento de mensaje
                const messageElement = document.createElement('div');
                messageElement.className = 'message sent';
                
                const messageContent = document.createElement('div');
                messageContent.className = 'message-content';
                
                const messageParagraph = document.createElement('p');
                messageParagraph.textContent = messageText;
                
                messageContent.appendChild(messageParagraph);
                
                const messageTime = document.createElement('span');
                messageTime.className = 'message-time';
                
                // Obtener hora actual
                const now = new Date();
                const hours = now.getHours().toString().padStart(2, '0');
                const minutes = now.getMinutes().toString().padStart(2, '0');
                messageTime.textContent = `${hours}:${minutes}`;
                
                messageElement.appendChild(messageContent);
                messageElement.appendChild(messageTime);
                
                // Añadir mensaje al chat
                chatMessages.appendChild(messageElement);
                
                // Limpiar input
                chatInput.value = '';
                
                // Hacer scroll hasta el último mensaje
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                // Simular respuesta después de 1 segundo
                setTimeout(function() {
                    const responseElement = document.createElement('div');
                    responseElement.className = 'message received';
                    
                    const responseContent = document.createElement('div');
                    responseContent.className = 'message-content';
                    
                    const responseParagraph = document.createElement('p');
                    responseParagraph.textContent = 'Gracias por tu mensaje. Te responderemos lo antes posible.';
                    
                    responseContent.appendChild(responseParagraph);
                    
                    const responseTime = document.createElement('span');
                    responseTime.className = 'message-time';
                    
                    // Obtener hora actual
                    const responseNow = new Date();
                    const responseHours = responseNow.getHours().toString().padStart(2, '0');
                    const responseMinutes = responseNow.getMinutes().toString().padStart(2, '0');
                    responseTime.textContent = `${responseHours}:${responseMinutes}`;
                    
                    responseElement.appendChild(responseContent);
                    responseElement.appendChild(responseTime);
                    
                    // Añadir respuesta al chat
                    chatMessages.appendChild(responseElement);
                    
                    // Hacer scroll hasta el último mensaje
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
            }
        }
        
        // Evento click para botón de enviar
        sendBtn.addEventListener('click', sendMessage);
        
        // Evento keypress para enviar con Enter
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Inicialización de componentes
    // Hacer scroll hasta el último mensaje en el chat
    if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});