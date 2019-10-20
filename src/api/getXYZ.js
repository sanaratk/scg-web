import axios from 'axios';

export default class GetXYZAPI {
  getData = () => {
    return axios
      .get('http://localhost:3030/findXYZ')
      .then(function(response) {
          console.log("response", response);
        if (response.status === 200 && response != null) {
          var data = response.data
          return data
        } else {
          throw new Error('Empty data')
        }
      })
      .catch(function(error) {
        console.log(error)
        return [] // Return empty array in case error response.
      })
  }
}