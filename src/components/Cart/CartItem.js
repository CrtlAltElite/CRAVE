import {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import  Avatar  from '@mui/material/Avatar';
import ChangeCartItemQuantity from './ChangeCartItemQuantity';
import CartCard from './CartCard';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function CartItem({ item }) {
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

      useEffect(()=>{
          setQty(cart.filter((cartItem)=>cartItem.id===item.id).length)
        },
        [cart, item]
    )


      const [qty, setQty] = useState(cart.filter((cartItem)=>cartItem.id===item.id).length)


  return (
    <Grid container spacing={2} sx={{m:1, pr:2, borderRadius:1, alignItems:"stretch"}}>
        <Grid item md={4} sm={6} xs={12}>
            <Item sx={{height:'100%'}}>
                <Avatar alt={item.name} variant="rounded" src={item.img} sx={{height:"100%", width:"100%"}} />
            </Item>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
            <Item sx={{height:'100%'}}>
                <CartCard item={item} />
            </Item>
        </Grid>
        <Grid item md={2} sm={6} xs={12}>
            <Item sx={{height:'100%'}}>
                <ChangeCartItemQuantity item={item} qty={qty} /> 
            </Item>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
            <Item sx={{height:'100%'}}>
                <div>
                    <strong> Item Subtotal </strong>
                    <br/>
                    ${(item.price*qty).toFixed(2)}
                </div>
            </Item>
        </Grid>
        
        
    </Grid>
  )
}
