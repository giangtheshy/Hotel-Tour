

const dataNotification = [
  {
    id: 1,
    content: 'Đặt phòng giá tốt nhất và tích luỹ điểm thưởng ngay.',
    icon: '<i class="fas fa-times"></i>'
  },
  {
    id: 2,
    content: 'Một số quy định hủy phòng của Mytour, cùng chính sách "Đảm bảo hoàn tiền"',
    icon: '<i class="fab fa-ups"></i>'
  },
  {
    id: 3,
    content: 'Mytour.Vn với nhiều chính sách và dịch vụ hướng đến nhiều lợi ích',
    icon: '<i class="fab fa-usps"></i>'
  },
  {
    id: 4,
    content: 'Trở thành đối tác tiếp thị của Mytour để nhận nhiều ưu đãi và nhiều dịch vụ',
    icon: '<i class="fab fa-aws"></i>'
  },
  {
    id:5,
    content: 'Mytour Việt Nam là công ty chuyên cung cấp dịch vụ đặt phòng khách sạn',
    icon: '<i class="fab fa-aws"></i>'
  },
  {
    id: 6,
    content: 'Khi thực hiện đặt phòng khách sạn, quý khách cần',
    icon: '<i class="fab fa-viacoin"></i>'
  },
  {
    id: 7,
    content: 'Nhằm giúp khách hàng có thêm phương thức thanh toán tiện lợi hơn',
    icon: '<i class="fas fa-concierge-bell"></i>'
  },
]


const randomStart = Math.floor(Math.random()*7)

const displayNotification =() => {
  let result = ''
  for (let i = randomStart;i<dataNotification.length;i++){
    result += ` <div class="noti">
    <span class="icon-noti">${dataNotification[i].icon}</span>
    <span class="content-noti">${dataNotification[i].content}</span>
    <span class="remove-noti"><i class="remove-noti fas fa-times"></i></span>
  </div>`
  }
  return result;
}
export {displayNotification}