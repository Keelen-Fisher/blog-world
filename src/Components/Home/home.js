import { createStyles, Header, Navbar, Group } from '@mantine/core';
// import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
import React from 'react';
import { Link } from 'react-router-dom'
// import Blog from 'Blog/blog.js';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.fn.variant({ color: theme.primaryColor }).background,
    borderBottom: 0,
    color: theme.white,
    padding: 20,
    fontSize: theme.fontSizes.xl,
    fontWeight: 500,
    fontFamily: 'IM Fell Great Primer SC',
  },

  inner: {
    textDecoration: 'none',
    color: theme.colors.gray[0],
    marginRight: 90,
  },

  h1: {
    // fontFamily: 'IM Fell Great Primer SC',
  },

  button: {
    color: theme.white,
    backgroundColor: theme.primaryColor,
    borderRadius: 8,
  }
}));

const handleClick = (e) => {
  console.log('testing', e.target);
}


function HeaderHome() {
  const { classes } = useStyles();
  return (
    <>
      <Header>
        <Navbar className={classes.navbar}>
          <Group position="apart">
            <Group>
              <Link className={classes.inner} default to="/">Home</Link>
              <Link className={classes.inner} to="/settings">Settings</Link>
              <Link className={classes.inner} to="/blogs">Blogs</Link>
              <Link className={classes.inner} to="/blog">New Blog</Link>
              <Link className={classes.inner} to="/motivation">Motivation-Generator</Link>
              <Link className={classes.inner} to="/journal">Journal</Link>
              <button className={classes.button} onClick={(e) => handleClick(e)}> Sign In </button>
            </Group>
          </Group>
        </Navbar>
      </Header>
      <header className="App-header">
        <h1 className={classes.h1}>Welcome to Your Personal Message World!</h1>
      </header>
    </>
  );
}




export default HeaderHome
