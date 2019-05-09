const defaultState = {
  menus: [
    { id: 1, name: '管理员列表', icon: 'user', href: '/' },
    { id: 2, name: '订单列表', icon: 'file-protect', href: '/order' }
  ]
}

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      break;
  }
  return state;
}

