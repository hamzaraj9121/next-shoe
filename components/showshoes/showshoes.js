import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'


const ShowAbout = () => {

  let shoekiArray=useSelector((store)=>{
       return store.shoseKiArray;
  })

  let changerouters = useRouter()

  function Changerpage(name) {
      changerouters.push('/ProductDetail/'+name)
  }

  return (
      <div style={{display:'flex',justifyContent:'space-around',marginTop:'100px',flexWrap:'wrap'}}>
        {
            shoekiArray.map((data)=>{
                return <div style={{width:'300px',height:'400px',border:'1px solid black'}} className='shadow p-3 mb-5 bg-white rounded'>
                    <h1 className='text-center'>{data.name}</h1>
                    <img src={data.img} alt="" width={250} height={250} onClick={()=>{Changerpage(data.name)}}/>
                    <p className='fw-bold text-center'>Price : ${data.price}</p>
                </div>
            })
        }
      </div>
  )
}

export default ShowAbout
