import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function FloatingInput({ label, id, type = "text", maxLength, minLength, onChange }) {
  return (
    <FloatingLabel controlId={id} label={label} className="mb-3 float-test-input">
      <Form.Control className=""
        type={type}
        maxLength={maxLength}
        minLength={minLength}
        onChange={onChange}
        placeholder={label}
      />
    </FloatingLabel>
  );
}
function FloatingInputWithButton({ label, id, type = "text", maxLength, minLength, onChange, buttonText }) {
  return (
    <InputGroup className="mb-3" controlId={id}>
      
        <Form.Control className=""
          type={type}
          maxLength={maxLength}
          minLength={minLength}
          onChange={onChange}
          placeholder={label}
        />
        
        <Button variant="outline-secondary" id="button-addon1" style={{ width: '100px' }}>
            {buttonText}
        </Button>
      
    </InputGroup>
  );
}

export { FloatingInput, FloatingInputWithButton };