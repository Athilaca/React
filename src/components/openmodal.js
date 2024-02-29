import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const OpenModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [content, setContent] = useState("Initial content"); // State to hold the editable content

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleContentChange = (event) => {
        setContent(event.target.value); // Update content state with user input
    };

    const handleSaveChanges = () => {
        // Logic to save changes (for example, send content to backend or update state)
        console.log("Content saved:", content);
        handleClose(); // Close the modal after saving changes
    };

    return (
        <div>
            {/* Button to toggle the modal */}
            <Button variant="primary" onClick={handleShow}>
                Open Modal
            </Button>

            {/* Modal component */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Content</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Textarea for editing content */}
                    <textarea
                        value={content}
                        onChange={handleContentChange}
                        style={{ width: '100%', minHeight: '200px' }}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default OpenModal;
