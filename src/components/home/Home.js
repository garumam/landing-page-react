import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import note from '../../assets/home-image.png'
import Slide from 'react-reveal/Slide'
import { Container, Row, Background } from '../../styles/style'

const useStyles = makeStyles(theme => ({
  text: {
    flexGrow: 1,
    textAlign: 'center',
    color: 'white',
    padding: theme.spacing(2),
  },
  fontWeightBig: {
    fontWeight: '700'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (

      <Box component="section">
        <Background topZero />

        <Container flexDirection="column">
          <Row maxWidth="700px">
            <Typography variant="h2" className={`${classes.text} ${classes.fontWeightBig}`}>
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