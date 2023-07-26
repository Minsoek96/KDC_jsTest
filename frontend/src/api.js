import store from "./store.js";
import config from "./config.js";
import { REQUEST_ERROR } from "./utils/_ERROR.js";

const request = async (url) => {
  try {
    const result = await fetch(url);
    if (result.status === 200) {
      return result.json();
    } else {
      throw REQUEST_ERROR[result.status];
    }
  } catch (error) {
    alert(error.msg);
    console.log(error);
    return { data: null };
  }
};

const api = {
  fetchCats: (keyword) => {
    return request(`${config.API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },
  fetchRandomCats: () => {
    return request(`${config.API_ENDPOINT}/api/cats/random50`);
  },
  fetchDetailCat: (catID) => {
    return request(`${config.API_ENDPOINT}/api/cats/${catID}`);
  },
  fetchAddCats: (page) => {
    console.log(store.getStorage("lastHistory"));
    return request(
      `${config.API_ENDPOINT}/api/cats/search?q=${store.getStorage(
        "lastHistory"
      )}&page=${page}`
    );
  },
};

export default api;
