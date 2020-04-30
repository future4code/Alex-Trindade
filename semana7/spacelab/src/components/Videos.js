import React from 'react';
import axios from 'axios'

export class Videos extends React.Component {
    state = {
        launches: []
    }

    componentDidMount = () => {
        axios.get('https://api.spacexdata.com/v3/launches').then(response => {
            this.setState({ launches: response.data })
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                {this.state.launches.map(launch => {
                    return (
                        <div key={launch.flight_number}>
                            <p>{launch.mission_name}</p>
                            <iframe 
                                title={launch.mission_name}
                                width="560" 
                                height="315" 
                                src={launch.links.video_link} 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    )
                })}
            </div>
        );
    }
}