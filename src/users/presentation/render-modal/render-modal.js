import modalHtml from './render-modal.html?raw';
import './render-modal.css';
import { User } from '../../models/user';

let modal, form;
let loadedUser = {};
/**
 * 
 * @param {String|Number} id 
 */
export const showModal = async(id) => {
    modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
}

export const renderModal = (element, callback) => {
    if (modal) return;
    
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');
    
    modal.addEventListener('click', (event) => {
        if (event.target.className === 'modal-container'){
            hideModal();
        }
    });

    element.append(modal);

    form.addEventListener('submit', async(event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const userData = {...loadedUser};

        for (const [key, value] of formData){
            if (key === 'balance'){
                userData[key] = +value;
                continue;
            }

            if (key === 'isActive'){
                userData[key] = (value === 'on') ? true : false;
                continue;
            }

            userData[key] = value;
        }

        await callback(userData);

        hideModal();
    });
}