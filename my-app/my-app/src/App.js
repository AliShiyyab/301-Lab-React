import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';

class App extends React.Component{
  render(){
    return(
      <body>
      <Header/>
      <Main/>
      <Footer/>
      </body>
    )
  }
}

export default App;