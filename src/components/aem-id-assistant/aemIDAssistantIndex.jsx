import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Dropdown, InlineCheckboxes, CustomButton, FloatingInput, FloatingInputWithButton } from '../forms/FormIndex';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function AemIDAssistantIndex() {
    const [aemId, setAemId] = useState();
    return (
        <Container>
            <Row>
                <Col>
                    <FloatingInputWithButton label="Insert AEM ID" id="aemId" type="aemID" buttonText="Submit" onChange={(e) => setAemId(e.target.value)} />

                </Col>
            </Row>
            <Row>
                <Col>
                    <FloatingInputWithButton label="Asset Name Will Appear here" id="aemIdName" type="text" buttonText="Copy ID" onChange={(e) => setAemId(e.target.value)} />
                    <Alert key="success" variant="success">AEM ID passes all automated checks</Alert>

                </Col>
            </Row>
            <Row>
                <Col>
                    <Card bg="light" key="light" text="dark" className="mb-2">
                        <Card.Header>AEM ID Checks</Card.Header>
                        <Card.Body>
                            <Card.Title>AEM ID Info</Card.Title>
                            <Card.Text>
                                <p><strong>Brand:</strong> Halifax</p>
                                <p><strong>Device:</strong> App</p>
                                <p><strong>Asset Type:</strong> Big Prompt</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Col>
                <Col>
                    <Card bg="light" key="light" text="dark" className="mb-2">
                        <Card.Header>AEM ID Build</Card.Header>
                        <Card.Body>
                            <Card.Title>AEM Build Links</Card.Title>
                            <Card.Text>
                                <Button variant="link" href="#" className="disabled">Direct to Build</Button><br />
                                <Button variant="link" href="#">Direct to CF Folder</Button><br />
                                <Button variant="link" href="#">Direct to XF Folder</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="light" key="light" text="dark" className="mb-2">
                        <Card.Header>AEM ID API Checks</Card.Header>
                        <Card.Body>
                            <Card.Title>AEM Asset Detected</Card.Title>
                            <Card.Text>
                                <Alert key="danger" variant="danger">Duplicate detected, direct build link disabled!</Alert>
                                <p><a href="#">Link to Asset in AEM</a></p>
                            </Card.Text>    
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}   


export default AemIDAssistantIndex;