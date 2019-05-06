var ip = "54.161.74.71";

module.exports = {
  singIn: async (email, password) => {
    var url = "http://" + ip + ":5000/users/signin";
    var response = {};
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        response = data;
      });
    return response;
  },
  singUp: async (email, password) => {
    var url = "http://" + ip + ":5000/users/signup";
    var response = {};
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        response = data;
      });
    return response;
  }
};
