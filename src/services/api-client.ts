import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d1c44f2d64be4beea955e50424b38574",
  },
});
