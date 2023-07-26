import store from "./store.js";
const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onClick }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    this.onSearch = onSearch;

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);
    this.initSearch();

    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
        store.setStorage("history", [
          e.target.value,
          ...store.getStorage("history"),
        ]);
      }
      store.setStorage("lastHistory", [e.target.value]);
    });

    $searchInput.addEventListener("click", (e) => {
      onClick();
    });

    console.log("SearchInput created.", this);
  }

  initSearch() {
    const data = store.getStorage("lastHistory");
    console.log("초기상태");
    this.$searchInput.focus();
    this.$searchInput.textContent = "";
    this.onSearch(data ? data : []);
  }
}
export default SearchInput;
