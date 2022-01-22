/**
 * Arquivo com o propósito de executar funções automaticamente
 */
import onElementLoaded from '../utils/onElementLoaded.js';
import { includeStaticElement } from '../utils/include.js';

onElementLoaded('[data-static-include]', async () => {
    const parentElements = document.querySelectorAll('[data-static-include]');

    for(let el of parentElements) {
        await includeStaticElement(el, el.getAttribute('data-static-include'));
    }
});