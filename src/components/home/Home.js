import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import note from '../../assets/home-image.png'
import Slide from 'react-reveal/Slide'
import { Container, Row } from '../../styles/style'

import './Home.css'

const useStyles = makeStyles(theme => ({
  text: {
    flexGrow: 1,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Robot',
    fontWeight: "fontWeightBold",
    padding: theme.spacing(2),
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (

      <Box component="section">
        <Box top="0" padding="0px" className="section_Home" />

        <Container flexDirection="column">
          <Row maxWidth="700px">
            <Typography variant="h2" className={classes.text}>
              Ultimate Platform to monitor your best workflow.
            </Typography>
            <Typography variant="body1" className={classes.text}>
              For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!
            </Typography>
          </Row>
          <Row>
            <Slide bottom>  
              <Box maxWidth="100%" component="img" src={note} alt="Menu lateral" />
            </Slide>
          </Row>
        </Container>
      </Box>
    
  );
}