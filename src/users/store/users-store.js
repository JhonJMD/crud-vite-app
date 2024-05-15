import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async () => {
    const users = await loadUsersByPage( state.currentPage + 1 );
}


const loadPreviousPage = async () => {
    throw new Error('No implementado');
}
/**
*
* @param {User} updatedUser
*/
const onUserChanged = () => {
    throw new Error('No implementado');
}
const reloadPage = async () => {
    throw new Error('No implementado');
}
export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    /**
    * @returns {User[]}
    */
    getUsers: () => [...state.users],
    /**
    * @returns {Number}
    */
    getCurrentPage: () => state.currentPage,
}