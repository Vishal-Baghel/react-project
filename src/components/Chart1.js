// import React from 'react';
// import { Box} from '@material-ui/core';
// import {Bar} from 'react-chartjs-2';

// const Chart1 = ({data1:{confirmed,recovered,deaths}})=>{
//     return(
        
//         <Bar 
//             data = {{
//                 labels: ['Infected', 'Recovered', 'Deaths'],
//                 datasets: [{
//                     label: 'People',
//                     data: [confirmed.value, 19, 3],
//                     backgroundColor: [
//                         'rgba(0, 0, 255, 0.5)',
//                         'rgba(0, 255, 0, 0.5)',
//                         'rgba(255, 0, 0, 0.5)',
//                     ],
//                 }]
//             }}
//             options= {{
//                 legend:{display:true},
//                 title:{display:true}
//             }}
        
//         />
//     )

// }
// export default Chart1;


import { Box } from '@material-ui/core'
import {Bar} from 'react-chartjs-2'
const Chart1 = ({data:{confirmed,recovered,deaths}})=>{
    return(
        <Box className='chartContainer'>
            {confirmed?
            <Bar
                
             data= {{
        labels: ['confirmed', 'deaths','recovered'],
        datasets: [{
            label: '# of Votes',
            data: [confirmed.value,deaths.value,recovered.value],
            backgroundColor: [
                'rgba(0, 9, 255, 0.5)',
                'rgba(255,0,0, 0.5)',
                'rgba(0, 255, 0, 0.5)',
              
            ],
      
        
        }]
    }}
    options= {{
        scales: {
            y: {
                beginAtZero: true
            }
        }
        
    }}
            /> :''}
        </Box>
    )


}
export default Chart1;