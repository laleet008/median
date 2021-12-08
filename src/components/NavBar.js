import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  makeStyles,
  InputBase,
  styled,
  alpha,
} from "@material-ui/core";

import React from "react";

import { FaSearch } from "react-icons/fa";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  color: "#222",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const NavLeft = styled("div")({
  marginLeft: "30px",
  display: "flex",
  flexDirection: "row",
});

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  header: {
    background: "#fff",
    padding: "0",
    marginLeft: "0",
    width: "100%",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoItem: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "0 !important",
    paddingLeft: "0",
  },
  logo: {
    background: "#000",
    height: "30px",
    width: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5px",
    marginRight: "5px",
    fontWeight: "bold",
    fontSize: "1.6rem",
  },

  logoText: {
    color: "#000",
    fontWeight: "600",
    fontSize: "1.5rem",
    marginTop: "5px",
  },
  search: {
    position: "static",
  },
  btn: {
    textTransform: "none",
    color: "#009933",
  },
  btn1: {
    "&:hover": {
      backgroundColor: "#009933",
      color: "#fff",
    },
    textTransform: "none",
    border: "1px solid #009933",
    color: "#009933",
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        className={classes.header}
        position="relative"
        style={{ margin: 0 }}
      >
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.logoItem}>
            <Typography className={classes.logo}>M</Typography>
            <Typography className={classes.logoText} variant="h6">
              Median.
            </Typography>
          </Typography>

          <NavLeft>
            <Search>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
              <SearchIconWrapper className={classes.search}>
                <FaSearch />
              </SearchIconWrapper>
            </Search>

            <Button className={classes.btn}>Sign in</Button>
            <Button className={classes.btn1}>Create an account</Button>
          </NavLeft>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
