import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
export default function B10() {
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>STT</th>
        <th>Họ và tên</th>
        <th>Giới tính</th>
        <th>Email</th>
        <th>Địa chỉ</th>
        <th>Chức năng</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>Nam Định</td>
        <td style={{display:'flex',gap:'10px'}}> 
            <Button variant="primary">Sửa</Button>
            <Button variant="success">Xóa</Button>
        </td>
      </tr>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>Nam Định</td>
        <td style={{display:'flex',gap:'10px'}}> 
            <Button variant="primary">Sửa</Button>
            <Button variant="success">Xóa</Button>
        </td>
      </tr>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>Nam Định</td>
        <td style={{display:'flex',gap:'10px'}}> 
            <Button variant="primary">Sửa</Button>
            <Button variant="success">Xóa</Button>
        </td>
      </tr>
    </tbody>
  </Table>
  )
}
