/* eslint-disable no-param-reassign */

export const state = () => ({
  /**
   * True, if page in loading state
   * @type {boolean}
   */
  isLoading: false,
});

export const mutations = {
  /**
   * Toggle loader state
   * @param {state} state - current module state
   * @param {boolean} isShow - loading state value
   */
  toggleLoader(state, isShow) {
    state.isLoading = isShow;
  },
};
