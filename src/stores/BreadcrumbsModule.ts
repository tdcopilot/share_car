import { Actions } from "~/stores/enums/StoreEnums";
import { defineStore } from "pinia";

interface Breadcrumb {
  title: string;
  pageBreadcrumbPath: Array<string>;
}

interface StoreInfo {
  breadcrumbs: Breadcrumb;
}

export const useBreadcrumbsStore = defineStore('BreadcrumbsStore', {
  state(): StoreInfo {
    return {
      breadcrumbs: {
        title: '',
        pageBreadcrumbPath: [],
      }
    }
  },
  getters: {
    getBreadcrumbs(): Breadcrumb {
      return this.breadcrumbs;
    },
    pageBreadcrumbPath(): Array<string> {
      return this.breadcrumbs.pageBreadcrumbPath;
    },
    pageTitle(): string {
      return this.breadcrumbs.title;
    }
  },
  actions: {
    [Actions.SET_BREADCRUMB_ACTION](payload: Breadcrumb) {
      this.breadcrumbs = payload;
    },
  }
})
