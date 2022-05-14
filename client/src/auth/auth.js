class Auth {
  constructor() {
    if (localStorage.getItem("login")) {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
  }

  login(redirectPath) {
    this.authenticated = true;
    localStorage.setItem(
      "login",
      JSON.stringify({
        loginStatus: true,
        // token: token,
      })
    );
    redirectPath();
  }

  logout(redirectPath) {
    this.authenticated = false;
    localStorage.removeItem("login");
    redirectPath();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
