import React from 'react';
import { InputBase, Toolbar, AppBar, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../../styles/appbar.css'

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    Toolbar: {
        display: 'flex',
    },
    search: {
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        justfyContent: 'space-between',
        cursor: 'pointer',
        padding: '5px  5px',
        borderRadius: '10px',
        backgroundColor: '#f2f2f2 ',
        [theme.breakpoints.up('sm')]: {
            marginLeft: '28%',
            width: '24%',
            alignItems: 'center',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        color: '#494949',
        marginTop: '5px',
    },
    inputBase: {
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
}));
const Appbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.grow}>
            <AppBar className='header__appbar' position='fixed'>
                <Toolbar className={classes.Toolbar}>
                    <div className="header_appbar_heading">ATGWORLD</div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search for your favorite groups in ATG" className={classes.inputBase} />
                    </div>
                    <div className={classes.grow} />
                    <div className="right_">
                        <span className='create_acc'>Create account.</span>
                        <span className='its_free'>It's free<ArrowDropDownIcon className='free_icon'/></span>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Appbar