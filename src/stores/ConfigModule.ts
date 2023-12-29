import { defineStore } from "pinia";
import objectPath from 'object-path';
import merge from 'deepmerge';
import layoutConfig from '~/core/config/DefaultLayoutConfig';
import { Actions } from '~/stores/enums/StoreEnums';

interface StoreInfo {
  config: object;
  initial: object;
}

export const useConfigStore = defineStore('configStore', {
  state: (): StoreInfo=> ({
    config: layoutConfig,
    initial: layoutConfig
  }),
  getters: {
  },
  actions: {
    [Actions.GET_LAYOUT_CONFIG](path?: string) {
      if(path) {
        return objectPath.get(this.config, path, layoutConfig);
      }
      return this.config;
    },
    [Actions.SET_LAYOUT_CONFIG](payload: typeof layoutConfig): void {
      this.config = payload;
    },
    [Actions.RESET_LAYOUT_CONFIG]() {
      this.config = Object.assign({}, this.initial);
    },
    [Actions.OVERRIDE_LAYOUT_CONFIG](): void {
      this.config = this.initial = Object.assign(
        {},
        this.initial,
        JSON.parse(window.localStorage.getItem("config") || "{}")
      );
    },
    [Actions.OVERRIDE_PAGE_LAYOUT_CONFIG](payload: object): void {
      this.config = merge(this.config, payload);
    }
  }
  })

