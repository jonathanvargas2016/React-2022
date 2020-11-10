import React, {Component} from 'react';
import './App.css';
// import LocationList from "./components/LocationList";
import {Grid,Row,Col} from 'react-flexbox-grid'

// const cities = [
//     'Buenos Aires,ar',
//     'Washington dc,us',
//     'Bogota,col',
//     'Ciudad de México,mx'
// ]
class App extends Component{

  //   handleSelectedLocation = (city) =>{
  //     console.log(`handleSelectedLocation ${city}`)
  // }



  render = () => {
      return (
          <Grid fluid>

              <Row>
                  <h1>Grid System</h1>
              </Row>

              <Row>
                  <h5>Las columnas se muestran en la misma fila mientras sumen 12</h5>
              </Row>


              <Row around="xs">
                  <Col xs={2}>
                      <div className='red'>

                      </div>
                  </Col>
                  <Col xs={2}>
                      <div className='green'>

                      </div>
                  </Col>
                  <Col xs={2}>
                      <div className='blue'>

                      </div>
                  </Col>
                  <Col xs={2}>
                      <div className='red'>

                      </div>
                  </Col>
              </Row>

          </Grid>


          // <div className="App">
          //     <LocationList cities={cities}
          //                   onSelectedLocation={this.handleSelectedLocation}>
          //     </LocationList>
          // </div>
      );
  }
}

export default App;
