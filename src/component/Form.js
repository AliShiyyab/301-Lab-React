import React from 'react' ;
import './Forrm.css';
import Form from 'react-bootstrap/Form';


class Forms extends React.Component{
    render(){
        return(
            <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label className='Label'>Please returned the number of horned you are need to retrevied and the default is All hourns : </Form.Label>
                    <Form.Control as="select" custom onChange={this.props.getHorned} style={{ width :'80px'} } >
                        <option>All</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>100</option>
                    </Form.Control>
                    </Form.Group>
            </Form>
        )
    }
}

export default Forms;