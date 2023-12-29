import ApiService from "~/core/services/ApiService";
import JwtService from "~/core/services/JwtService";
import { Actions } from "~/stores/enums/StoreEnums";
import { defineStore } from "pinia";
import { AxiosRequestConfig } from "axios";

export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  token: string;
}

export interface UserAuthInfo {
  errors: Array<string>;
  user: User;
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore('AuthStore', {
  state(): UserAuthInfo {
    return {
      errors: [],
      user: {
        name: '',
        surname: '',
        email: '',
        password: '',
        token: '',
      },
      isAuthenticated: !!JwtService.getToken()
    }
  },
  getters: {
    /**
     * Get current user object
     * @returns User
     */
    currentUser(): User {
      return this.user;
    },
    /**
     * Verify user authentication
     * @returns boolean
     */
    isUserAuthenticated(): boolean {
      return this.isAuthenticated;
    },

    /**
     * Get authentification errors
     * @returns array
     */
    getErrors(): Array<string> {
      return this.errors;
    }
  },
  actions: {
    [Actions.SET_ERROR](error: UserAuthInfo['errors']) {
      this.errors = error;
    },
    [Actions.SET_AUTH](user: User) {
      this.isAuthenticated = true;
      this.user = user;
      this.errors = [];
      JwtService.saveToken(this.user.token);
    },
    [Actions.SET_USER](user: User) {
      this.user = user;
    },
    [Actions.SET_PASSWORD](password: string) {
      this.user.password = password;
    },
    [Actions.LOGOUT]() {
      this.isAuthenticated = false;
      this.user = {} as User;
      this.errors = [];
      JwtService.destroyToken();
    },
    [Actions.LOGIN](credentials: AxiosRequestConfig) {
      return new Promise<void>((resolve, reject) => {
        // ApiService.post("login", credentials)
        //   .then(({ data }) => {

        this[Actions.SET_AUTH]({
             name: "Name",
             surname: "Surname",
             email: "admin@demo.com",
             password: "demo",
             token: "mgfi5juf74j"
           });

        //     this[Actions.SET_AUTH](data);
            resolve();
          // })
          // .catch(({ response }) => {
          //   this[Actions.SET_ERROR](response.data.errors);
          //   reject();
          // });
      });
    },
    [Actions.REGISTER](credentials: AxiosRequestConfig) {
      return new Promise<void>((resolve, reject) => {
        ApiService.post("registration", credentials)
          .then(({ data }) => {
            this[Actions.SET_AUTH](data);
            resolve();
          })
          .catch(({ response }) => {
            this[Actions.SET_ERROR](response.data.errors);
            reject();
          });
      });
    },
    [Actions.FORGOT_PASSWORD](payload: AxiosRequestConfig) {
      return new Promise<void>((resolve, reject) => {
        ApiService.post("forgot_password", payload)
          .then(({ data }) => {
            this[Actions.SET_AUTH](data);
            resolve();
          })
          .catch(({ response }) => {
            console.log(response.data.errors);
            this[Actions.SET_ERROR](response.data.errors);
            reject();
          });
      });
    },
    [Actions.VERIFY_AUTH]() {
      if (JwtService.getToken()) {
        ApiService.setHeader();
        ApiService.get("verify")
          .then(({ data }) => {
            this[Actions.SET_AUTH](data);
          })
          .catch(({ response }) => {
            this[Actions.SET_ERROR](response.data.errors);
          });
      } else {
        this[Actions.LOGOUT]();
      }
    },
    [Actions.UPDATE_USER](payload: AxiosRequestConfig) {
      ApiService.setHeader();
      return new Promise<void>((resolve, reject) => {
        ApiService.post("update_user", payload)
          .then(({ data }) => {
            this[Actions.SET_USER] = data;
            resolve();
          })
          .catch(({ response }) => {
            this[Actions.SET_ERROR] = response.data.errors;
            reject();
          });
      });
    }
  }
})
