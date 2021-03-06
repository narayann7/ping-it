const common_utility_functions = {
  isEmail: (email) => {
    var regExp =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regExp.test(email);
  },
  timeout: (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  },
};

export default common_utility_functions;
