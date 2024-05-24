import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
export default function B4() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Nguyễn Văn Nam
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Cài đặt</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Đổi mật khẩu</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Đăng xuất</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
