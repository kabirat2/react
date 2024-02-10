import React from "react";


 export const Httpmethod = ({data}) => {
  return(
    <>
    <div>
    {
        data.map(({title, images, description})=>
        <div  className='d-flex '>
            <img className="allimage" width={'100px'} height={'100px'} src={images[0]} alt="" />
            <p>{title}</p>
            <p>{description}</p>
        </div>
        )
    }
    </div>
    </>
  )
}


export default Httpmethod