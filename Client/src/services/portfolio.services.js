import axios from "axios";
export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api/",
      withCredentials: true
    });
  }
  getAllPortfolios = () => {
    return this.service.get("getAllPortfolios");
  };
  getOnePortfolio = id => this.service.get(`getOnePortfolio/${id}`);
  postPortfolio = theNewPortfolio =>
    this.service.post(`postPortfolio`, theNewPortfolio);

  handleUpload = theFile => {
    console.log(theFile);
    return this.service.post("upload", theFile);
  };
}
