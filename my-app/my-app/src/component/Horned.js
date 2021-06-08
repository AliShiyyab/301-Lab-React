import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Horned extends React.Component{
constructor(props) {
    super(props);
    this.state = {
        numOfHorned : 0
    }
}

increasNumOfHorned = () => {
    this.setState({
        numOfHorned : this.state.numOfHorned+1
    })
}



render(){
        return(
            <div>
             <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={this.props.url} onClick={this.increasNumOfHorned} />
             <Card.Body>
             <Card.Title>{this.props.title}</Card.Title>
             <Card.Text>
              ❤️ = {this.state.numOfHorned}
             </Card.Text>
             <Card.Text>
              {this.props.description}
             </Card.Text>
             </Card.Body>
             </Card>
            </div>
        )
    }
}


export default Horned;