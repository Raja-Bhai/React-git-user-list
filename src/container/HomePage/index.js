import React, { Component } from 'react';
import Particles from 'react-particles-js';
import '../styless.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

class HomePage extends Component {
  render() {
    return (
      <div>
        {/* <CssBaseline /> */}
      
        <div className="buttonStyle">
        {/* <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} />
      </Container> */}
        <Button variant="contained" color="secondary"  onClick={() => this.props.history.push('/table')} >
        Go to user page
      </Button>
          
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