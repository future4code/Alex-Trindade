import React from 'react';
import axios from 'axios'

export class Missions extends React.Component {
    state = {
        missions: []
    }
    
    componentDidMount = () => {
        axios
          .get("https://api.spacexdata.com/v3/missions")
          .then(response => {
            this.setState({ missions: response.data })
          })
          .catch(error => {
            console.log(error)
          })
        }
    
      render() {
        return (
        <div>
            {this.state.missions.map(mission => {
                return (
                    <div key={mission.name}>
                    <p>
                        <strong>Missão: </strong>
                        {mission.mission_name}
                    </p>
                    <p>
                        <strong>Fabricantes: </strong>
                        {mission.manufacturers.map(manufacturer => {
                        return <span>{manufacturer} </span>
                        })}
                    </p>
                    <a href={mission.wikipedia}>link</a>
                    </div>
                )
            })}
          </div>
        )
    }
}