import axios from 'axios';

export default class GetRestaurantAPI {
  getData = () => {
    return axios
      .get('http://localhost:3030/findRestaurant')
      .then(function(response) {
        if (response.status === 200 && response != null) {
          var data = response.data
          return data
        } else {
          throw new Error('Empty data')
        }
      })
      .catch(function(error) {
        return [] // Return empty array in case error response.
      })
  }
}