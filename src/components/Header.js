import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRight from '@material-ui/icons/ArrowRight';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { LinkStyled } from '../styles/style'
import { scroller, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  appBarColor: {
      background: 'white',
      color: 'black'
  },
  menu: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'inline-flex'
    }
  },
  drawer: {
    [theme.breakpoints.down('sm')]: {
      display: 'inline-flex'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false
  })

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, right: open });
  }

  const scrollTo = (sectionId) => { 
    return(
      scroller.scrollTo(sectionId, {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -70
      }) 
    )
  }

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[{text: 'Home'},
          {text: 'Funcionalidades',
           section: 'feature_section'}, 
          {text: 'Preço',
           section: '#'}, 
          {text: 'Contato',
           section: '#'}].map((item) => (
          <ListItem onClick={() => {item.text === 'Home'? scroll.scrollToTop() : scrollTo('feature_section')}} component={LinkStyled} key={item.text}>
            <ListItemIcon><ArrowRight /></ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
  
  return (
    
      <AppBar position="fixed" className={classes.appBarColor}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            SEVS
          </Typography>

          <LinkStyled onClick={() => {scroll.scrollToTop()}} className={classes.menu}>Home</LinkStyled>
          <LinkStyled onClick={() => {scrollTo('feature_section')}} className={classes.menu}>
            Funcionalidades
          </LinkStyled>
          <LinkStyled className={classes.menu} to="">Preço</LinkStyled>
          <LinkStyled className={classes.menu} to="">Contato</LinkStyled>

          <Button onClick={toggleDrawer(true)} className={classes.drawer}><MenuIcon /></Button>
          <Drawer anchor="right" open={state.right} onClose={toggleDrawer(false)}>
            {sideList('right')}
          </Drawer>
        </Toolbar>
      </AppBar>
    
  );
}