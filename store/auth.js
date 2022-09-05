export const state = () => ({
  isAuth: false,
});

export const getters = {
  getAuth(state) {
    return state.isAuth;
  },
};
