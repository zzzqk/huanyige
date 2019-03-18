 /* jshint esversion: 6 */
export const fetchUrl = "http://localhost:3333/data/info";
export default {

  getData(cb){
    fetch(fetchUrl).then(res => {
      res.json().then(data => {
        cb(data);
      });
    });
  }

};
