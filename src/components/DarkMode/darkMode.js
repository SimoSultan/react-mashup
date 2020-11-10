import React, { useState, useEffect }  from 'react'
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import '../../dark-theme.css';
import '../../light-theme.css';

const useStyles = makeStyles(() => ({
    themeSun: {
        color: 'white'
    },
    themeMoon: {
      color: 'rgb(5, 5, 5)'
  }
  }));

const DarkModeToggle = () => {
    const classes = useStyles();
    const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark" ? true : false);

    useEffect(() => {
        document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
    },[])

    const toggleThemeChange = () => {
        if (isDark === false) {
            localStorage.setItem("theme", "dark");
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", localStorage.getItem("theme"));
                setIsDark(true);
        } else {
            localStorage.setItem("theme", "light");
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", localStorage.getItem("theme"));
                setIsDark(false);
        }
    }

    return (
        <IconButton onClick={() => toggleThemeChange()}>
                {isDark ? <Brightness7Icon className={classes.themeSun}/> : <Brightness4Icon className={classes.themeMoon}/> } 
        </IconButton>
    )
}

export default DarkModeToggle





