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
    
    // Función para mostrar alerta personalizada y redireccionar
    function showCustomAlert(title, message, icon, redirectUrl) {
        // Crear elementos de la alerta
        const overlay = document.createElement('div');
        overlay.className = 'custom-alert-overlay';
        
        const alertBox = document.createElement('div');
        alertBox.className = 'custom-alert';
        
        const alertIcon = document.createElement('div');
        alertIcon.className = 'custom-alert-icon';
        alertIcon.innerHTML = `<i class="fas fa-${icon}"></i>`;
        
        const alertTitle = document.createElement('h3');
        alertTitle.className = 'custom-alert-title';
        alertTitle.textContent = title;
        
        const alertMessage = document.createElement('p');
        alertMessage.className = 'custom-alert-message';
        alertMessage.textContent = message;
        
        const alertProgress = document.createElement('div');
        alertProgress.className = 'custom-alert-progress';
        
        const progressBar = document.createElement('div');
        progressBar.className = 'custom-alert-progress-bar';
        
        // Construir la estructura de la alerta
        alertProgress.appendChild(progressBar);
        alertBox.appendChild(alertIcon);
        alertBox.appendChild(alertTitle);
        alertBox.appendChild(alertMessage);
        alertBox.appendChild(alertProgress);
        overlay.appendChild(alertBox);
        
        // Añadir la alerta al body
        document.body.appendChild(overlay);
        
        // Mostrar la alerta con animación
        setTimeout(() => {
            overlay.classList.add('active');
            alertProgress.classList.add('active');
        }, 10);
        
        // Configurar redirección después de 3 segundos
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 3000);
    }
    
    // Agregar evento a los botones de contacto en la sección de búsqueda
    const contactProviderButtons = document.querySelectorAll('.provider-actions .btn-primary, .supplier-actions .btn-primary');
    
    if (contactProviderButtons.length > 0) {
        contactProviderButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Obtener el nombre del proveedor
                const providerCard = this.closest('.provider-card, .supplier-card');
                const providerName = providerCard.querySelector('.provider-header h3, .supplier-header h3').textContent;
                
                // Mostrar alerta personalizada
                showCustomAlert(
                    'Contactando Proveedor',
                    `Estableciendo comunicación con ${providerName}. Serás redirigido a la sección de mensajes en unos segundos.`,
                    'comments',
                    'mensajes.html'
                );
            });
        });
    }
    
    // También agregar evento a los botones de contacto en la sección de comerciantes para productores
    const contactMerchantButtons = document.querySelectorAll('.merchant-footer .btn-primary');
    
    if (contactMerchantButtons.length > 0) {
        contactMerchantButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Obtener el nombre del comerciante
                const merchantCard = this.closest('.merchant-card');
                const merchantName = merchantCard.querySelector('.merchant-title h3').textContent;
                
                // Mostrar alerta personalizada
                showCustomAlert(
                    'Contactando Comerciante',
                    `Estableciendo comunicación con ${merchantName}. Serás redirigido a la sección de mensajes en unos segundos.`,
                    'comments',
                    'productor-mensajes.html'
                );
            });
        });
    }

    // Funcionalidad para formularios de login y registro
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            console.log('Intento de inicio de sesión:', { email, password });
            
            // Simulación de inicio de sesión exitoso
            showCustomAlert(
                'Inicio de Sesión Exitoso',
                'Bienvenido de nuevo a CaféConnect. Redirigiendo...',
                'check-circle',
                'index.html' // Aquí se podría redirigir según el rol, pero por ahora va al inicio
            );
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const userType = document.getElementById('user-type').value;
            const company = document.getElementById('company').value;
            
            // Validación básica
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }
            
            console.log('Registro de usuario:', { 
                fullname, 
                email, 
                userType, 
                company 
            });
            
            // Simulación de registro exitoso
            let redirectUrl = 'index.html';
            
            // Redirigir según el tipo de usuario
            if (userType === 'comerciante') {
                redirectUrl = 'index.html'; // Vista de comerciante
            } else if (userType === 'productor') {
                redirectUrl = 'productor-inicio.html'; // Vista de productor
            }
            
            showCustomAlert(
                'Registro Exitoso',
                '¡Bienvenido a CaféConnect! Tu cuenta ha sido creada correctamente. Redirigiendo...',
                'check-circle',
                redirectUrl
            );
        });
    }
});