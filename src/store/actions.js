import { getAllCategoriesList, getAllContentList, getContentList, authorizeUser, purchaseMelody, searchContentItem } from './services';

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_CONTENT = 'GET_CONTENT';
export const GET_ALL_CONTENT = 'GET_ALL_CONTENT';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const PURCHASE = 'PURCHASE';
export const ERROR = 'ERROR';
export const RESET = 'RESET';
export const SEARCH = 'SEARCH';
export const PATH = 'PATH';

const getAllCategories = () => {
  return dispatch => {
    getAllCategoriesList()
    .then(response => {
      const allCategories = response.data.searchResult.element;
      // const categories = allCategories.filter(el => el.contentCatId % 10 === 0);
      // const sortedCategories = {};
      // for(let i=0; i<categories.length; i++){
      //   sortedCategories[categories[i].contentCatId] = {
      //     'category': categories[i],
      //     'subCategories': allCategories.filter(elem => elem.parentCatId === categories[i].contentCatId)
      //   }
      // };
      // const data = {
      //   allCategories,
      //   categories,
      //   sortedCategories
      // }
      return dispatch({
        type: GET_ALL_CATEGORIES,
        payload: allCategories
      })
    })
    .catch(error =>
      dispatch({
        type: ERROR,
        payload: error.statusText
      })
    )
  }
}

const getAllContent = () => {
  return dispatch => {
    getAllContentList()
    .then(response => {
      const allContent = response.data.searchResult.element;
      return dispatch({
        type: GET_ALL_CONTENT,
        payload: allContent
      })
    })
    .catch(error =>
      dispatch({
        type: ERROR,
        payload: error
      })
    )
  }
}

const getContent = (category) => {
  return dispatch => {
    getContentList(category)
    .then(response => {
      const content = response.data.searchResult && response.data.searchResult.element
      return dispatch({
        type: GET_CONTENT,
        payload: content
      })
    })
    .catch(error =>
      dispatch({
        type: ERROR,
        payload: error
      })
    )
  }
}

const authorize = (tel, passw) => {
  console.log("auth");
  return dispatch => {
    authorizeUser(tel,passw)
    .then(response => 
      dispatch({
        type: LOGIN,
        payload: {
          login: response.data,
          passw: passw
        }
      })
    )
    .catch(err =>
      dispatch({
        type: ERROR,
        payload: "Wrong user or password"
      })
    )
  }
}

const logout = () => ({
  type: LOGOUT,
  payload: null
})

const resetMesForm = () => ({
  type: RESET,
  payload: null
})

const purchase = (subsIdent, passw, contentNo) => {
  return dispatch => {
    purchaseMelody(subsIdent, passw, contentNo)
    .then(response => 
      dispatch({
        type: PURCHASE,
        payload: "Congrads! You make a purchase"
      })
    )
    .catch(err => 
      dispatch({
        type: PURCHASE,
        payload: "Sorry, you cannot make a purchase"
      })
    )
  }
}

const searchContent = (title) => {
  return dispatch => {
    console.log(title);
    searchContentItem(title)
    .then(response => {console.log(response);
      const search = {
        title: title,
        content: response.data.searchResult.element
      }
      return dispatch({
        type: SEARCH,
        payload: search
      })
    })
    .catch(error =>
      dispatch({
        type: ERROR,
        payload: "No search result"
      })
    )
  }
}

const setPath = data => ({
  type: PATH,
  payload: data
})

export { getAllCategories, getAllContent, getContent, authorize, logout, resetMesForm, purchase, searchContent, setPath };