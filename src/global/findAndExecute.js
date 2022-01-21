/**
 * Arquivo com o propósito de executar funções automaticamente
 */
import onElementLoaded from '../utils/onElementLoaded.js';
import { includeStaticElement } from '../utils/include.js';

onElementLoaded('[data-static-include]', () => {
    const parentElements = document.querySelectorAll('[data-static-include]');

    Array.prototype.forEach.call(parentElements, (el) => {
        includeStaticElement(el, el.getAttribute('data-static-include'));
    });
});