import { computed } from "vue";
import { useConfigStore } from "~/stores/ConfigModule";
import { Actions } from "~/stores/enums/StoreEnums";

/**
 * Returns layout config
 * @returns {object}
 */
export const config = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]();
});

/**
 * Set the sidebar display
 * @returns {boolean}
 */
export const displaySidebar = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]("sidebar.display");
});

/**
 * Check if footer container is fluid
 * @returns {boolean}
 */
export const footerWidthFluid = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]("footer.width") === "fluid";
});

/**
 * Check if header container is fluid
 * @returns {boolean}
 */
export const headerWidthFluid = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]("header.width") === "fluid";
});

/**
 * Returns header left part type
 * @returns {string}
 */
export const headerLeft = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]("header.left");
});

/**
 * Returns header fixed on desktop
 * @returns {boolean}
 */
export const headerFixed = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]("header.fixed.desktop");
});

/**
 * Returns header fixed on tablet and mobile
 * @returns {boolean}
 */
export const headerFixedOnMobile = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]("header.fixed.tabletAndMobile");
});

/**
 * Set the aside display
 * @returns {boolean}
 */
export const asideDisplay = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]("aside.display") === true;
});

/**
 * Check if toolbar width is fluid
 * @returns {boolean}
 */
export const toolbarWidthFluid = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]("toolbar.width") === "fluid";
});

/**
 * Set the toolbar display
 * @returns {boolean}
 */
export const toolbarDisplay = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]("toolbar.display");
});

/**
 * Check if the page loader is enabled
 * @returns {boolean}
 */
export const loaderEnabled = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]("loader.display");
});

/**
 * Check if container width is fluid
 * @returns {boolean}
 */
export const contentWidthFluid = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]("content.width") === "fluid";
});

/**
 * Page loader logo image
 * @returns {string}
 */
export const loaderLogo = computed(() => {
  const configStore = useConfigStore();
  return import.meta.env.VITE_BASE_URL + configStore[Actions.GET_LAYOUT_CONFIG]("loader.logo");
});

/**
 * Check if the aside menu is enabled
 * @returns {boolean}
 */
export const asideEnabled = computed(() => {
  const configStore = useConfigStore();
  return !!configStore[Actions.GET_LAYOUT_CONFIG]("aside.display");
});

/**
 * Set the aside theme
 * @returns {string}
 */
export const asideTheme = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]("aside.theme");
});

/**
 * Set the subheader display
 * @returns {boolean}
 */
export const subheaderDisplay = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]("toolbar.display");
});

/**
 * Set the aside menu icon type
 * @returns {string}
 */
export const asideMenuIcons = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]("aside.menuIcon");
});

/**
 * Light theme logo image
 * @returns {string}
 */
export const themeLightLogo = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]("main.logo.light");
});

/**
 * Dark theme logo image
 * @returns {string}
 */
export const themeDarkLogo = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]("main.logo.dark");
});

/**
 * Set the header menu icon type
 * @returns {string}
 */
export const headerMenuIcons = computed(() => {
  const configStore = useConfigStore();
  return configStore[Actions.GET_LAYOUT_CONFIG]("header.menuIcon");
});
