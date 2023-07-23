class KeywordHistory {
  data = {
    show: true,
    history: [],
  };
  constructor({ $target, onSearch }) {
    const $KeyWordHistory = document.createElement("ul");
    this.$KeyWordHistory = $KeyWordHistory;
    this.$KeyWordHistory.className = "KeyWordHistory"
    $target.append(this.$KeyWordHistory);
    this.initHistory();
    this.$KeyWordHistory.addEventListener("click", (e) => {
      if (e.target.classList.contains("KeyWordHistory_Item")) {
        onSearch(e.target.innerText);
      }
    });
  }

  initHistory() {
    this.setState({
      show: !this.data.show,
      history: store.getStorage("history")
        ? store.getStorage("history")
        : store.setStorage("history", []),
    });
  }

  setState(nextData) {
    console.log(nextData);
    this.data = nextData;
    this.render();
  }

  render() {
    console.log(this.data);
    this.data.show
      ? (this.$KeyWordHistory.innerHTML = this.data.history
          .map((keyword) => `<li class="KeyWordHistory_Item">${keyword}</li>`)
          .splice(0, 5)
          .join(""))
      : (this.$KeyWordHistory.innerHTML = "");
  }
}
