import axios from 'axios'
export default class Services {
   constructor() {
       this.service = axios.create({
           baseURL: 'http://localhost:5000/api/'
       })
   }
   getAllCompetitions = () => {
    return this.service.get('getAllCompetitions')
   }
   getOneCompetition = id => this.service.get(`getOneCompetition/${id}`)
   postCompetition = theNewCompetition => this.service.post(`postCompetition`, theNewCompetition)
}