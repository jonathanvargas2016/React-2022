import React, {Component} from 'react';
import './App.css';
import LocationList from "./components/LocationList";
import {Grid,Row,Col} from 'react-flexbox-grid'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ForecastExtended from './components/ForecastExtended'
import {createStore} from 'redux'


const cities = [
    'Buenos Aires,ar',
    'Washington dc,us',
    'Bogota,col',
    'Quito,ec'
]

class App extends Component{

    //creamos el store y pasamos el reduxser
    store = createStore(()=>{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    constructor() {
        super();
        this.state ={
            city:null
        }
    }

    handleSelectedLocation = (city) =>{
        this.setState({
            city,
        })
        this.store.dispatch(
            {type:"setCity",value:city}
            )//ayuda a disparar la accion

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
                      <LocationList cities={cities}
                                    onSelectedLocation={this.handleSelectedLocation}>
                      </LocationList>
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
