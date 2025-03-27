document.addEventListener('DOMContentLoaded', function() {
    // Pestañas de lotes (activos, vendidos, borradores)
    const lotTabs = document.querySelectorAll('.lot-tab');
    
    if (lotTabs.length > 0) {
        lotTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remover clase active de todas las pestañas
                lotTabs.forEach(t => {
                    t.classList.remove('active');
                });
                
                // Añadir clase active a la pestaña clickeada
                this.classList.add('active');
                
                // Aquí se implementaría la lógica para mostrar los lotes correspondientes
                // Por ejemplo, filtrar los lotes según el tipo (activos, vendidos, borradores)
                const tabType = this.getAttribute('data-tab');
                console.log(`Mostrando lotes de tipo: ${tabType}`);
                
                // En una implementación real, aquí se cargarían los datos o se filtrarían los lotes visibles
            });
        });
    }
    
    // Pestañas de comerciantes (emparejamientos, interesados, explorar)
    const merchantTabs = document.querySelectorAll('.merchant-tab');
    
    if (merchantTabs.length > 0) {
        merchantTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remover clase active de todas las pestañas
                merchantTabs.forEach(t => {
                    t.classList.remove('active');
                });
                
                // Añadir clase active a la pestaña clickeada
                this.classList.add('active');
                
                // Aquí se implementaría la lógica para mostrar los comerciantes correspondientes
                const tabType = this.getAttribute('data-tab');
                console.log(`Mostrando comerciantes de tipo: ${tabType}`);
                
                // En una implementación real, aquí se cargarían los datos o se filtrarían los comerciantes visibles
            });
        });
    }
    
    // Filtros de búsqueda de comerciantes
    const filterBtn = document.querySelector('.filter-btn');
    
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            // Obtener valores de los filtros
            const merchantType = document.getElementById('merchant-type').value;
            const location = document.getElementById('location').value;
            const volume = document.getElementById('volume').value;
            const certification = document.getElementById('certification').value;
            
            // Aquí se implementaría la lógica para filtrar los comerciantes según los criterios
            console.log('Filtros aplicados:', {
                merchantType,
                location,
                volume,
                certification
            });
            
            // En una implementación real, aquí se realizaría una petición al servidor o se filtrarían los datos locales
        });
    }
    
    // Gestión de lotes - Botones de acción
    const lotActionButtons = document.querySelectorAll('.lot-actions .btn-icon');
    
    if (lotActionButtons.length > 0) {
        lotActionButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                
                const action = this.querySelector('i').classList.contains('fa-edit') ? 'edit' : 'delete';
                const lotCard = this.closest('.lot-card');
                const lotTitle = lotCard.querySelector('.lot-title h3').textContent;
                
                if (action === 'edit') {
                    console.log(`Editando lote: ${lotTitle}`);
                    // Aquí se implementaría la lógica para editar el lote
                } else if (action === 'delete') {
                    if (confirm(`¿Estás seguro de que deseas eliminar el lote "${lotTitle}"?`)) {
                        console.log(`Eliminando lote: ${lotTitle}`);
                        // Aquí se implementaría la lógica para eliminar el lote
                    }
                }
            });
        });
    }
    
    // Favoritos de comerciantes
    const favoriteButtons = document.querySelectorAll('.merchant-actions .btn-icon');
    
    if (favoriteButtons.length > 0) {
        favoriteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const starIcon = this.querySelector('i');
                const isFavorite = starIcon.classList.contains('fas');
                
                if (isFavorite) {
                    starIcon.classList.remove('fas');
                    starIcon.classList.add('far');
                    this.style.color = 'var(--gray)';
                } else {
                    starIcon.classList.remove('far');
                    starIcon.classList.add('fas');
                    this.style.color = '#FFC107';
                }
                
                const merchantName = this.closest('.merchant-card').querySelector('.merchant-title h3').textContent;
                console.log(`${isFavorite ? 'Eliminado de' : 'Añadido a'} favoritos: ${merchantName}`);
                
                // En una implementación real, aquí se actualizaría el estado en el servidor
            });
        });
    }
    
    // Formulario de nuevo lote
    const newLotButton = document.querySelector('.section-header .btn-primary');
    
    if (newLotButton) {
        newLotButton.addEventListener('click', function() {
            console.log('Creando nuevo lote');
            // Aquí se implementaría la lógica para mostrar el formulario de nuevo lote
            // Por ejemplo, redirigir a una página de creación o mostrar un modal
            alert('Funcionalidad de creación de nuevo lote (se implementaría un formulario o modal)');
        });
    }
    
    // Botones de contacto con comerciantes
    const contactButtons = document.querySelectorAll('.merchant-footer .btn-primary');
    
    if (contactButtons.length > 0) {
        contactButtons.forEach(button => {
            button.addEventListener('click', function() {
                const merchantName = this.closest('.merchant-card').querySelector('.merchant-title h3').textContent;
                console.log(`Contactando a: ${merchantName}`);
                // Aquí se implementaría la lógica para iniciar una conversación
                // Por ejemplo, redirigir a la página de mensajes o abrir un modal de mensaje
                alert(`Iniciando conversación con ${merchantName} (se redigiría a la página de mensajes)`);
            });
        });
    }
    
    // Botones de verificación
    const verificationButtons = document.querySelectorAll('.option-card .btn-outline');
    
    if (verificationButtons.length > 0) {
        verificationButtons.forEach(button => {
            button.addEventListener('click', function() {
                const verificationType = this.closest('.option-card').querySelector('h4').textContent;
                console.log(`Subiendo documentos para: ${verificationType}`);
                // Aquí se implementaría la lógica para subir documentos
                // Por ejemplo, abrir un selector de archivos o un formulario de carga
                
                // Simulación de selector de archivos
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.multiple = true;
                fileInput.click();
                
                fileInput.addEventListener('change', function() {
                    if (this.files.length > 0) {
                        const fileNames = Array.from(this.files).map(file => file.name).join(', ');
                        alert(`Archivos seleccionados: ${fileNames}\n(En una implementación real, estos archivos se subirían al servidor)`);
                    }
                });
            });
        });
    }
    
    // Botón de continuar verificación
    const continueVerificationButton = document.querySelector('.verification-actions .btn-primary');
    
    if (continueVerificationButton) {
        continueVerificationButton.addEventListener('click', function() {
            console.log('Continuando con el proceso de verificación');
            // Aquí se implementaría la lógica para avanzar al siguiente paso
            // Por ejemplo, enviar los documentos y actualizar el estado
            
            // Simulación de avance al siguiente paso
            const currentStep = document.querySelector('.step.active');
            const nextStep = currentStep.nextElementSibling;
            
            if (nextStep) {
                currentStep.classList.remove('active');
                currentStep.classList.add('completed');
                
                const currentStepStatus = currentStep.querySelector('.step-status');
                currentStepStatus.innerHTML = '<i class="fas fa-check-circle"></i><span>Completado</span>';
                
                nextStep.classList.add('active');
                const nextStepStatus = nextStep.querySelector('.step-status');
                nextStepStatus.innerHTML = '<i class="fas fa-clock"></i><span>En Proceso</span>';
                
                // Actualizar contenido principal
                alert('Documentos enviados correctamente. Avanzando al siguiente paso: ' + nextStep.querySelector('h3').textContent);
            }
        });
    }
});