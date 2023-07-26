class Loading {
  data = null;
  constructor({ $target, data }) {
    const $Loading = document.createElement("div");
    this.$Loading = $Loading;
    this.$Loading.className = "Loading";
    this.data = {
      show: false,
    };
    $target.append(this.$Loading);
    this.render();
  }

  show() {
    this.setState({ show: true });
  }

  hide() {
    this.setState({ show: false });
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    this.$Loading.innerHTML = `
    <p>Loading</p>
`;
    this.data.show
      ? (this.$Loading.style.display = "block")
      : (this.$Loading.style.display = "none");
  }
}
export default Loading;
