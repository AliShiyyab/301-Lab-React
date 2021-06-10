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
      SelectedBeast: {}
      
    }
  }
  
  closeModal = () => {
    this.setState({show:false});
  }

  clickFunc = (title) => {
    // eslint-disable-next-line array-callback-return
    const SelectedBeast = HornedData.find(element => element.title === title)

    this.setState({
      SelectedBeast:SelectedBeast,
      show: true
    }); 
    console.log(SelectedBeast);
  }

  render(){
    console.log(this.state.show);
    console.log(this.state.SelectedBeast);
    return(
      <div>
        <Header/>
        <Main HornedData = {this.state.HornedData} clickFunc={this.clickFunc} />
        <SelectedBeast display={this.state.show} closeModal = {this.closeModal} SelectedBeast={this.state.SelectedBeast}/>
        <Footer/>
      </div>
    ) 
  }
}

export default App; 