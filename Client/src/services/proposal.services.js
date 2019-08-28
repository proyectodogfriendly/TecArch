import axios from "axios";
export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api/",
      withCredentials: true
    });
  }
  getAllProposals = () => {
    return this.service.get("getAllProposals");
  };
  getOneProposal = id => this.service.get(`getOneProposal/${id}`);
  postProposal = (theNewProposal, userId) =>
    this.service.post(`postProposal`, {
      theNewProposal,
      userId
    });
  handleUpload = theFile => {
    console.log(theFile);
    return this.service.post("upload", theFile);
  };
}
