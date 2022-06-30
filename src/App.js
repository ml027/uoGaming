import logo from './logo.png';
import './App.css';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import {Typography} from '@material-ui/core'; 


const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      fontWeight: 'bold',
      },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
        fontWeight: 'bold',
      },
    h6: {
        color: 'white',
        fontWeight: 'bold',
    },
  },
});
const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem",
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
    borderWidth: 1,
    
  },
})

function App() {
  const classes = styles()
  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="black">
            La meilleure base de données de jeux vidéo !
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<VideogameAssetIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Game 1"/>
          <Grid icon={<VideogameAssetIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Game 2"/>
          <Grid icon={<VideogameAssetIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Game 3"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<VideogameAssetIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Game 4"/>
          <Grid icon={<VideogameAssetIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Game 5"/>
          <Grid icon={<VideogameAssetIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Game 6"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon={<VideogameAssetIcon style={{fill: "#A360A6", height:"125", width:"125"}}/>}  title="Game 7"/>
          <Grid icon={<VideogameAssetIcon style={{fill: "#B49A76", height:"125", width:"125"}}/>} title="Game 8"/>
          <Grid icon={<VideogameAssetIcon style={{fill: "#C05B2D", height:"125", width:"125"}}/>}  title="Game 9"/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
