import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function B9() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);

  const existingEmails = ['example1@example.com', 'example2@example.com', 'example3@example.com'];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || isEmailDuplicate) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentEmail = event.target.value;
    setEmail(currentEmail);
    setIsEmailDuplicate(existingEmails.includes(currentEmail));
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-2">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            isInvalid={isEmailDuplicate}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {isEmailDuplicate ? 'This email is already taken.' : 'Please provide a valid email.'}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Password must be at least 6 characters long and include both letters and numbers.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Họ và tên</Form.Label>
          <Form.Control type="text" placeholder="Fullname" required />
          <Form.Control.Feedback type="invalid">
            Please provide your full name.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control type="text" placeholder="Address" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid address.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <div style={{ display: 'flex', width: '600px', gap: '20px' }}>
        <Form.Select aria-label="Default select example">
          <option>Thành phố</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select aria-label="Default select example">
          <option>Quận</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select aria-label="Default select example">
          <option>Mã bưu điện</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <br />
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default B9;
