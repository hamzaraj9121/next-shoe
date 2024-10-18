
// 'use client'
// import React, { useRef } from 'react'
// import { useForm } from 'react-hook-form'
// import { Provider, useDispatch } from 'react-redux'
// import { merastore } from '../store/store'
// import { dataLao } from '../store/shoesSlice'


// const CreateProduct = () => {
//   return <Provider store={merastore}>
//     <ShowCreateProduct/>
//   </Provider>
// }


// const ShowCreateProduct = () => {
//   let imgref = useRef()
//   let disptach = useDispatch()

//   let {handleSubmit,register} = useForm()

//   let inputKaDataLao = (data) => {
//       let productkiDetail = {
      
        
//         ...data,
//         img:URL.createObjectURL(imgref.current.files[0])
//       }
//       console.log(productkiDetail)
//       disptach(dataLao(productkiDetail))

//   }
  
//   return (
//     <div className='mt-5 d-flex justify-content-center  '>
//       {/* <form style={{ backgroundColor: "green", border: "2px solid blue", color: "orange", }} onSubmit={handleSubmit(inputKaDataLao)} className='h-25 w-25 ' > */}
//       <form  onSubmit={handleSubmit(inputKaDataLao)} className='h-25 w-25 bg-primary-subtle
//  ps-3 ms-3 pt-4 px-4 py-5 rounded-5' >
//  <div className='d-flex justify-content-center ps-2 '>

//         <input type='text'  {...register("name")} className='ps-3 ms-3 pt-2 rounded-2 text-center' placeholder='Name'/>
//  </div>
//  <div className='d-flex justify-content-center pt-3'>

//         <input type='text'  {...register("id")} className='ps-3 ms-3 pt-2 text-center rounded-2' placeholder='Id'/>
//  </div>
//  <div className='d-flex justify-content-center pt-3'>

//        <input type='text' className='ps-3 ms-3 pt-2 text-center rounded-2'  {...register("price")} placeholder='Price'/>
//  </div>
//  <div className='d-flex justify-content-center m-auto pt-3  '>

//         <input type='file' ref={imgref} />
//  </div>
 
//         <div className='d-flex justify-content-center ps-5'>

//         <button className='btn border-dark h-25 w-25  bg-dark text-white'>Add</button>
//         </div>
//       </form>
//       {/* <img src="blob:http://localhost:3000/9dd0bb36-cbf0-4217-b8b3-c7dff1924abb" alt="sadknasjd,anjsdn" /> */}
//     </div>
//   )
// }

// export default CreateProduct
// 'use client'
// import React, { useRef, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { Provider, useDispatch } from 'react-redux'
// import { merastore } from '../store/store'
// import { dataLao } from '../store/shoesSlice'
// import { v4 as uuidv4 } from 'uuid' // Importing UUID v4

// const CreateProduct = () => {
//   return (
//     <Provider store={merastore}>
//       <ShowCreateProduct />
//     </Provider>
//   )
// }

// const ShowCreateProduct = () => {
//   const imgRef = useRef()
//   const dispatch = useDispatch()
//   const { handleSubmit, register,  formState: { errors } } = useForm()
//   const [existingIds, setExistingIds] = useState([]) // State to track existing IDs

//   const inputKaDataLao = (data) => {
//     const { id } = data

//     // Check if the ID already exists
//     if (existingIds.includes(id)) {
//       return;
//     }

//     const productDetail = {
//       ...data,
//       id: uuidv4(), // Generate a unique ID using UUID v4
//       img: URL.createObjectURL(imgRef.current.files[0]),
//     }

//     console.log(productDetail)
//     dispatch(dataLao(productDetail))
//     setExistingIds((prev) => [...prev, id]) // Add new ID to the existing IDs list
//   }

//   return (
//     <div className='mt-5 d-flex justify-content-center'>
//       <form
//         onSubmit={handleSubmit(inputKaDataLao)}
//         className='h-25 w-25 bg-primary-subtle ps-3 ms-3 pt-4 px-4 py-5 rounded-5'
//       >
//         <div className='d-flex justify-content-center ps-2'>
//           <input
//             type='text'
//             {...register("name")}
//             className='ps-3 ms-3 pt-2 rounded-2 text-center'
//             placeholder='Name'
//           />
//         </div>
//         <div className='d-flex justify-content-center pt-3'>
//           <input
//             type='text'
//             {...register("id")}
//             className='ps-3 ms-3 pt-2 text-center rounded-2'
//             placeholder='Id'
//           />
//           {/* Display error message for ID */}
//           {errors.id && <p className="text-danger">{errors.id.message}</p>}
//         </div>
//         <div className='d-flex justify-content-center pt-3'>
//           <input
//             type='text'
//             className='ps-3 ms-3 pt-2 text-center rounded-2'
//             {...register("price")}
//             placeholder='Price'
//           />
//         </div>
//         <div className='d-flex justify-content-center m-auto pt-3'>
//           <input type='file' ref={imgRef} />
//         </div>
//         <div className='d-flex justify-content-center ps-5'>
//           <button className='btn border-dark h-25 w-25 bg-dark text-white'>Add</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default CreateProduct



// 'use client'
// import React, { useRef, useState, useEffect } from 'react'
// import { useForm } from 'react-hook-form'
// import { Provider, useDispatch } from 'react-redux'
// import { merastore } from '../store/store'
// import { dataLao } from '../store/shoesSlice'

// const CreateProduct = () => {
//   return (
//     <Provider store={merastore}>
//       <ShowCreateProduct />
//     </Provider>
//   )
// }

