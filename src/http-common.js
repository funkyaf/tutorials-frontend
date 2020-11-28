import axios from "axios";

export default axios.create({
  baseURL: "https://tutorial-yes.glitch.me/api",
  headers: {
    "Content-type": "application/json"
  }
});
