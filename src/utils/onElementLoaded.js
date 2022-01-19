export default function onElementLoaded(query, call){
    const element =  document.querySelector(query);

    if(element) {
        call();
    }
}