// const ShowCreateProduct = () => {
//   const imgRef = useRef()
//   const dispatch = useDispatch()
//   const { handleSubmit, register, formState: { errors } } = useForm()
//   const [usedIds, setUsedIds] = useState([]) // Track used IDs

//   // Load used IDs from local storage on mount
//   useEffect(() => {
//     const storedIds = JSON.parse(localStorage.getItem('usedIds')) || [];
//     setUsedIds(storedIds);
//   }, []);

//   const inputKaDataLao = (data) => {
//     const { id } = data

//     // Check if the ID already exists
//     if (usedIds.includes(id)) {
//       // alert('This ID has already been used. Please choose a different ID.');
//       return; // Exit if the ID already exists
//     }

//     const productDetail = {
//       ...data,
//       id: id, // Use the provided ID
//       img: URL.createObjectURL(imgRef.current.files[0]),
//     }

//     console.log(productDetail)
//     dispatch(dataLao(productDetail))

//     // Update used IDs and local storage
//     const updatedUsedIds = [...usedIds, id];
//     setUsedIds(updatedUsedIds);
//     localStorage.setItem('usedIds', JSON.stringify(updatedUsedIds)); // Store updated IDs in local storage
//   }

//   return (
//     <div className='mt-5 d-flex justify-content-center'>
//       <form
//         onSubmit={handleSubmit(inputKaDataLao)}
//         className='h-25 w-25 bg-primary-subtle ps-3 ms-3 pt-4 px-4 py-5 rounded-5'
//       >
//         <div className='d-flex justify-content-center ps-2'>
//           <input
//             type='text'
//             {...register("name", { required: true })}
//             className='ps-3 ms-3 pt-2 rounded-2 text-center'
//             placeholder='Name'
//           />
//         </div>
//         <div className='d-flex justify-content-center pt-3'>
//           <input
//             type='text'
//             {...register("id", { required: true })}
//             className='ps-3 ms-3 pt-2 text-center rounded-2'
//             placeholder='Id'
//           />
//           {/* Display error message for ID */}
//           {errors.id && <p className="text-danger">ID is required</p>}
//         </div>
//         <div className='d-flex justify-content-center pt-3'>
//           <input
//             type='text'
//             className='ps-3 ms-3 pt-2 text-center rounded-2'
//             {...register("price", { required: true })}
//             placeholder='Price'
//           />
//         </div>
//         <div className='d-flex justify-content-center m-auto pt-3'>
//           <input type='file' ref={imgRef} />
//         </div>
//         <div className='d-flex justify-content-center ps-5'>
//           <button className='btn border-dark h-25 w-25 bg-dark text-white'>Add</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default CreateProduct

'use client'
import React, { useRef, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Provider, useDispatch } from 'react-redux'
import { merastore } from '../store/store'
import { dataLao } from '../store/shoesSlice'
import { v4 as uuidv4 } from 'uuid'; // Import UUID

const CreateProduct = () => {
  return (
    <Provider store={merastore}>
      <ShowCreateProduct />
    </Provider>
  )
}

const ShowCreateProduct = () => {
  const imgRef = useRef()
  const dispatch = useDispatch()
  const { handleSubmit, register, formState: { errors } } = useForm()
  const [usedIds, setUsedIds] = useState([]) // Track used IDs
  const [duplicateIdError, setDuplicateIdError] = useState(''); // State for duplicate ID error message

  // Load used IDs from local storage on mount
  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem('usedIds')) || [];
    setUsedIds(storedIds);
  }, []);

  const inputKaDataLao = (data) => {
    const { id } = data;

    // Check if the ID already exists
    if (usedIds.includes(id)) {
      setDuplicateIdError('This ID has already been used. Please choose a different ID.'); // Set error message
      return; // Exit if the ID already exists
    }

    const productDetail = {
      ...data,
      id: uuidv4(), // Generate a UUID for the product's internal ID
      img: URL.createObjectURL(imgRef.current.files[0]),
    }

    console.log(productDetail)
    dispatch(dataLao(productDetail))

    // Update used IDs and local storage
    const updatedUsedIds = [...usedIds, id];
    setUsedIds(updatedUsedIds);
    localStorage.setItem('usedIds', JSON.stringify(updatedUsedIds)); // Store updated IDs in local storage

    // Clear error message on successful submission
    setDuplicateIdError('');
  }

  return (
    <div className='mt-5 d-flex justify-content-center'>
      <form
        onSubmit={handleSubmit(inputKaDataLao)}
        className='h-25 w-25 bg-primary-subtle ps-3 ms-3 pt-4 px-4 py-5 rounded-5'
      >
        <div className='d-flex justify-content-center ps-2'>
          <input
            type='text'
            {...register("name", { required: true })}
            className='ps-3 ms-3 pt-2 rounded-2 text-center'
            placeholder='Name'
          />
        </div>
        <div className='d-flex justify-content-center pt-3'>
          <input
            type='text'
            {...register("id", { required: true })}
            className='ps-3 ms-3 pt-2 text-center rounded-2'
            placeholder='Id'
          />
          {/* Display error message for ID */}
          {errors.id && <p className="text-danger">ID is required</p>}
        </div>
        {duplicateIdError && <p className="text-danger">{duplicateIdError}</p>} {/* Display duplicate ID error */}
        <div className='d-flex justify-content-center pt-3'>
          <input
            type='text'
            className='ps-3 ms-3 pt-2 text-center rounded-2'
            {...register("price", { required: true })}
            placeholder='Price'
          />
        </div>
        <div className='d-flex justify-content-center m-auto pt-3'>
          <input type='file' ref={imgRef} />
        </div>
        <div className='d-flex justify-content-center ps-5'>
          <button className='btn border-dark h-25 w-25 bg-dark text-white'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default CreateProduct;
