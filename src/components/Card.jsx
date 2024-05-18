// import { Card, CardHeader, CardBody, CardFooter, Typography,Button, } from "@material-tailwind/react";
   
//   export function CardBerita() {
//     return (
//       <Card className="my-6 mr-3 w-96 ">
//         <CardHeader color="blue-gray" className="relative h-56">
//           <img
//             src="https:source.unsplash.com/random"
//             alt="card-image"
//           />
//         </CardHeader>
//         <CardBody>
//           <Typography variant="h5" color="blue-gray" className="mb-2">
//             UI/UX Review Check
//           </Typography>
//           <Typography>
//             The place is close to Barceloneta Beach and bus stop just 2 min by
//             walk and near to &quot;Naviglio&quot; where you can enjoy the main
//             night life in Barcelona.
//           </Typography>
//         </CardBody>
//         <CardFooter className="pt-0">
//           <Button>Read More</Button>
//         </CardFooter>
//       </Card>
//     );
//   }

import React from 'react'

const CardBerita = () => {
  return (
    <div>
      <div className="shadow-xl card card-compact w-96 bg-base-100">
    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="justify-end card-actions">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default CardBerita