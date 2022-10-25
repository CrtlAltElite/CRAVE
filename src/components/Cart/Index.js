import Box from '@mui/material/Box'
import CartItem from './CartItem'

export default function Index(){

    const cart =[{
        "id":1,
        "name":"itemA",
        "desc":"itemA is good",
        "price":9.99,
        "img":"https://res.cloudinary.com/cae67/image/upload/v1652745758/kyle1_plkclv.png",
        "category_id":2,
        "category_name":'Calming'
      },{
        "id":3,
        "name":"item3",
        "desc":"item3 is good",
        "price":9.99,
        "img":"https://res.cloudinary.com/cae67/image/upload/v1652745758/kyle1_plkclv.png",
        "category_id":2,
        "category_name":'Calming'
      },
      {
        "id":3,
        "name":"item3",
        "desc":"item3 is good",
        "price":9.99,
        "img":"https://res.cloudinary.com/cae67/image/upload/v1652745758/kyle1_plkclv.png",
        "category_id":2,
        "category_name":'Calming'
      },{
        "id":4,
        "name":"itemD",
        "desc":"itemD is good",
        "price":9.99,
        "img":"https://res.cloudinary.com/cae67/image/upload/v1652745758/kyle1_plkclv.png",
        "category_id":2,
        "category_name":'Calming'
      }]

      return (
          <Box sx={{mb:5}}>
              {
                  [...new Set(cart?.map(JSON.stringify))]?.map(JSON.parse)?.map(
                      (item)=><CartItem key={item.id} item={item}/>
                      )
              }
          </Box>
      )
}