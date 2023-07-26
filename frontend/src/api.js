const API_ENDPOINT = "http://localhost:4001";

const REQUEST_ERROR = {
  '500': { msg: "요청실패" },
};

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
    console.log(error)
    return { data: null };
  }
};

const api = {
  fetchCats: (keyword) => {
    return request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },
  fetchRandomCats: () => {
    return request(`${API_ENDPOINT}/api/cats/random50`);
  },
  fetchDetailCat: (catID) => {
    return request(`${API_ENDPOINT}/api/cats/${catID}`);
  },
  fetchAddCats: (page) => {
    console.log(store.getStorage("lastHistory"));
    return request(
      `${API_ENDPOINT}/api/cats/search?q=${store.getStorage(
        "lastHistory"
      )}&page=${page}`
    );
  },
};
