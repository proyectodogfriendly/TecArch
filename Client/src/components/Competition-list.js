
import React, { Component } from 'react'
import Services from '../services/competition.services'

import CompetitionCard from './CompetitionCard'


class CompetitionList extends Component {

    constructor() {
        super()
        this.state = { competitions: [] }
        this.services = new Services()
    }

    componentDidMount() {
        this.services.getAllCompetitions()
            .then(response => {
                console.log(response)
                this.setState({ competitions: response.data })
            })
            .catch(err => console.log(err))
    }


    render() {

        console.log(this.state.competitions)
        return (
            <>
                <div className="container">

                    <h1>Listado de concursos de arquitetura </h1>

                    <div className="row competitions-list">

                        {this.state.competitions.map(competition => <CompetitionCard key={competition._id} {...competition} />)}

                    </div>
                </div>
            </>
        )
    }
}


export default CompetitionList