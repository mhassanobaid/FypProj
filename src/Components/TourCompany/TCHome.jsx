// Home.js

import React from 'react';
import h from './TCHome.module.css';
//import {  BsFillGrid3X3GapFill, BsPeopleFill, BsBuilding ,BsFillDollarCircleFill,FaDollarSign} from 'react-icons/bs';
import {  BsFillGrid3X3GapFill, BsPeopleFill, BsBuilding , BsCoin } from 'react-icons/bs';

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';


const  TCHome=() =>{
  const tourCompaniesData = [
    { name: 'Company A', users: 400, tours: 240, revenue: 2400 },
    { name: 'Company B', users: 300, tours: 139, revenue: 2210 },
    { name: 'Company C', users: 200, tours: 98, revenue: 2290 },
    { name: 'Company D', users: 278, tours: 390, revenue: 2000 },
    { name: 'Company E', users: 189, tours: 480, revenue: 2181 },
    { name: 'Company F', users: 239, tours: 380, revenue: 2500 },
    { name: 'Company G', users: 349, tours: 430, revenue: 2100 },
  ];

  return (
    <>
    <section>
     
<div className={h.main_container}>
      <div className={h.main_cards}>
        <div className={h.card}>
          <div className={h.card_inner}>
        
            <BsPeopleFill className={h.card_icon} />
            <h3>Total Users</h3>
          </div>
          <h1>{tourCompaniesData.reduce((sum, company) => sum + company.users, 0)}</h1>
        </div>
        <div className={h.card}>
          <div className={h.card_inner}>
            <BsFillGrid3X3GapFill className={h.card_icon} />
            <h3>Total Tours</h3>
          </div>
          <h1>{tourCompaniesData.reduce((sum, company) => sum + company.tours, 0)}</h1>
        </div>
       
        <div className='card' style={{ width: '250px' }}>
          <div className={h.card_inner}>
            <BsBuilding className={h.card_icon} />
           
            <h3>Total Tour Companies</h3>
          </div>
          <h1>{tourCompaniesData.length}</h1>
        </div>
        <div className={h.card}>
          <div className={h.card_inner}>
            <BsCoin  className={h.card_icon}/>
          
         
            <h3>Total Revenue</h3>
          </div>
          <h1>${tourCompaniesData.reduce((sum, company) => sum + company.revenue, 0)}</h1>
        </div>
      </div>

      <div className={h.charts}>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={400}
            height={300}
            data={tourCompaniesData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='users' fill='#8884d8' />
            <Bar dataKey='tours' fill='#82ca9d' />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            width={400}
            height={300}
            data={tourCompaniesData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='users' stroke='#8884d8' activeDot={{ r: 8 }} />
            <Line type='monotone' dataKey='tours' stroke='#82ca9d' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    
    </div>
    </section>
    </>
  );
}

export default TCHome;
