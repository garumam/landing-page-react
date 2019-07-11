import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import Slide from 'react-reveal/Slide';
import dashImg from '../../src/assets/dash-1.png'
import { Container, RowResponsive } from '../styles/style'

const useStyles = makeStyles(theme => ({
    h2: {
        marginBottom: '24px'
    }
  }));

export default () => {
    const classes = useStyles()
    return(
        <Box component="section">
            <Container>
                <RowResponsive smallWidth="100%" mediumWidth="50%" largeWidth="55%">
                    <Slide left>
                        <Box maxWidth="100%" component="img" src={dashImg}></Box>
                    </Slide>
                </RowResponsive>
                <RowResponsive smallWidth="100%" mediumWidth="50%" largeWidth="42%">
                    <Typography variant="h2" className={classes.h2}>
                        Make your website growth with next level visitors
                    </Typography>
                    <Typography variant="body1">
                        For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!.
                    </Typography>
                </RowResponsive>
            </Container>
        </Box>
    )
}