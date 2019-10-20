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
import PageFooter from './modules/PageFooter';
import SCGController from './routers/SCGController';

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <SCGController />
        <PageFooter />
      </div>
    );
  }
}

export default App;

