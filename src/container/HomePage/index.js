import React, { Component } from 'react';
import Particles from 'react-particles-js';
import '../styless.css';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="buttonStyle">
          <input
            type="button"
            value="click"
            onClick={() => this.props.history.push('/table')}
          />
        </div>
        <Particles
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 5
                }
              }
            }
          }}
          style={{
            width: '100%',
            backgroundColor: 'blue'
            // backgroundImage: `url(${logo})` 
          }}
        />
      </div>
    )
  }
}

export default HomePage;