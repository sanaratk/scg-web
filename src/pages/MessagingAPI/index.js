import React, { Component } from 'react';
import GetXYZAPI from '../../api/getXYZ';

class MessagingAPI extends Component {
  render() {
      return (
        <div className="container-fluid">
          <div className="content-container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                QR code
              <img src="qrcod.png" />
              </div>
              <div className="col-sm-12 col-md-8">
                Source code
              <img src="code.png" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
export default MessagingAPI;

