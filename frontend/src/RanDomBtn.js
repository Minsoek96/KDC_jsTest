class RandomBtn {
  constructor({ $target, onClick }) {
    const $RandomBtn = document.createElement("button");
    $RandomBtn.textContent = "랜덤고양이버튼";
    $RandomBtn.className = "RandomBtn";
    this.$RandomBtn = $RandomBtn;
    $target.append(this.$RandomBtn);

    $RandomBtn.addEventListener("click", () => {
      onClick();
    });
  }

  render() {}
}
