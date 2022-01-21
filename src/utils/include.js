const baseUrl = '/resources/components/';

/**
 * TODO: explanation
 * @param {Element} parentElement elemento que receberá um elemento filho
 * @param {String} url endereço do arquivo com o html a ser adicionado no @param parentElement
 */
async function include(parentElement, url) {
    const html = await fetch(`${baseUrl}${url}.html`);
    let body = await html.text();

    const dataset = parentElement.dataset;
    let paramName = '';
    for(const d in dataset) {

        if(!d.startsWith('param')){
            continue;
        }

        paramName = d.replace('param', '');
        paramName = paramName.charAt('0').toLowerCase() + paramName.slice(1);
        body = body.replace('${' + paramName + '}', dataset[d]);
    }
    
    parentElement.innerHTML = body;
}

function montarHTML() {

}

export { include }