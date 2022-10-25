import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Item1() {
    const item={
        "id":19,
        "name":"Bergamot",
        "desc":"Do you know how to pronounce Bergamot? Because I don't",
        "price":34.55,
        "img":"https://post.healthline.com/wp-content/uploads/2018/11/Bergamot_Oil-732x549-thumbnail.jpg",
        "category_id":4,
        "category_name":'Energy'
      }    



  return (
      <Grid container spacing={1} sx={{m:1, pr:2, border:'1px solid', borderRadius:1}}>
        <Grid item xs={12} sm= {12} md={12}>
          <Item sx={{display:"flex", justifyContent:'center'}}>
            <Avatar alt={item.name} sx={{height:'30%', width:'30%'}} variant="rounded" src={item.img}></Avatar>
          </Item>
        </Grid>
        <Grid item sm={12} xs={12} md={12}>
            <Item sx={{height:"100%", alignContent:"center"}}>
                <Typography variant="subtitle1"><strong>Item Name:</strong></Typography>
                <Typography variant="body1">{item.name}</Typography>
            </Item>
        </Grid>
        <Grid item sm={6} xs={6} md={6}>
            <Item sx={{height:"100%", alignContent:"center"}}>
                <Typography variant="subtitle1"><strong>Price:</strong></Typography>
                <Typography variant="body1">{item.price}</Typography>
            </Item>
        </Grid>
        <Grid item sm={6} xs={6} md={6}>
            <Item sx={{height:"100%", alignContent:"center"}}>
                <Typography variant="subtitle1"><strong>Item ID:</strong></Typography>
                <Typography variant="body1">{item.id}</Typography>
            </Item>
        </Grid>
        <Grid item sm={12} xs={12} md={12}>
            <Item sx={{height:"100%", alignContent:"center"}}>
                <Typography variant="subtitle1"><strong>Description:</strong></Typography>
                <Typography variant="body1">{item.desc}</Typography>
            </Item>
        </Grid>
        <Grid item sm={12} xs={12} md={12}>
            <Item sx={{height:"100%", alignContent:"center"}}>
                <Typography variant="subtitle1"><strong>Category:</strong></Typography>
                <Typography variant="body1">{item.category_name}</Typography>
            </Item>
        </Grid>      
        
        

      </Grid>
  );
}