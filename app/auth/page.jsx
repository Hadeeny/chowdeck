import React from "react";
// import axios from "axios";

let headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
};

let reqOptions = {
  url: "https://connect.deezer.com/oauth/access_token.php?app_id=598584&secret=30d768fefa3433b032ca7dc1c3408eba&code=fr879f6bdbdb4ad73e8077b95dbdfefe",
  method: "GET",
  headers: headersList,
};

// const fetchData = async () => {
//   let response = await axios.request(reqOptions);
//   return response.data;
// };

const LoginPage = () => {
  console.log(fetchData());
  return (
    <div>
      <h2>Welcome to login screeen</h2>
    </div>
  );
};

export default LoginPage;
