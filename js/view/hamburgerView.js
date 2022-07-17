class HamburgerView {
  _hamBurgerIcon = document.querySelector(".icon");
  _links = document.querySelector("#myLinks");

  addHandlerShowMenu() {
    this._hamBurgerIcon.addEventListener(
      "click",
      this._displayLinks.bind(this)
    );
  }

  _displayLinks(e) {
    e.preventDefault();
    if (this._links.style.display === "block")
      this._links.style.display = "none";
    else this._links.style.display = "block";
  }
}

export default new HamburgerView();
