import React from 'react';
import Horned from './Horned';
import CardGroup from 'react-bootstrap/CardGroup';
//import Data from './Data.json';

class Main extends React.Component{
    render(){
        return(
            <body>

           <CardGroup>

            {
                this.props.HornedData.map( (items,index) => {
                    if(this.props.hornedNumber === 'All'){    
                        return(<Horned
                            key = {index}
                            clickFunc={this.props.clickFunc}
                            url={items.image_url}
                            title={items.title} 
                            description={items.description} />)
                        }
                    else if(items.horns == this.props.hornedNumber){    
                        return(<Horned
                            key = {index}
                            clickFunc={this.props.clickFunc}
                            url={items.image_url}
                            title={items.title} 
                            description={items.description} />)
                        }
            })
        }

        </CardGroup>        
        </body>
        )
    }
}
export default Main;