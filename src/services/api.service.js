import Vue from 'vue';
import { getToken, JWT_TOKEN_KEY } from './local_storage.service';

const ApiService = {
  setHeader() {
    Vue.prototype.$axios.defaults.headers.common['Authorization'] = `Bearer ${getToken(JWT_TOKEN_KEY)}`;
  },

  get(resource) {
    return Vue.prototype.$axios.get(`${resource}`);
  },

  getWithParams(resource, data) {
    return Vue.prototype.$axios.get(`${resource}`, { params: data, });
  },

  post(resource, params) {
    return Vue.prototype.$axios.post(`${resource}`, params, {headers:{"Content-Type" : "application/json"}});
  },

  put(resource, params) {
    return Vue.prototype.$axios.put(`${resource}`, params);
  },

  patch(resource, data) {
    return Vue.prototype.$axios.patch(`${resource}`, data);
  },

  delete(resource) {
    return Vue.prototype.$axios.delete(resource);
  },

  deleteWithParams(resource, data) {
    return Vue.prototype.$axios.delete(`${resource}`, { params: data, });
  },
};

export default ApiService;
