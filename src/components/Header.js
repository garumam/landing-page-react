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
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import { LinkStyled } from '../styles/style'
import { scroller, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  menuShow: {
    background: 'rgba(255,255,255,1)',
    color: 'black',
    WebkitTransition: 'background .5s ease-out',
    MozTransition: 'background .5s ease-out',
    OTransition: 'background .5s ease-out',
    transition: 'background .5s ease-out'
  },
  menuHide: {
    background: 'rgba(255,255,255,0)',
    color: 'white',
    WebkitTransition: 'background .5s ease-out',
    MozTransition: 'background .5s ease-out',
    OTransition: 'background .5s ease-out',
    transition: 'background .5s ease-out'
  },
  hoverMenuShow: {
    '&:hover': {
      color: '#0069ff'
    }
  },
  hoverMenuHide: {
    '&:hover': {
      color: '#40E0D0'
    }
  },
  toolbarHeightHide: {
    height: '100px',
    WebkitTransition: 'height .5s ease-out',
    MozTransition: 'height .5s ease-out',
    OTransition: 'height .5s ease-out',
    transition: 'height .5s ease-out'
  },
  toolbarHeightShow: {
    height: '64px',
    WebkitTransition: 'height .5s ease-out',
    MozTransition: 'height .5s ease-out',
    OTransition: 'height .5s ease-out',
    transition: 'height .5s ease-out'
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

function OpacityScroll(props) {
  const { children, classes } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    className: trigger ? `${classes.menuShow}` : `${classes.menuHide}`,
    elevation: trigger ? 4 : 0
  });
}

OpacityScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

function HoverMenuScroll(props) {
  const { children, classes } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    className: trigger ? `${classes.menu} ${classes.hoverMenuShow}` : `${classes.menu} ${classes.hoverMenuHide}`,
  });
}

HoverMenuScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

function ToolbarHeight(props) {
  const { children, classes } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    className: trigger ? `${classes.toolbarHeightShow}` : `${classes.toolbarHeightHide}`,
  });
}

ToolbarHeight.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ButtonAppBar(props) {
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
    <OpacityScroll {...props} classes={classes}>
      <AppBar position="fixed">
        <ToolbarHeight {...props} classes={classes}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              SEVS
            </Typography>
            
            <HoverMenuScroll {...props} classes={classes}>
              <LinkStyled onClick={() => {scroll.scrollToTop()}}>Home</LinkStyled>
            </HoverMenuScroll>
            <HoverMenuScroll {...props} classes={classes}>
              <LinkStyled onClick={() => {scrollTo('feature_section')}}>
                Funcionalidades
              </LinkStyled>
            </HoverMenuScroll>
            <HoverMenuScroll {...props} classes={classes}>
              <LinkStyled to="">Preço</LinkStyled>
            </HoverMenuScroll>
            <HoverMenuScroll {...props} classes={classes}>
              <LinkStyled to="">Contato</LinkStyled>
            </HoverMenuScroll>

            <Button onClick={toggleDrawer(true)} className={classes.drawer} color="inherit"><MenuIcon /></Button>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer(false)}>
              {sideList('right')}
            </Drawer>
          </Toolbar>
        </ToolbarHeight>
      </AppBar>
    </OpacityScroll>
  );
}