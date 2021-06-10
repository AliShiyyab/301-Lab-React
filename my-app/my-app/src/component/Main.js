import React from 'react';
import Horned from './Horned';
import CardGroup from 'react-bootstrap/CardGroup';
//import Data from './Data.json';

class Main extends React.Component{
    render(){
        return(
            <div>

           <CardGroup>

            {
                this.props.HornedData.map( (items,index) => {
                    return(<Horned
                        key = {index}
                        clickFunc={this.props.clickFunc}
                        url={items.image_url}
                        title={items.title} 
                        description={items.description} 
                        
                        />)
            })
        }

        </CardGroup>        
        </div>
        )
    }
}
export default Main;