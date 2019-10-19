// import React, { Component } from 'react'
// import Routing from './routes/controller'
// import PageHeader from './modules/PageHeader';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <PageHeader />
//         <Routing />
//       </React.Fragment>
//     );
//   }
// }

// export default App

import React, { Component } from 'react';
import './App.css';
import PageHeader from './modules/PageHeader';
import SCGController from './routers';

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <SCGController />
      </div>
    );
  }
}

export default App;

