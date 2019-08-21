import axios from 'axios'
export default class Services {
   constructor() {
       this.service = axios.create({
           baseURL: 'http://localhost:5000/api/'
       })
   }
   getAllPortfolios = () => {
    return this.service.get('getAllPortfolios')
   }
   getOnePortfolio = id => this.service.get(`getOnePortfolio/${id}`)
   postPortfolio = theNewPortfolio=> this.service.post(`postPortfolio`, theNewPortfolio)

//    handleUpload = theFile => this.service.post('/upload', theFile)
}