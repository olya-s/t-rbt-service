import { GET_ALL_CATEGORIES, GET_ALL_CONTENT, GET_CONTENT, LOGIN, LOGOUT, PURCHASE, ERROR, RESET, SEARCH, PATH } from './actions';
// import { combineReducers } from 'redux';

const initialLogin = localStorage.login && JSON.parse(localStorage.login);
const initialPassw = localStorage.passw && JSON.parse(localStorage.passw);

const initialState = {login: initialLogin, passw: initialPassw};

export const reducer = (state = initialState, action) => {
	switch(action.type){
		case GET_ALL_CATEGORIES:
			const allCategories = action.payload;
			const categories = allCategories.filter(el => el.contentCatId % 10 === 0);
			const sortedCategories = {};
			for(let i=0; i<categories.length; i++){
				sortedCategories[categories[i].contentCatId] = {
					'category': categories[i],
					'subCategories': allCategories.filter(elem => elem.parentCatId === categories[i].contentCatId)
				}
			}
			return {
				...state,
				allCategories,
				categories,
				sortedCategories
			}
		case GET_ALL_CONTENT:
			return {
				...state,
				allContent: action.payload
			}
		case GET_CONTENT:
			return {
				...state,
				content: action.payload,
				search: null
			}
		case LOGIN:
			localStorage.setItem('login', JSON.stringify(action.payload.login));
			localStorage.setItem('passw', JSON.stringify(action.payload.passw));
			return {
				...state,
				login: action.payload.login,
				passw: action.payload.passw
			}
		case LOGOUT:
			delete localStorage.login;
			delete localStorage.passw;
			return {
				...state,
				login: localStorage.login,
				passw: localStorage.passw
			}
		case PURCHASE:
			return {
				...state,
				message: action.payload
			}
		case ERROR:
			return {
				...state,
				error: action.payload
			}
		case RESET:
			return {
				...state,
				message: action.payload,
				error: action.payload
			}
		case SEARCH:
			return {
				...state,
				search: action.payload
			}
		case PATH:
			console.log(action.payload);
			return {
				...state,
				path: action.payload
			}
		default:
			return state;
	}
}