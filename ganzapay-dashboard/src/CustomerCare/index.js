import React from 'react';
import { BarChart, Bar, XAxis, YAxis,ResponsiveContainer } from 'recharts';
import { FiClock, FiXCircle, FiCheckCircle, FiCalendar } from 'react-icons/fi';
import './index.css';


const responseTimeData = [
 { day: 'Monday', responseTime: 30000 },
 { day: 'Tuesday', responseTime: 75000 },
 { day: 'Wednesday', responseTime: 80000 },
 { day: 'Thursday', responseTime: 70000 },
 { day: 'Friday', responseTime: 80000 },
 { day: 'Saturday', responseTime: 95000 },
];


const CustomerCare = () => {
 return (
   <div className="customer-care">
     <h1>Customer Care</h1>
    
     <div className="content">
       <div className="metrics">
         <div className="metric">
           <h3>First Call Resolution</h3>
           <div className="icon"><FiClock /></div>
         </div>
         <div className="metric">
           <h3>Unresolved Calls</h3>
           <div className="icon"><FiXCircle /></div>
         </div>
         <div className="metric">
           <h3>Average Response Time</h3>
           <div className="icon"><FiCheckCircle /></div>
         </div>
         <div className="metric">
           <h3>Best day to call</h3>
           <div className="icon"><FiCalendar /></div>
         </div>
       </div>
      
       <div className="charts">
         <div className="chart">
           <h2>Response Time</h2>
           <ResponsiveContainer width="100%" height={200}>
             <BarChart data={responseTimeData}>
               <XAxis dataKey="day" />
               <YAxis />
               <Bar dataKey="responseTime" fill="#302EA8" />
             </BarChart>
           </ResponsiveContainer>
         </div>
        
         <div className="chart">
           <h2>Response Time</h2>
           <ResponsiveContainer width="100%" height={200}>
             <BarChart data={responseTimeData}>
               <XAxis dataKey="day" />
               <YAxis />
               <Bar dataKey="responseTime" fill="#302EA8" />
             </BarChart>
           </ResponsiveContainer>
         </div>
       </div>
     </div>
   </div>
 );
};


export default CustomerCare;
