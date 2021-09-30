import { Typography,NativeSelect } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {fetchCountries} from '../services/Api';


const Countries = ({handleChanged})=>{
    const [countries , setCountries] = useState([])

    useEffect(()=>{
         const fetchApi = async()=>{

          setCountries(await fetchCountries());
         }
         fetchApi();

    },[])
    return(
        <React.Fragment>

        <Typography variant="h5" style={{color:"green", marginBottom:20}}>Reported Cases or Deaths by Country</Typography>

        <NativeSelect onChange = {(e)=>handleChanged(e.target.value)} >
            <option value="">Select Country</option>
            {countries.map((country,i)=>{
                return(
                    <option key={i} value={country}>{country}</option>
                )
            })}


        </NativeSelect>
        </React.Fragment>

    )
}

export default Countries;