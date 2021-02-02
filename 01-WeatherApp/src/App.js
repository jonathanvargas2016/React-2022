import React, {Component} from 'react';
import './App.css';
import LocationListContainer from "./containers/LocationListContainer";
import {Grid,Row,Col} from 'react-flexbox-grid'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ForecastExtended from './components/ForecastExtended'


const cities = [
    'Buenos Aires,ar',
    'Washington dc,us',
    'Bogota,col',
    'Quito,ec'
]

class App extends Component{


    constructor() {
        super();
        this.state ={
            city:null
        }
    }

  render = () => {
      const {city} = this.state;
      return (
          // <Grid fluid>
          //
          //     <Row>
          //         <h1>Grid System</h1>
          //     </Row>
          //
          //     <Row>
          //         <h5>Las columnas se muestran en la misma fila mientras sumen 12</h5>
          //     </Row>
          //
          //
          //     <Row around="xs">
          //         <Col xs={2}>
          //             <div className='red'>
          //
          //             </div>
          //         </Col>
          //         <Col xs={2}>
          //             <div className='green'>
          //
          //             </div>
          //         </Col>
          //         <Col xs={2}>
          //             <div className='blue'>
          //
          //             </div>
          //         </Col>
          //         <Col xs={2}>
          //             <div className='red'>
          //
          //             </div>
          //         </Col>
          //     </Row>
          //
          // </Grid>


          <Grid>
              <Row>
                  <Col xs={12}>

                      <AppBar position="static">
                          <Toolbar variant="dense">
                              <IconButton edge="start" color="inherit" aria-label="menu">

                              </IconButton>
                              <Typography variant="h6" color="inherit">
                                  Weather App
                              </Typography>
                          </Toolbar>
                      </AppBar>

                  </Col>
              </Row>

              <Row>

                  <Col xs={12} md={6}>
                      <LocationListContainer cities={cities}>
                      </LocationListContainer>
                  </Col>
                  <Col xs={12} md={6}>

                      <Paper elevation={4}>
                          <div className='detail'>

                              {city?
                                  <ForecastExtended city={city}></ForecastExtended>:
                                  <h2 className='app-title'>No se selecciono ciudad</h2>

                              }

                          </div>
                      </Paper>


                  </Col>

              </Row>
          </Grid>
      );
  }
}


export default App;

/*Funcionamiento de connect
*
* const connect = (value1),value2)=>{
*   console.log(value1)
*   console.log(value2)
*
*   return (componente)=>{
*       const result = `${componente}-${value1*value2}`
*       console.log(result)
*       return result
*   }
*
* }
*
* Const componentConectado = connect(2,3);
* componentConectado('APP')
*
*
* */