import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Slide from 'react-reveal/Slide';
import dashImg from '../../src/assets/dash-1.png'

const useStyles = makeStyles(theme => ({
    text: {
      flexGrow: 1,
      textAlign: 'center',
      fontFamily: 'Robot',
      fontWeight: 'fontWeightBold',
      padding: theme.spacing(1),
    },
    h2: {
        marginBottom: '24px'
    },
    gridpadding: {
        padding: '30px'
    }
  }));

export default () => {
    const classes = useStyles()
    return(
        <Box component="section">
            <Grid container alignItems="center" direction="row">
                <Grid item xs={12} sm={7}>
                    <Slide left>
                        <Box maxWidth="100%" component="img" src={dashImg}></Box>
                    </Slide>
                </Grid>
                <Grid item xs={12} sm={5} className={classes.gridpadding}>
 
                    <Typography variant="h2" className={classes.h2}>
                        Make your website growth with next level visitors
                    </Typography>
                    <Typography variant="body1">
                        For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!.
                    </Typography>
               
                </Grid>
            </Grid>
        </Box>
    )
}