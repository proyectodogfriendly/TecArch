import axios from "axios";
export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}`,
      withCredentials: true
    });
  }
  getAllProposals = competitionId => {
    console.log(competitionId);
    return this.service.post("getAllProposals", {
      competitionId
    });
  };
  getOneProposal = id => this.service.get(`getOneProposal/${id}`);

  postProposal = (theNewProposal, userId, competitionId) =>
    this.service.post(`postProposal`, {
      theNewProposal,
      userId,
      competitionId
    });
  handleUpload = theFile => {
    console.log(theFile);
    return this.service.post("upload", theFile);
  };
}
