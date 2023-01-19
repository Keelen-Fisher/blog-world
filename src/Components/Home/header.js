import { createStyles, Header, Navbar, Group } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.fn.variant({ color: theme.primaryColor }).background,
    borderBottom: 0,
    color: theme.white,
    padding: theme.spacing.sm,
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,
  },

  inner: {
    textDecoration: 'none',
    color: theme.colors.gray[0],
  },

}));


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
              <Link className={classes.inner} to="/motivation">Motivation-Generator</Link>
              <Link className={classes.inner} to="/journal">Journal</Link>
            </Group>
          </Group>
        </Navbar>
      </Header>
      <header className="App-header">
        <h1>Welcome to Your Personal Message World!</h1>
      </header>
    </>
  );
}




export default HeaderHome
