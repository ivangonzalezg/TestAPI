module.exports = {
  singIn: async data => {
    var url = "http://localhost:5000/users/signin";
    var response = {};
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
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
  singUp: async data => {
    var url = "http://localhost:5000/users/signup";
    var response = {};
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
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
