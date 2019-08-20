import axios from 'axios'
export default class Services {
   constructor() {
       this.service = axios.create({
           baseURL: 'http://localhost:5000/api/'
       })
   }
   getAllProposals = () => {
    return this.service.get('getAllProposals')
   }
   getOneProposal = id => this.service.get(`getOneProposal/${id}`)
   postProposal = theNewProposal => this.service.post(`postProposal`, theNewProposal)
}