import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import SelectedBeast from './component/SelectBeast';
import HornedData from './component/Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './component/Form';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      HornedData: HornedData,
      show: false,
      SelectedBeast:'',
      hornedNumber: 'All'
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

  getHorned = (event) =>{
    this.setState({
      hornedNumber: event.target.value
    });
  }
  render(){
    return(
      <body>
        <Header/>
        <Form getHorned={this.getHorned} />
        <Main HornedData = {this.state.HornedData} clickFunc={this.clickFunc} hornedNumber={this.state.hornedNumber} />
        <SelectedBeast display={this.state.show} closeModal = {this.closeModal} SelectedBeast={this.state.SelectedBeast}/>
        <Footer/>
      </body>
    ) 
  }
}

export default App; 