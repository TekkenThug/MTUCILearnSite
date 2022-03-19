export const state = () => ({
  isLoading: false,
})

export const mutations = {
  toggleLoader(state, isShow) {
    state.isLoading = isShow;
  }
}
