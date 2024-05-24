import Nav from 'react-bootstrap/Nav';

function B8() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link>Trang chủ</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Giới thiệu</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Liên hệ</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default B8;