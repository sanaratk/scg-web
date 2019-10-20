import React, { Component } from 'react';
import GetRestaurantAPI from '../../api/getRestaurants';
const API = new GetRestaurantAPI()

class FindRestaurants extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    const localData = localStorage.getItem('restaurant');
    if (localData === null || localData === 'undefined') {

      API.getData().then(response => {
        this.setState({
          data: response.data
        });
        localStorage.setItem('restaurant', JSON.stringify(response.data));
      });
    } else {
      this.setState({
        data: JSON.parse(localData)
      })
    }
  }

  render() {
    if (this.state.data === undefined || this.state.data === []) {
      return (
        <div className="container-fluid">
          <div className="content-container">
            <p>
              Find Bang Sue restaurants
          </p>
            Please run api
          </div>
        </div>
      )
    }else{
      return (
        <div className="container-fluid">
          <div className="content-container">
            <div className="row">
              {this.state.data.map((object, index) => (
                <div className="col-sm-12 col-md-3">
                  <div className="card" key={index} >
                    <img className="card-img-top" src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${object.photos[0].photo_reference}&sensor=false&maxheight=250&maxwidth=300&key=AIzaSyAAx50iyb6a1pLEQcwdB6QAkpnAWTe4jAQ`} alt={object.name} />
                    <div className="card-body">
                      <h5 className="card-title">{object.name}</h5>
                      <p className="card-text adress">{object.vicinity}</p>
                      <p className="card-text">Rating : {object.rating} <a target="_blank" href={`https://maps.google.com/?q=${object.geometry.location.lat},${object.geometry.location.lng}`} className="btn btn-primary float-right">View map</a></p>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  }
}
export default FindRestaurants;

