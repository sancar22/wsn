import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [dataB1, setDataB1] = useState([]);
  const [dataB2, setDataB2] = useState([]);
  const [dataB3, setDataB3] = useState([]);
  useEffect(() => {
    getInfo();
    setInterval(() => {
      getInfo();
    }, 1000);
  }, []);
 
  const getInfo = () => {
    console.log('rep')
    let firstAPICall =   fetch("http://localhost:4000/xbee1")
    let secondAPICall =   fetch("http://localhost:4000/xbee2")
    let thirdAPICall =    fetch("http://localhost:4000/xbee3")
    Promise.all([firstAPICall, secondAPICall, thirdAPICall])
    .then(values => Promise.all(values.map(value => value.json())))
    .then(finalVals => {
     let {data1} = finalVals[0]
     setDataB1(data1)
     let {data2} = finalVals[1]
     setDataB2(data2)
     let {data3} = finalVals[2]
     setDataB3(data3)
    });
    
  };

 

 let utcSeconds =1572808270.1176927;
 
 let current1 = dataB1.map(({ current }) => current.toFixed(3));
 let current2 = dataB2.map(({ current }) => current.toFixed(3));
 let current3 = dataB3.map(({ current }) =>  current.toFixed(3));
 let current1t = dataB1.map(({ current }) =>  <tr><td>{current}</td></tr>);
 let current2t = dataB2.map(({ current }) =>  <tr><td>{current}</td></tr>);
 let current3t = dataB3.map(({ current }) =>  <tr><td>{current}</td></tr>);
 let lost1 = dataB1.map(({ lostPackages }) =>  <tr><td>{lostPackages}</td></tr>);
 let lost2 = dataB2.map(({ lostPackages }) =>  <tr><td>{lostPackages}</td></tr>);
 let lost3 = dataB3.map(({ lostPackages }) =>  <tr><td>{lostPackages}</td></tr>);
 let total1 = dataB1.map(({ totalPackages}) =>  <tr><td>{totalPackages}</td></tr>);
 let total2 = dataB2.map(({totalPackages }) =>  <tr><td>{totalPackages}</td></tr>);
 let total3 = dataB3.map(({ totalPackages }) =>  <tr><td>{totalPackages}</td></tr>);
 let time1 = dataB1.map(({time}) =>  {
  let d = new Date(0); 
  d.setUTCSeconds(time);
  let timeString = d.toString();
  let timeStringSlice = timeString.slice(3,24)

   return(
    <tr><td>{timeStringSlice}</td></tr>
   )
 });
 let time2 = dataB2.map(({time}) =>  {
  let d = new Date(0); 
  d.setUTCSeconds(time);
  let timeString = d.toString();
  let timeStringSlice = timeString.slice(3,24)

   return(
    <tr><td>{timeStringSlice}</td></tr>
   )
 });
 let time3 = dataB3.map(({time}) =>  {
  let d = new Date(0); 
  d.setUTCSeconds(time);
  let timeString = d.toString();
  let timeStringSlice = timeString.slice(3,24)

   return(
    <tr><td>{timeStringSlice}</td></tr>
   )
 });
 let pr1 = dataB1.map(({ lostPackages, totalPackages}) => (lostPackages/totalPackages).toFixed(3));
 let pr2 = dataB2.map(({ lostPackages, totalPackages }) =>   (lostPackages/totalPackages).toFixed(3));
 let pr3 = dataB3.map(({ lostPackages, totalPackages}) =>  (lostPackages/totalPackages).toFixed(3));
 return (
    <div className="container">
      <div className="texto">WSN XBEE PRO INFORMATION</div>
      <div className="textContainer">
        <div className="texto">Xbee1 Mac: 0013A200405C267B</div>
        <div className="texto">Xbee2 Mac: 0013A2004033E989</div>
        <div className="texto">Xbee3 Mac: 0013A200405C2686</div>
      </div>
      <div className="parent1">
        <div className="div1">
          <p className="info">Current:</p>
         <div className="info surr">{current1[0]}A</div>
        </div>
        <div className="div1">
          <p className="info">Current:</p>
          <div className="info surr">{current2[0]}A </div>
        </div>
        <div className="div1">
          <p className="info">Current:</p>
          <div className="info surr">{current3[0]}A </div>
        </div>
      </div>
      <div className="parent1">
        <div className="div1">
          <p className="info">PLR:</p>
         <div className="info surr1">{pr1[0]}</div>
        </div>
        <div className="div1">
          <p className="info">PLR:</p>
          <div className="info surr1">{pr2[0]} </div>
        </div>
        <div className="div1">
          <p className="info">PLR:</p>
          <div className="info surr1">{pr3[0]} </div>
        </div>
      </div>
     <div className="textContainer"> 
      <div className="parent1">
        <div className="scrollit">
        <table className="table1">
          <tr>
            <th>Current</th>
          </tr>
          {current1t}
           
          
          
        </table>
        <table className="table2">
          <tr>
            <th>Time</th>
          </tr>
        {time1}
          
          
        </table>
        <table className="table1">
          <tr>
            <th>LP</th>
          </tr>
         {lost1}
           
          
          
        </table>
        <table className="table1">
          <tr>
            <th>TP</th>
          </tr>
        {total1}
          
          
        </table>
        </div> 
      </div>
      <div className="parent1">
        <div className="scrollit">
        <table className="table1">
          <tr>
            <th>Current</th>
          </tr>
          {current2t}
           
          
          
        </table>
        <table className="table2">
          <tr>
            <th>Time</th>
          </tr>
         {time2}
          
          
        </table>
        <table className="table1">
          <tr>
            <th>LP</th>
          </tr>
          {lost2}
           
          
          
        </table>
        <table className="table1">
          <tr>
            <th>TP</th>
          </tr>
        {total2}
          
          
        </table>
        </div> 
      </div>
      <div className="parent1">
        <div className="scrollit">
        <table className="table1">
          <tr>
            <th>Current</th>
          </tr>
          {current3t}
           
          
          
        </table>
        <table  className="table2">
          <tr>
            <th>Time</th>
          </tr>
       {time3}
          
          
        </table>
        <table className="table1">
          <tr>
            <th>LP</th>
          </tr>
         {lost3}
          
        </table>
        <table className="table1">
          <tr>
            <th>TP</th>
          </tr>
         {total3}
          
          
        </table>
        </div> 
      </div>
      </div>
    </div>
  );
}

export default App;
