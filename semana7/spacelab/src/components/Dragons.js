import React from 'react';
import axios from 'axios'

export class Dragons extends React.Component {
    state = {
        dragons: []
    }

    componentDidMount = () => {
        axios.get('https://api.spacexdata.com/v3/dragons').then(response => {
            this.setState({ dragons: response.data })
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        console.log(this.state.dragons)
        return (
            <div>
                {this.state.dragons.map(dragon => {
                    return (
                        <div key={dragon.id}>
                            <p>{dragon.name}</p>
                            <p>
                                {dragon.flickr_images.map(image => {
                                    return(
                                        <img src={image} alt='images' />
                                    )
                                })}
                            </p>
                            <a href={dragon.wikipedia}>Link Wikipedia</a>
                            <p>{dragon.description}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}