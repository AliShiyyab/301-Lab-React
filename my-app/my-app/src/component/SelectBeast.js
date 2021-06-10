import React from "react";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
//import Card from 'react-bootstrap/Card';
import './A.css';


 class SelectedBeast extends React.Component {
  render() {
    return (
      <div>
        <Modal className='ModalAli' show={this.props.display} onHide={this.props.closeModal}>
          <Modal.Header >
          <Modal.Title>
          {this.props.SelectedBeast.title}
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <img src={this.props.SelectedBeast.image_url} alt = ''></img>
          {this.props.SelectedBeast.description}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeModal}> Close </Button>
          </Modal.Footer>
        </Modal>
        </div>
    );
  }
}

export default SelectedBeast;