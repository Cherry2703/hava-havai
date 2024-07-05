import React from 'react';

import { Link } from 'react-router-dom';

import { Image } from '@adobe/react-spectrum';

import "./index.css"


const AirportTable = () => {
  const data = [
    {
      airport: 'Indra Gandhi International Airport',
      country: 'India',
      code: 'DEL',
      number: 3
    },
    {
      airport: 'Dubai International Airport',
      country: 'UAE',
      code: 'DXB',
      number: 5
    },
    {
      airport: 'Heathrow Airport',
      country: 'England',
      code: 'LHR',
      number: 6
    },
    {
      airport: 'Istanbul Airport',
      country: 'Turkey',
      code: 'IST',
      number: 3
    },
    {
      airport: 'Rajiv Gandhi International Airport',
      country: 'Texas',
      code: 'DFW',
      number: 14
    },
  ];

  console.log(data)

  return (
    
    <table>
      <tr className='table-row'>
        <th className='checkbox-th'>
          <input type="checkbox" />
        </th>
        <th className='airport'>All Airport</th>
        <th className='country'>Country</th>
        <th className='code'>Code</th>
        <th className='terminals'>Terminals</th>
        <th className='edit-del-cont'></th>
      </tr>
      {data.map(each=>(
        
        <tr className='table-row'>
          <td className='checkbox-th'>
            <Link to="airport">
            <input type="checkbox" id={each.airport}/>
            </Link>
          </td>
          
          <td className='airport' htmlFor={each.airport}>
            
            {each.airport}
            
            </td>
          
          <td className='country'>{each.country}</td>
          <td className='code'>{each.code}</td>
          <td className='terminals'>{each.number}</td>
          <td className='edit-del-cont'>
            <button type='button' className='edit-del-btn'>
              <Image src="https://res.cloudinary.com/ramcharan/image/upload/v1720148658/hava%20havai/tooltip_tihlgr.png"/>
            </button>
            <button type='button' className='edit-del-btn'>
              <Image src="https://res.cloudinary.com/ramcharan/image/upload/v1720114762/hava%20havai/delete-icon_e2ults.png"/>
            </button>
          </td>
        </tr>
        
      ))}
    </table>
    
  );
};

export default AirportTable