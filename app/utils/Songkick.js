import Axios from 'axios'

export default function getEventData(area) {
  return Axios.get(`http://api.songkick.com/api/3.0/search/locations.json?query=${area}&apikey=${process.env.SONGKICK_KEY}`)
  .then((response) => {
    let myId = response.data.resultsPage.results.location[0].metroArea.id;
    return myId;
  })
  // .then((id) => {
  //   let areaId = id;
  //   return Axios.get(`http://api.songkick.com/api/3.0/events.json?apikey=${process.env.SONGKICK_KEY}&location=sk:${areaId}&min_date=${minDate}&max_date=${maxDate}`)
  //   .then((response) => {
  //     return response;
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // })
  .catch(function (error) {
    console.log(error);
  });
}
