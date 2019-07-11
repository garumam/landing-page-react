import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import download from '../../src/assets/download.svg'
import paper from '../../src/assets/paper.svg'
import box from '../../src/assets/box.svg'
import { Container, Row } from '../styles/style'

const useStyles = makeStyles(theme => ({
    text: {
      flexGrow: 1,
      textAlign: 'center',
      fontFamily: 'Robot',
      fontWeight: "fontWeightBold",
      padding: theme.spacing(1),
    },
    colorBlue: {
      color: '#0069ff'
    },
    paper: {
        position: 'relative',
        padding: '0 15px 25px 15px',
        marginLeft: '10px',
        marginRight: '10px',
        marginBottom: '40px'
    },
    h5: {
        paddingBottom: theme.spacing(2)
    },
    span: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        fontWeight: '700',
        width: '45px',
        height: '45px', 
        zIndex: '1',
        position:'absolute',
        background: 'white',
        top: '-5px',
        left: '-5px',
        borderRadius: '50%',
        boxShadow: 'rgba(42, 96, 151, 0.25) 0px 6px 10.34px 0.66px',
        textAlign: 'center'
    }
  }));

export default () => {
    const classes = useStyles()
    return(
        <Box component="section" marginBottom="100px">
            <Container flexDirection="column">
                <Row>
                    <Typography variant="body1" className={`${classes.text} ${classes.colorBlue}`}>
                        WORKING PROCESS
                    </Typography>
                    <Typography variant="h4" className={classes.text}>
                        Our Featured Service that We Provide
                    </Typography>
                </Row>
            </Container> 
            <Container >
                <Row maxWidth="300px">
                    <Paper className={classes.paper}>
                        <Box component="span" className={classes.span}>1</Box>
                        <Box marginBottom="35px" component="img" src={download}></Box>
                        <Typography variant="h5" className={classes.h5}>
                            Download our app
                        </Typography>
                        <Typography variant="body2">
                            Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.
                        </Typography>
                    </Paper>
                </Row>
                <Row maxWidth="300px">
                    <Paper className={classes.paper}>
                        <Box component="span" className={classes.span}>2</Box>
                        <Box marginBottom="35px" component="img" src={paper}></Box>
                        <Typography variant="h5" className={classes.h5}>
                            Create a free account
                        </Typography>
                        <Typography variant="body2">
                            Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.
                        </Typography>
                    </Paper>
                </Row>
                <Row maxWidth="300px">
                    <Paper className={classes.paper}>
                        <Box component="span" className={classes.span}>3</Box>
                        <Box marginBottom="35px" component="img" src={box}></Box>
                        <Typography variant="h5" className={classes.h5}>
                            Now Start your journey
                        </Typography>
                        <Typography variant="body2">
                            Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.
                        </Typography>
                    </Paper>
                </Row>
            </Container>
        </Box>
    )
}