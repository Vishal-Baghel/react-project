import { Box, Grid, Typography,CircularProgress } from '@material-ui/core';
import CardComponent from './Card';

import React from 'react';
import './Style.css';

function Cards({data:{confirmed,recovered,deaths,lastUpdate}}){
    if(!confirmed){
        return < CircularProgress/>
    }

  

    return(
        <Box className="component3">

            <Typography className='global' variant="h5">CoronaVirus Cases World-Wide</Typography>
            <Grid container  >
                <CardComponent 
                cardTitle='ConFirm'
                value={confirmed.value}
                desc='Number of ConFirm Cases of Covid-19'
                lastUpdate={lastUpdate}
                
                />
                  <CardComponent 
                   cardTitle='Recovered'
                value={recovered.value}
                desc='Number of Recovered Cases from Covid-19'
                lastUpdate={lastUpdate}
                
                />
                <CardComponent
                  cardTitle='Deaths'
                  value={deaths.value}
                  desc='Number of Deaths Cases by Covid-19'
                  lastUpdate={lastUpdate}
                
                />
            </Grid>
           

        </Box>
    
    )
}
export default Cards; 