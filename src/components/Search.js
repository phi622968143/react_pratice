import React ,{useState} from 'react'

const Search = ({search,setinput}) => {
   const inputhandler=(e)=>{
        setinput(e.target.value);//change state to input  as click
   }//e is input
   const handleKeyPress=(e)=> {//listen keypress
        if (e.key === 'Enter') {
            search(); // 在按下 Enter 时触发搜索
        }
    }
    return (
    <div className="search"> 
       <img src="https://img.freepik.com/premium-photo/magnifier-glass_172429-232.jpg" 
        width={50} height={50}  />
        <input className="input" onChange={inputhandler}  onKeyPress={handleKeyPress} type="text" />
    </div>
    );
}
export default Search;
