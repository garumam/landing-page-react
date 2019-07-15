import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import lampada from '../../src/assets/lampada.png'
import trofeu from '../../src/assets/trofeu.png'
import carta from '../../src/assets/carta.png'
import coracao from '../../src/assets/coracao.png'
import alvo from '../../src/assets/alvo.png'
import maos from '../../src/assets/maos.png'
import { Container, Row } from '../styles/style'

const useStyles = makeStyles(theme => ({
    text: {
      flexGrow: 1,
      textAlign: 'center',
      padding: theme.spacing(1),
    },
    fontWeightBig: {
      fontWeight: '700'
    },
    fontWeightMedium: {
      fontWeight: '500'
    },
    colorBlue: {
      color: '#0069ff'
    },
    paper: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 15px 25px 15px',
        marginLeft: '10px',
        marginRight: '10px',
        marginBottom: '40px',
        boxShadow: 'none'
    },
    h5: {
        paddingBottom: theme.spacing(2)
    }
  }));

export default () => {
    const classes = useStyles()
    return(
        <Box id="feature_section" component="section" marginBottom="100px">
            <Container flexDirection="column">
                <Row>
                    <Typography variant="body1" className={`${classes.text} ${classes.colorBlue} ${classes.fontWeightBig}`}>
                        FEATURES
                    </Typography>
                    <Typography variant="h4" className={`${classes.text} ${classes.fontWeightMedium}`}>
                        Why you choose Our Plugin
                    </Typography>
                </Row>
            </Container> 
            <Container>
                <Row maxWidth="350px">
                    <Paper className={classes.paper}>
                        <Box width="70px" paddingRight="20px" component="img" src={lampada}></Box>
                        <Box>
                            <Typography variant="h5" className={classes.h5}>
                            App Development
                            </Typography>
                            <Typography variant="body2">
                            Get your proof tests delivered home collect a sample from the news get design.
                            </Typography>
                        </Box>
                    </Paper>
                </Row>
                <Row maxWidth="350px">
                    <Paper className={classes.paper}>
                        <Box width="70px" paddingRight="20px" component="img" src={trofeu}></Box>
                        <Box>
                            <Typography variant="h5" className={classes.h5}>
                            10 Times Award
                            </Typography>
                            <Typography variant="body2">
                            Get your proof tests delivered home collect a sample from the news get design.
                            </Typography>
                        </Box>
                    </Paper>
                </Row>
                <Row maxWidth="350px">
                    <Paper className={classes.paper}>
                        <Box width="70px" paddingRight="20px" component="img" src={carta}></Box>
                        <Box>
                            <Typography variant="h5" className={classes.h5}>
                            Cloud Storage
                            </Typography>
                            <Typography variant="body2">
                            Get your proof tests delivered home collect a sample from the news get design.
                            </Typography>
                        </Box>
                    </Paper>
                </Row>
                <Row maxWidth="350px">
                    <Paper className={classes.paper}>
                        <Box width="70px" paddingRight="20px" component="img" src={coracao}></Box>
                        <Box>
                            <Typography variant="h5" className={classes.h5}>
                            Customization
                            </Typography>
                            <Typography variant="body2">
                            Get your proof tests delivered home collect a sample from the news get design.
                            </Typography>
                        </Box>
                    </Paper>
                </Row>
                <Row maxWidth="350px">
                    <Paper className={classes.paper}>
                        <Box width="70px" paddingRight="20px" component="img" src={alvo}></Box>
                        <Box>
                            <Typography variant="h5" className={classes.h5}>
                            UX Planning
                            </Typography>
                            <Typography variant="body2">
                            Get your proof tests delivered home collect a sample from the news get design.
                            </Typography>
                        </Box>
                    </Paper>
                </Row>
                <Row maxWidth="350px">
                    <Paper className={classes.paper}>
                        <Box width="70px" paddingRight="20px" component="img" src={maos}></Box>
                        <Box>
                            <Typography variant="h5" className={classes.h5}>
                            Customer Support
                            </Typography>
                            <Typography variant="body2">
                            Get your proof tests delivered home collect a sample from the news get design.
                            </Typography>
                        </Box>
                    </Paper>
                </Row>
            </Container>
        </Box>
    )
}