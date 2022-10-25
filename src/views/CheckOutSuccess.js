import React, { useEffect } from 'react'

export default function CheckOutSuccess() {

    useEffect(
        ()=>{console.log('clearing cart')},
        []
    )

  return (
    <div>
        Thanks for shopping with us today<br/>
        If we sent back info from our Flask App<br/>
        We could show this hear.  Like an order Numder and / or invoice

    </div>
  )
}
