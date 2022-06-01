import {Container} from "@mui/material";
import makeStyles from "@emotion/styled";

const useStyles = makeStyles.makeStyles((theme)=>({
  cont:{
    display:"none",
    position: "sticky",
    top: "0",
  }
}))

export default function SideBar(){
  console.log(useStyles)
  const classes = useStyles();
  console.log(classes)
  return (
    <Container className={classes.cont}>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
      <h1> masre duda </h1>
    </Container>

  );
};
