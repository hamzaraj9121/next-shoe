'use client'
import { merastore } from '@/app/store/store'
import { useParams } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'
import { Provider } from 'react-redux'


function ProductDetail() {
    return <Provider store={merastore}>
      <ShowProductDetail />
    </Provider>
  }

const ShowProductDetail = () => {
  let params = useParams()
  let paramsABC = params.pname.replace("%20",' ')


  let shoseKiArrays = useSelector((store) => {
    return store.shoseKiArray
  })

  return (
    <div style={{display:'flex',justifyContent:'space-around',marginTop:"80px"}}>{

      shoseKiArrays.map((data) => {
        if (data.name == paramsABC) {
          return<div style={{ width: '300px', height: '400px', }} className='border border-dark shadow p-3 mb-5 bg-white rounded'>
            <h1 className='text-center'>{data.name}</h1>
            <div style={{flexDirection:'column'}} className='d-flex justify-content-center'>
            <img src={data.img} alt="" className='h-75 '  onClick={() => { Changerpage(data.name) }} />
           <p style={{textAlign: 'center'}}>${data.price}</p>
           <p style={{textAlign: 'center', fontFamily:'fantasy'}}> Buy the product Now!</p>
             </div> 
          </div>
        }
      })

    }
    </div>
  )
}

export default ProductDetail