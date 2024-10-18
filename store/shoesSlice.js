import { createSlice } from "@reduxjs/toolkit";
import Image from "next/image";

export const shoesSlice = createSlice({
    name: "shoesSlice",
    initialState: {
        shoseKiArray: [
            {

                name: "For Mens",
                img: '/images/post-item6.jpg',
                price:'2000'
            },
            {

                name: "For Kids",
                img: '/images/card-item7.jpg',
                price:'2000'
            },
            
            {

                name: "For Girls",
                img: "/images/card-large-item5.jpg",
              price:'5000'
            },

            {

                name: 'Classic',
                img: '/images/card-item6.jpg',
             price:'7000'
            },

        ]
    },

        reducers: {
            dataLao: (puranaData, nayaData) => {
                let Abc = false

                for (let i = 0; i < puranaData.shoseKiArray.length; i++) {
                    if (puranaData.shoseKiArray[i].name == nayaData.payload.name) {
                        break
                    }else{
                        Abc = true
                    }

                }

                if (Abc) {
                    puranaData.shoseKiArray.push(nayaData.payload)
                }

            }
        }
    })


    export const { dataLao } = shoesSlice.actions
//     reducers: {
//         dataLao: (puranaData, nayaData) => {
//             let abc = false;
//             for (let i = 0; i < puranaData.shoseKiArray.length; i++) {
//                 if (puranaData.shoseKiArray[i].name == nayaData.payload.name) {
//                     break
//                 } else {
//                     abc = true
//                 }
//             }
//             if (abc) {
//                 puranaData.shoseKiArray.push(nayaData.payload)
//             }
//         }
//     }
// })
// export const { dataLao } = shoesSlice.actions