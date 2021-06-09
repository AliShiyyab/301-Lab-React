import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import SelectedBeast from './component/SelectBeast';
import HornedData from './component/Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      HornedData: HornedData,
      show: false,
      SelectedBeast:'',
      
    }
  }
  
  closeModal = () => {
    this.setState({show:false});
  }

  clickFunc = (title) => {
    // eslint-disable-next-line array-callback-return
    let SelectedBeast = HornedData.find(item => {
      if (item.title === title){
        return item;
      }
    })
    this.setState({
      SelectedBeast:SelectedBeast,
      show: true,
    });
  }

  render(){
    return(
      <body>
        <Header/>
        <Main HornedData = {this.state.HornedData} openModal={this.openModal} clickFunc={this.clickFunc} />
        <SelectedBeast display={this.state.show} closeModal = {this.closeModal} SelectedBeast={this.state.SelectedBeast}/>
        <Footer/>
      </body>
    ) 
  }
}

export default App; 