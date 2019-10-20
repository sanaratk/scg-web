import React, { Component } from 'react';

class MessagingAPI extends Component {
  render() {
      return (
        <div className="container-fluid">
          <div className="content-container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                QR code
              <img src="qrcod.png" alt="QR Code" />
              </div>
              <div className="col-sm-12 col-md-8">
                Source code
              <img src="code.png" alt="source code" />
              </div>
              <div className="col-sm-12">
                Flow diagram
              <img src="flow1.png" alt="flow diagram" />
                <img src="flow2.png" alt="flow diagram" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
export default MessagingAPI;

