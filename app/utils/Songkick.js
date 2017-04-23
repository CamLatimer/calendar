import Axios from 'axios';

function getEventData(area, year, month, endDate) {
  let minDate = `${year}-${("0" + (month+1)).slice(-2)}-01`;
  let maxDate = `${year}-${("0" + (month+1)).slice(-2)}-${("0" + (endDate)).slice(-2)}`;
  return Axios.get(`http://api.songkick.com/api/3.0/search/locations.json?query=${area}&apikey=${process.env.SONGKICK_KEY}`)
  .then((response) => {
    let myId = response.data.resultsPage.results.location[0].metroArea.id;
    return myId;
  })
  .then((id) => {
    let areaId = id;
    return Axios.get(`http://api.songkick.com/api/3.0/events.json?apikey=${process.env.SONGKICK_KEY}&location=sk:${areaId}&min_date=${minDate}&max_date=${maxDate}`)
    .then((response) => {
      return response.data.resultsPage.results.event.map(function(event){
        if((minDate !== maxDate) && (event.displayName.length > 25)){
            return {show: event.displayName.substr(0, 25) + '...', uri: event.uri, date: event.start.date.slice(-2)}
        } else{
          return {show: event.displayName, uri: event.uri, date: event.start.date.slice(-2)}
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
}

export { getEventData }
