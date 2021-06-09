import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import SelectBeast from './component/SelectBeast';
import Horned from './component/Data.json';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dataArray: Horned,
      show: false,
    }
  }
  openModal(){
    this.setState({show:true});
  }
  closeModal(){
    this.setState({show:false});
  }

  render(){
    return(
      <body>
        <Header/>
        <Main/>
        <Footer/>
        <SelectBeast show={this.state.show}
          closeModal={this.closeModal}
          description = {Horned.description}
          title = {Horned.title}
          image_url = {Horned.image_url}/>
      </body>
    ) 
  }
}

export default App; 