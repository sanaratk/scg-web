import React, { Component} from 'react';
import GetXYZAPI from '../../api/getXYZ';
const API = new GetXYZAPI()

class FindXYZ extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  componentDidMount() {
    const localData = localStorage.getItem('xyz');
    if (localData === null || localData === 'undefined'){

      API.getData().then(response => {
        this.setState({
          data: response.data
        });
        localStorage.setItem('xyz',JSON.stringify(response.data));
      });
    }else{
      this.setState({
        data: JSON.parse(localData)
      })
    }
  }

  render() {
    if (this.state.data === undefined || this.state.data === []){
      return (
        <div className="container-fluid">
          <div className="content-container">
            <p>
              X, 5, 9, 15, 23, Y, Z
          </p>
           Please run api
          </div>
        </div>
      )
    }else{
      let myObj = this.state.data;
      let indexArr = [];
      let varArr = [];
      for (let x in myObj) {
        indexArr.push(x);
        varArr.push(myObj[x]);
      }
      return (
        <div className="container-fluid">
          <div className="content-container">
            <p>
              X, 5, 9, 15, 23, Y, Z
          </p>
            {indexArr.map((object, index) => (
              <p key={index}>{object} : {varArr[index]}</p>
            ))}
          </div>
        </div>
      )
    }

   
  }
}
export default FindXYZ;

