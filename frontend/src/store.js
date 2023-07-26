const store = {
  getStorage: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
  setStorage: (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data));
  },
};

export default store;
