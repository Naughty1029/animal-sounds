// import { useState,useEffect } from 'react';
import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid';
// import defaultDataset from 'dataset';
// import { AnimalCard } from 'components/organisms/AnimalCard';
import { Link } from 'react-router-dom'

export const Quiz: React.VFC = () => {
  // const initQuestion = (datas:Animal[]) => {
  //     console.log(datas);
  // }

  // initQuestion(defaultDataset);
  // const datas = defaultDataset;
  // const copyDatas = datas.slice();
  // const selectedDatas = [...Array(3)].map(() => (
  //     copyDatas.splice(Math.floor(Math.random() * copyDatas.length), 1)[0]
  // ));

  return (
    <>
      <h1>Quiz Page</h1>
      <Box sx={{ flexGrow: 1 }}>
        {/* <Grid container spacing={2}>
                    {selectedDatas.map((data,index)=>(
                        <Grid key={index} item xs={4}>
                            <AnimalCard name={data.name} image={data.image}/>
                        </Grid>
                    ))}
                </Grid> */}
      </Box>
      <Link to="/">TOP</Link>
    </>
  )
}
