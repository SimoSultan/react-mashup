import React from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  }
}));

function Navigation( { location } ) {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit" className={`${location.pathname === "/" ? "active" : ""}`}>
            <Link className={classes.link} to="/">Home</Link>
          </Button>
          <Button color="inherit" className={`${location.pathname === "/pokemon" ? "active" : ""}`}>
            <Link className={classes.link} to="/pokemon">Pokemon List</Link>
          </Button>
          <Button color="inherit" className={`${location.pathname === "/products" ? "active" : ""}`}>
            <Link className={classes.link} to="/products">Filtering Products</Link>
          </Button>
          <Button color="inherit" className={`${location.pathname === "/buzzy" ? "active" : ""}`}>
            <Link className={classes.link} to="/buzzy">Buzzy/Yelling</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>

  );
}

export default withRouter(Navigation);