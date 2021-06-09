import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


export class SelectedBeast extends Component {
  render() {
    return (
      <body>
        <Modal show={this.props.show} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <img src={this.props.image_url} alt={this.props.title} />
            </div>
            <div>{this.props.description}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </body>
    );
  }
}

export default SelectedBeast;