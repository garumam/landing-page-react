import React from 'react';
import Header from './components/Header'
import Home from './components/home/Home'
import Service from './components/Service'
import Info from './components/Info'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Header />
      <Home />
      <Service />
      <Info />
    </Box>
  );
}

export default App;
