import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import note from '../../assets/home-image.png'
import Slide from 'react-reveal/Slide';
import './Home.css'

const useStyles = makeStyles(theme => ({
  text: {
    flexGrow: 1,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Robot',
    fontWeight: "fontWeightBold",
    padding: theme.spacing(2),
  },
  gridmargin: {
    marginTop: "100px"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (

      <Box component="section" id="home_section">
        <Box top="0" padding="0px" className="section_Home" />
        <Grid container alignItems="center" direction="column" className={classes.gridmargin}>
            <Grid item xs={12} sm={6}>
                <Typography variant="h2" className={classes.text}>
                  Ultimate Platform to monitor your best workflow.
                </Typography>
                <Typography variant="body1" className={classes.text}>
                  For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.gridpadding}>

              <Slide bottom>  
                <Box maxWidth="100%" component="img" src={note} alt="SEVS Dashboard" />
              </Slide>
            
            </Grid>
        </Grid>
        {/* <Container>
          <Box paddingTop="100px" marginRight="auto" marginLeft="auto">
            <Typography variant="h2" className={classes.text}>
              Ultimate Platform to monitor your best workflow.
            </Typography>
            <Typography variant="body1" className={classes.text}>
              For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!
            </Typography>
          </Box>
          <Box>
            
          </Box>
        </Container> */}
      </Box>
    
  );
}