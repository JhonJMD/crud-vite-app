import modalHtml from './render-modal.html?raw';

let modal;

export const renderModal = (element,callback) => {
    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';
    element.append(modal);
}