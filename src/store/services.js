import axios from 'axios';

const url = "https://t-rbt.telesens.ua/t-rbt/subscriber";

function getAllCategoriesList(){
  const sParam = encodeURI(
    'p0=contentCategorySearch&p1=' +
      '{"searchParameters":{"pagination":{"offset":0,"pageSize":0},"sortOrder":[{"attribute":"OrderNo","ascending":true}]}}'
  );

  return axios({
    method: 'post',
    url: url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    data: sParam,
  })
}

function getAllContentList(){
  const sParam = encodeURI(
    'p0=contentSearch&p1={"subsIdent":"","password":"","serviceNo":-1,"searchParameters":{"pagination":' +
    '{"offset":0,"pageSize":50},"sortOrder":[{"attribute":"ContentNo","ascending":true}]}}'
  );

  return axios({
    method: 'post',
    url: url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    data: sParam,
  })
}

function getContentList(categoryNo){
  const sParam = encodeURI(
    'p0=contentSearch&p1={"searchParameters":{"pagination":{"offset":0,"pageSize":10},"searchFilter":' +
      `{"and":[{"equal":{"name":"ContentCatId","numberValue":${categoryNo}}}]},"sortOrder":[{"attribute":"ContentNo","ascending":true}]}}`
  );

  return axios({
    method: 'post',
    url: url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    data: sParam,
  })
}

function authorizeUser(subsIdent, passw){
  // console.log("authorize", subsIdent ,passw);
  const sParam = encodeURI(
    'p0=subscriberRetrieve&p1={"scope":{"returnGiftContent":true,"returnPersonalContent":true,"returnPlayConditions":' +
      `true,"returnPreservedContent":true,"ReturnPublicContent":true,"returnSubscriptions":true},"password":${passw},"subsIdent":${subsIdent}}`
  );

  return axios({
    method: 'post',
    url: url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    data: sParam,
  })
}

function purchaseMelody(subsIdent, passw, contentNo){
  const sParam = encodeURI(
    `p0=contentPurchase&p1={"password":${passw},"subsIdent":${subsIdent},"contentNoOrVirtContentNo":${contentNo},"serviceNoOrVirtServiceNo":1}`
  );

  return axios({
    method: 'post',
    url: url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    data: sParam,
  })
}

  // return axios({
  //   method: "post",
  //   url: "https://cors-anywhere.herokuapp.com/https://t-rbt.telesens.ua/t-rbt/subscriber",
  //   headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       "Accept": "application/json",
  //   },
  //   data: 'p0=contentPurchase&p1={"password":"'+ passw +'","subsIdent":"'+ subsIdent +'",'+
  //   ' "contentNoOrVirtContentNo":'+ contentNo +',"serviceNoOrVirtServiceNo":1}',
  //   })
  //   .then(response => {
  //       console.log(response.status);
  //   })
  //   .catch(error => {
  //       console.log(error);
  //   });
  // }

function searchContentItem(title){

  const sParam = encodeURI(
    'p0=contentSearch&p1={"searchParameters":{"pagination":{"offset":0,"pageSize":24},"searchFilter"'+
        `:{"or":[{"like":{"name":"Title","stringValue":"%${title}%"}},{"like":{"name"`+
        `:"Artist","stringValue":"%${title}%"}}]},"sortOrder":[{"attribute":"ContentNo","ascending":true}]}}`);

  return axios({
    method: 'post',
    url: url,    
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    data: sParam
  })
}

export { getAllCategoriesList, getAllContentList, getContentList, authorizeUser, purchaseMelody, searchContentItem };