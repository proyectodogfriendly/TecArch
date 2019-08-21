
import React, { Component } from 'react'
import Services from '../services/portfolio.services'

import PortfolioCard from './PortfolioCard'


class PortfolioList extends Component {

    constructor() {
        super()
        this.state = { portfolios: [] }
        this.services = new Services()
    }

    componentDidMount() {
        this.services.getAllPortfolios()
            .then(response => {
                console.log(response)
                this.setState({ portfolios: response.data })
            })
            .catch(err => console.log(err))
    }


    render() {

        console.log(this.state.portfolios)
        return (
            <>
                <div className="container">

                    <h1>Listado de portfolios de arquitetura </h1>

                    <div className="row portfolio-list">

                        {this.state.portfolios.map(portfolio => <PortfolioCard key={portfolio._id} {...portfolio} />)}

                    </div>
                </div>
            </>
        )
    }
}


export default PortfolioList