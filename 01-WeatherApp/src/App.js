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
import {setCity} from './actions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
//connect sirve para conectar react y redux...

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

    handleSelectedLocation = (city) =>{
        this.setState({
            city,
        })


        // store.dispatch(
        //     setCity(city) //Accion
        //     )//ayuda a disparar la accion

        this.props.setCity(city);
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

//CONNECT
//se utiliza sobre cada componente que queramos darle acceso al store
//de alguna manera le envuelve al componente
//y le ofrece la capacidad de acceder al store
    //export default App;

App.propTypes = {
    setCity:PropTypes.func.isRequired,
}


const mapDispatchToPropsActions = dispatch =>({
    setCity: value =>dispatch(setCity(value))
});
const AppConnected = connect(null,mapDispatchToPropsActions)(App)//retorna otra funcion....
export default AppConnected;

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