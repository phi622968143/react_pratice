import React from 'react'

const Picture = ({data}) => {//data from homepage
  return (
   <div className="picture">
    <div className="imageContainer">
      <a href={data.src.large} target={"_blank"}><img src={data.src.medium} alt="" /></a>
    </div>
   </div>
  );
}

export default Picture
