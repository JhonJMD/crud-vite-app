import './render-add-button.css';

export const renderAddButton = (element, callback) => {
    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append(fabButton);

    //TODO
    fabButton.addEventListener('click', () => {
        console.log('Llamada Externa');
        if(!callback) return;
        callback();
    });
    
}