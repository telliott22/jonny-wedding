export default {
  setCurrentPage({ commit }, page) {
    commit("setCurrentPage", page);
  },
  freezeScroll({ commit }) {
    const body = document.body;
    const html = document.getElementsByTagName("html")[0];
    body.classList.add("noscroll");
    html.classList.add("noscroll");
    commit("setOverlay", true);
  },
  unfreezeScroll({ commit }) {
    const body = document.body;
    const html = document.getElementsByTagName("html")[0];
    body.classList.remove("noscroll");
    html.classList.remove("noscroll");
    commit("setOverlay", false);
  },
  openNav({ commit, dispatch }) {
    dispatch("freezeScroll");

    commit("setNavOpen", true);
  },
  closeNav({ commit, dispatch }) {
    dispatch("unfreezeScroll");

    commit("setNavOpen", false);
  },
  toggleNav({ commit, state, dispatch }) {
    if (state.navOpen) {
      dispatch("unfreezeScroll");
      commit("setNavOpen", false);
    } else {
      dispatch("freezeScroll");
      commit("setNavOpen", true);
    }
  },
  toggleOverlay({ commit, state, dispatch }, display = false) {
    if (display === 1) {
      dispatch("freezeScroll");
    } else if (display === 0) {
      dispatch("unfreezeScroll");
    } else if (state.overlay) {
      dispatch("unfreezeScroll");
    } else {
      dispatch("freezeScroll");
    }
  },
};
