export default {
  setCurrentPage(state, page) {
    state.currentPage = page;
  },
  setResources(state, resources) {
    state.resources = resources;
  },
  setPageData(state, response) {
    if (response && response.page && response.page.content) {
      state.page = response.page.content;
    }
    if (response && response.navs) {
      const mainNav = response.navs.filter((nav) => nav.name === "header");
      state.navs.main = mainNav ? mainNav[0] : [];

      const mobileNav = response.navs.filter((nav) => nav.name === "mobile");
      state.navs.mobile = mobileNav ? mobileNav[0] : [];

      const footerNav = response.navs.filter((nav) => nav.name === "footer");
      state.navs.footer = footerNav ? footerNav[0] : [];
    }
    if (response && response.articles) {
      state.articles = response.articles;
    }
    if (response && response.siteSettings) {
      state.siteSettings = response.siteSettings;
    }
  },
  setPreviewMode(state, value) {
    state.previewMode = value;
  },
  setPreviewData(state, value) {
    state.previewData = value;
  },
  setMobile(state, value) {
    state.mobile = value;
  },
  setNavOpen(state, value) {
    state.navOpen = value;
  },
  setNavData(state, value) {
    state.navs = value;
  },
  setSocialMediaLinks(state, value) {
    state.socialMediaLinks = value;
  },
  setOverlay(state, value) {
    state.overlay = value;
  },
  setBreakpoints(state, value) {
    state.breakpoints = value;
  },
};
