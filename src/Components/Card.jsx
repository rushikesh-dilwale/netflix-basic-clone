import React,{ useEffect, useState } from 'react'
import axios from 'axios'


const Card = () => {
 
    const [newData,  setnewData] = useState([])

    useEffect(() => {
        getData()
        console.log (newData)
     });


     
 const getData=async()=>{
    const result= await axios.get("https://www.omdbapi.com/?s=star%20wars&apikey=263d22d8")
    
    setnewData(result.data.Search)
    console.log(result.data)
 }
    
   
  return (
    <>
    <div className='cardSection'>
        {/* <button onClick={()=>{console.log(newData)}}>Click here</button> */}
        {/* <h1>{newData[0].Poster}</h1> */}
       {newData.map((item)=>(
            <div className="card">
      <img className='Rushi' src={item.Poster} alt="Avatar" style={{"width":"100px"}}/>
      <div className="container">
        <h4><b>{item.Title}</b></h4> 
        <p>{item.Type}</p> 
      </div> 
    </div> 
     ))} 
         
      

    </div>
    </>
  )
  }

  export default Card

// const [data, setData] = useState([])


// useEffect(()=>{
//     getData()
//     console.log(data)
// });

// const getData=async()=>{
//     const result= await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
//     setData(result.data.abilities)
// };








// return(
//   <>

//   {data.map((item)=>(
//      <div>
//      <div className="card">

//       <img src={item.url} alt='logo'/>
//       <h2 >{item.name}</h2>

//      </div>
//   </div>



//   ))}
   
//   </>

// )

// }
