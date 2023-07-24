const API_ENDPOINT = "http://localhost:4001";

const api = {
  fetchCats: (keyword) => {
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`).then((res) =>
      res.json()
    );
  },
  fetchRandomCats: () => {
    return fetch(`${API_ENDPOINT}/api/cats/random50`).then((res) => res.json());
  },
  fetchDetailCat: (catID) => {
    return fetch(`${API_ENDPOINT}/api/cats/${catID}`).then((res) => res.json());
  },
  fetchAddCats: (page) => {
    console.log(store.getStorage('lastHistory'))
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${store.getStorage('lastHistory')}&page=${page}`).then(
      (res) => res.json()
    );
  },
};
