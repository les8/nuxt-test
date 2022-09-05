export const state = () => ({
  users: [
    {
      name: 'Vasya',
      id: 1,
    },
    {
      name: 'Valera',
      id: 2,
    },
    {
      name: 'Vitya',
      id: 3,
    },
  ],
})

export const getters = {
  getUsers(state) {
    return state.users
  },
}
