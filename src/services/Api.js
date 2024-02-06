import axios from "axios";

const BASE_URL = " server-tawny-three.vercel.app";

export class Api {
  static sendGetReq(url) {
    return axios.get(BASE_URL + url);
  }

  static sendPostReq(url, data) {
    return axios.post(BASE_URL + url, data);
  }
}
