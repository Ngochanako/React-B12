import React from 'react'
import Toast from 'react-bootstrap/Toast';
export default function B7() {
  return (
    <Toast>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
      <strong className="me-auto">Cảnh báo</strong>
      <small>11 mins ago</small>
    </Toast.Header>
    <Toast.Body>Lỗi kết nối máy chủ.</Toast.Body>
  </Toast>
  )
}
