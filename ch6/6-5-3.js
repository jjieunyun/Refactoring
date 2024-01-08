//전체 객체를 받고있다. state만 받아오도록 수정
export function inNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}
