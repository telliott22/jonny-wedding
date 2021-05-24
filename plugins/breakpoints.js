import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "~/tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

export default ({ store }) => {
  if (process.client) {
    const handleResize = () => {
      const isMobile = window.innerWidth < store.state.pages.breakpoints.md;
      if (isMobile !== store.state.pages.mobile) {
        store.commit("pages/setMobile", isMobile);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }
  let screens = Object.entries(fullConfig.theme.screens).map((screen) => {
    const label = screen[0];
    const size = screen[1];
    return { [label]: parseInt(size.replace("px", "")) };
  });
  screens = Object.assign({}, ...screens);
  store.commit("pages/setBreakpoints", screens);
};
