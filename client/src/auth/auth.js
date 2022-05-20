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

  async logout(redirectPath) {
    this.authenticated = false;
    localStorage.removeItem("login");
    try {
      await fetch("http://localhost:8082/api/Logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.log(error);
    }
    redirectPath();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
