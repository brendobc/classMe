/**
 * Executa a inicialização do componente 'input-busca'
 */
import onElementLoaded from '../utils/onElementLoaded.js';

onElementLoaded('.form-input-busca',  () => {
    const forms = document.querySelectorAll('.form-input-busca');
    
    Array.prototype.forEach.call(forms, (form) => {
        form.insertAdjacentHTML('beforeend', `<i class="reset-input">X</i>`);

        const reset = form.querySelector('.reset-input');
        const input = form.querySelector('.input-busca');

        input.addEventListener('focus', () => {
            reset.style.display = 'block';
        });

        input.addEventListener('blur', () => {
            reset.style.display = '';
        });
    });
});