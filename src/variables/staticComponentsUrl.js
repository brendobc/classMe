/**
 * Arquivo responsável por ligar um componente estático à sua respectiva url
 */
const baseUrl = '/resources/components/';
const componentMap = new Map();

componentMap.set('input-busca', `${baseUrl}input-busca.html`);

export { componentMap }