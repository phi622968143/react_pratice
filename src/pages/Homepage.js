import React, { useState, useEffect } from "react";
import Search  from "../components/Search";
import Picture  from "../components/Picture";
import axios from 'axios';

//search:setting state  (search url) & chage result
//pic:get search data and use it's prop

const Homepage = () => {
  let [input,setinput]=useState("");
  let [data,setdata]=useState(null);
  let [page,setpage]=useState(1);
  let [currents,setcurrents]=useState("");
  const auth = "KzcEea0YftasFJ3dZk6gIuCdCgFdr7VVaLOM6y3Py6E8z6XFYPI7GK4m ";
  const initurl="https://api.pexels.com/v1/curated?page=1&per_page=9";
  const searchurl=`https://api.pexels.com/v1/search?query=${input}&per_page=9`;

  const search= async()=>{
      let result=await axios.get(searchurl,{headers:{Authorization:auth}});//do action as url
      setdata(result.data.photos);
      setcurrents(input);//change only click
  };
  const initsearch=async()=>{
    let result=await axios.get(initurl,{headers:{Authorization:auth}});//do action as url
    setdata(result.data.photos);
    setcurrents(input);//change only click
  };
  //closure
  const morePicture= async()=>{
      let newurl;
      setpage(page+1);
      if(currents===''){
        newurl=`https://api.pexels.com/v1/curated?page=${page+1}&per_page=9`;
      }else{
        newurl=`https://api.pexels.com/v1/search?query=${currents}&per_page=9&page=${page+1}`;
      }
      let result=await axios.get(newurl,{headers:{Authorization:auth}});//do action as url
      setdata(data.concat(result.data.photos));//new+old
  };
  useEffect(
    ()=>{initsearch(initurl);},[]
  );//set first rendering init

  return (
  <div style={{minHeight:"100vh"}}>  
    <Search search={search} setinput={setinput} url={searchurl}/>  
    <div className="pictures">
      {data &&
      data.map((d)=>{
        return <Picture data={d}/>
      })}
    </div>
      <div className="morePicture"><button onClick={morePicture}>下一頁</button></div>
  </div>);
};

export default Homepage;
