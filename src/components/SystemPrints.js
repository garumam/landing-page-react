import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Zoom from 'react-reveal/Zoom'
import dashone from '../assets/dash-4-img1.png'
import dashtwo from '../assets/dash-3-img2.png'
import {Container, Row, Background} from '../styles/style'

function TabContainer(props) {
  return (
    <Box component="div" style={{ padding: '20px' }}>
      {props.children}
    </Box>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  text: {
    flexGrow: 1,
    textAlign: 'center',
    padding: theme.spacing(1),
    color: 'white'
  },
  margin: {
    marginTop: '100px',
    marginBottom: '100px'
  },
  fontWeightBig: {
    fontWeight: '700'
  },
  fontWeightMedium: {
    fontWeight: '500'
  },
  appBar: {
      alignItems: 'center',
      width: '100%',
      background: 'rgb(0,0,0,0)',
      boxShadow: 'none'
  },
  background: {
    background: 'inherit'
  },
  menu: {
    [theme.breakpoints.down('sm')]: {
      alignItems: 'unset'
    },
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center'
    }
  },
  bgHeight: {
    [theme.breakpoints.down('sm')]: {
      height: '700px'
    },
    [theme.breakpoints.up('sm')]: {
        height: '1300px'
    }
  }
}));

export default () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (

    <Box component="section">
        <Background className={classes.bgHeight} />

        <Container flexDirection="column">
          <Row className={classes.margin}>
            <Typography variant="body1" className={`${classes.text} ${classes.fontWeightBig}`}>
            UPDATE
            </Typography>
            <Typography variant="h4" className={`${classes.text} ${classes.fontWeightMedium}`}>
            Meet our new updated screen
            </Typography>
          </Row>
          <Row>
            <AppBar position="static" className={`${classes.appBar} ${classes.menu}`}>
                <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                indicatorColor="primary"
                >
                    <Tab label="Orçamentos" />
                    <Tab label="Vendas" />
                    <Tab label="Ordens de serviço" />
                    <Tab label="Configurações" />
                </Tabs>
            </AppBar>
            {value === 0 && 
            <TabContainer>
                <Zoom>  
                    <Box maxWidth="100%" component="img" borderRadius="10px" src={dashone} alt="Menu lateral" />
                </Zoom>
            </TabContainer>}
            {value === 1 && 
            <TabContainer>
                <Zoom>  
                    <Box maxWidth="100%" component="img" borderRadius="10px" src={dashtwo} alt="Menu lateral" />
                </Zoom>
            </TabContainer>}
            {value === 2 && 
            <TabContainer>
                <Zoom>  
                    <Box maxWidth="100%" component="img" borderRadius="10px" src={dashone} alt="Menu lateral" />
                </Zoom>
            </TabContainer>}
            {value === 3 && 
            <TabContainer>
                <Zoom>  
                    <Box maxWidth="100%" component="img" borderRadius="10px" src={dashtwo} alt="Menu lateral" />
                </Zoom>
            </TabContainer>}
          </Row>
        </Container>
    </Box>

  );
}