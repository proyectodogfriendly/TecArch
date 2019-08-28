import axios from "axios";
export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}`,
      withCredentials: true
    });
  }
  getAllCompetitions = () => {
    return this.service.get("getAllCompetitions");
  };
  getOneCompetition = id => this.service.get(`getOneCompetition/${id}`);
  postCompetition = (theNewCompetition, userId) =>
    this.service.post(`postCompetition`, { theNewCompetition, userId });
  handleUpload = theFile => {
    console.log(theFile);
    return this.service.post("upload", theFile);
  };
}
