import React from 'react';
// import {withStyles} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import logo from './image/COVID19.jpg';
import './App.css';
import Cards from './components/Cards';

import { fetchData } from './services/Api';
import { Typography } from '@material-ui/core';
import Countries from './components/Countries'; 
import Chart1 from './components/Chart1'; 





class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      country :""
      
    
    }
  }
  async componentDidMount(){
    const fetchedData =  await fetchData();
    this.setState({
      data:fetchedData
    })
    console.log(fetchedData)
  }

   handleChanged= async(country)=>{
    const fetchedData =  await fetchData(country);
    this.setState({
      data:fetchedData,
      country:country
    })
    console.log(fetchedData)
  }
  

  render(){
    const {data} =  this.state
  
    return(
      
      <Box className = 'container'>
      <Box className='header' >
        Covid -19 CoranaVirus DashBoard
      </Box>
      <Typography className='lastUpdate'>Last Update : {data.lastUpdate && new Date (data.lastUpdate).toDateString()}</Typography>

  
      <img src={logo} alt='Covid' style={{width:185}} />
      <Cards data={data}  />

      <Countries handleChanged={this.handleChanged} />
      <Chart1 data={data}   />

     
    
    </Box>
    
    )
  }

  
}


export default App;
