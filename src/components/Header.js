import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
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

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary={text} />
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
          <Button color="inherit" className={classes.menu}>Home</Button>
          <Button color="inherit" className={classes.menu}>Funcionalidades</Button>
          <Button color="inherit" className={classes.menu}>Preço</Button>
          <Button color="inherit" className={classes.menu}>FAQ</Button>
          <Button onClick={toggleDrawer(true)} className={classes.drawer}><MenuIcon /></Button>
          <Drawer anchor="right" open={state.right} onClose={toggleDrawer(false)}>
            {sideList('right')}
          </Drawer>
        </Toolbar>
      </AppBar>
    
  );
}