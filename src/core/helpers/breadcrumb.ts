import { Actions } from "~/stores/enums/StoreEnums";
import { useBreadcrumbsStore } from "~/stores/BreadcrumbsModule";

/**
 * Sets current page breadcrumbs
 * @param {string} pageTitle Current page title
 * @param {Array<string>} breadcrumbs Current page breadcrumbs
 */
export const setCurrentPageBreadcrumbs = (
  pageTitle: string,
  breadcrumbs: Array<string>
): void => {
  const breadcrumbsStore = useBreadcrumbsStore();
  breadcrumbsStore[Actions.SET_BREADCRUMB_ACTION]({
    title: pageTitle,
    pageBreadcrumbPath: breadcrumbs
  })
};

/**
 * Sets current page breadcrumbs
 * @param {string} title Current page title name
 */
export const setCurrentPageTitle = (title: string): void => {
  const breadcrumbsStore = useBreadcrumbsStore();
  breadcrumbsStore[Actions.SET_BREADCRUMB_ACTION]({
    title: title,
    pageBreadcrumbPath: []
  })
};
