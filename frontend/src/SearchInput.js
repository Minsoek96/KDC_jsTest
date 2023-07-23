const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onClick }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
        store.setStorage("history", [
          e.target.value,
          ...store.getStorage("history"),
        ]);
      }
    });

    $searchInput.addEventListener("click", (e) => {
      onClick();
    });

    console.log("SearchInput created.", this);
  }
  render() {}
}
