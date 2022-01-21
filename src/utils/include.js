import { componentMap } from '../variables/staticComponentsUrl.js';

/**
 * Recebe um elemento e adiciona um componente estático pronto de acordo com o @param componentName
 * @param {Element} parentElement elemento que receberá um elemento filho
 * @param {String} componentName nome do elemento estático a ser adicionado no @param parentElement
 */
async function includeStaticElement(parentElement, componentName) {
    const urlComponent = componentMap.get(componentName);
    
    if(!parentElement || !urlComponent) {
        return;
    }

    const html = await fetch(urlComponent);
    let body = await html.text();
    
    parentElement.innerHTML = body;
}

export { includeStaticElement }