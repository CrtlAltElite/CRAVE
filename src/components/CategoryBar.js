import React, {useState} from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function CategoryBar() {
  const categories = [{id:2, name:"Calming"},{id:4, name:"Energy"},{id:5, "name":"Healing"}]
  const  [actCat, setActCat] = useState({})

  const handleClick = (cat) => {
      if (actCat.id === cat.id){
          setActCat({})
      }else{
          setActCat(cat)
      }
  
  };

  return (
    <Stack direction="row" spacing={1}>
        {categories.map( (cat)=>( 
            cat.id === actCat.id ?
            <Chip key={cat.id} label={cat.name} color="primary" variant="filled" onClick={()=>handleClick(cat)}/> 
            :
            <Chip key={cat.id} label={cat.name} color="primary" variant="outlined" onClick={()=>handleClick(cat)}/>
         ) )}
    </Stack>
  );
}
