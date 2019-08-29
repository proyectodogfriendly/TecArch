import React, { Component } from "react";
import Services from "../services/competition.services";

import CompetitionCard from "./CompetitionCard";
import Particles from "react-particles-js";
import "../css/particles-style.css";
// import SearchCompetition from "./SearchCompetition";

class CompetitionList extends Component {
  constructor() {
    super();
    this.state = { competitions: [] };
    this.services = new Services();
  }

  componentDidMount() {
    console.log("assasdasdasda");
    this.services
      .getAllCompetitions()
      .then(response => {
        console.log(response);
        this.setState({ competitions: response.data });
      })
      .catch(err => console.log(err));
  }

  // searchCompetition = string => {
  //   const competitionsCopy = [...this.state.competitions];
  //   this.setState({
  //     competitions: competitionsCopy.filter((elm, idx) =>
  //       elm.title.toLowerCase().includes(string.toLowerCase())
  //     )
  //   });
  // };

  render() {
    console.log(this.state.competitions);
    return (
      this.state.competitions && (
        <>
          <div id="main">
            <Particles
              params={{
                particles: {
                  number: {
                    value: 100,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                  },
                  color: {
                    value: "#b4b8b5"
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0.2,
                      color: "#b4b8b5"
                    },
                    polygon: {
                      nb_sides: 8
                    },
                    image: {
                      src: "img/github.svg",
                      width: 100,
                      height: 100
                    }
                  },
                  opacity: {
                    value: 0.4,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false
                    }
                  },
                  size: {
                    value: 1,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 20,
                      size_min: 0.1,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#b4b8b5",
                    opacity: 0.9,
                    width: 1
                  },
                  move: {
                    enable: true,
                    speed: 7,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  }
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse"
                    },
                    onclick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3
                    },
                    repulse: {
                      distance: 200
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove: {
                      particles_nb: 2
                    }
                  }
                },
                retina_detect: true,
                config_demo: {
                  hide_card: false,
                  background_color: "#fff",
                  background_image: "",
                  background_position: "50% 50%",
                  background_repeat: "no-repeat",
                  background_size: "cover"
                }
              }}
            />
          </div>
          <div className="container titulo">
            <h1 className="titulo-concurso">
              Listado de concursos de arquitetura{" "}
            </h1>
            {/* <SearchCompetition
            searchCompetition={this.searchCompetition}
            placeholder="Search"
          /> */}
          </div>

          <div className="container fondo-parti">
            <div className="row competitions-list">
              <div className="col-12">
                {this.state.competitions.map(competition => (
                  <CompetitionCard
                    key={competition._id}
                    {...competition}
                    userInSession={this.props.userInSession}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )
    );
  }
}

export default CompetitionList;
