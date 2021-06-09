import React from 'react';
import Horned from './Horned';
import CardGroup from 'react-bootstrap/CardGroup';

class Main extends React.Component{
    render(){
        return(
            <body>

           <CardGroup>

            {
                this.props.dataArray.map( items => {
                    return(<Horned title={items.title} 
                           description={items.description} 
                           url={items.image_url}
                           openModal={this.props.openModal()}
                           />)
            })
        }

        </CardGroup>        
        </body>
        )
    }
}
export default Main;