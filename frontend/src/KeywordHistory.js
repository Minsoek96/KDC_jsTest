import store from "./store.js";
import uniqueKey from "./utils/uniqueKey.js";

class KeywordHistory {
  data = {
    show: true,
    history: [],
  };
  constructor({ $target, onSearch }) {
    const $KeyWordHistory = document.createElement("ul");
    this.$KeyWordHistory = $KeyWordHistory;
    this.$KeyWordHistory.className = "KeyWordHistory";
    $target.append(this.$KeyWordHistory);
    this.initHistory();
    this.$KeyWordHistory.addEventListener("click", (e) => {
      if (e.target.classList.contains("KeyWordHistory_Item")) {
        onSearch(e.target.innerText);
      }
    });
  }

  initHistory() {
    let history = store.getStorage("history");
    history = history && history.splice(0, 5);
    history = uniqueKey(history);
    this.setState({
      show: !this.data.show,
      history: history ? history : store.setStorage("history", []),
    });
    console.log(this.data.history)
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
          .join(""))
      : (this.$KeyWordHistory.innerHTML = "");
  }
}
export default KeywordHistory;
