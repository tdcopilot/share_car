import { defineStore } from "pinia";

import { Actions } from "~/stores/enums/StoreEnums";

export interface StoreInfo {
  classes: {
    [key: string]: Array<string>
  };
}

export const useBodyStore = defineStore('BodyStore', {
  state(): StoreInfo {
    return {
      classes: {}
    }
  },
  getters: {

    /**
     * Get current page title
     * @returns string
     */
    getClasses(): (position: string) => Array<string> | StoreInfo['classes'] {
      return (position: string) => {
        if (typeof position !== "undefined") {
          return this.classes[position];
        }
        return this.classes;
      };
    }
  },
  actions: {
    [Actions.ADD_CLASSNAME](payload: { position: string, className: string }) {
      const { position, className } = payload;
      if (!this.classes[position]) {
        this.classes[position] = [];
      }
      this.classes[position].push(className);
    },
    [Actions.ADD_BODY_CLASSNAME](className: string) {
      document.body.classList.add(className);
    },
    [Actions.REMOVE_BODY_CLASSNAME](className: string) {
      document.body.classList.remove(className);
    },
    [Actions.ADD_BODY_ATTRIBUTE](payload: { qulifiedName: string, value: string }) {
      const { qulifiedName, value } = payload;
      document.body.setAttribute(qulifiedName, value);
    },
    [Actions.REMOVE_BODY_ATTRIBUTE](payload: { qulifiedName: string }) {
      const { qulifiedName } = payload;
      document.body.removeAttribute(qulifiedName);
    }
  }
})
