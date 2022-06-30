import React from 'react'
import logo from '../logo.png'
import {Toolbar, Typography} from '@material-ui/core'
import { StyleSheet, TextInput } from 'react-native'
import {makeStyles} from "@material-ui/core/styles"; 


const styles = makeStyles({
    bar:{
        backgroundColor: "#990000",
        ['@media (max-width:200px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "10%", 
        ['@media (max-width:200px)']: { 
           display: "none"
           }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#000000"
        },
        ['@media (max-width:200px)']: { 
            paddingBottom: "1rem"    }
    }
})



export default function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar} >   
            <img src={logo} className={classes.logo}/> 
            <Typography variant="h6" className={classes.menuItem}>
                
            </Typography>
            
            <TextInput placeholder='Rechercher un jeu' style={styles2.input}/>
            <Typography variant="h6" className={classes.menuItem}>
                
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
               Meilleur
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Nouveau
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                A venir
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                
            </Typography>
            
        </Toolbar>
  )
  
}

const styles2 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#777',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 200,
      color: 'black',
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Roboto',
        fontSize: 16,
    }
  });
