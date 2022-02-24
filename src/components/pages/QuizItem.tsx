import { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { AnimalCard } from './AnimalCard'

interface Animal {
  name: string
  image: string
  sound: string
}

export const QuizItem = ({ dataSet, answers }) => {
  const [page, setPage] = useState(0)
  console.log(dataSet, answers)

  const checkAnswer = (answer) => {
    if (answer === answers[page]) {
      console.log('あたり')
    } else {
      console.log('はずれ')
    }
    return true
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {dataSet[page].map((data: any, index: number) => (
            <Grid key={index} item xs={4}>
              <AnimalCard
                name={data.name}
                image={data.image}
                sound={data.sound}
                checkAnswer={checkAnswer}
              />
            </Grid>
          ))}
          <div onClick={() => setPage(1)}>aaa</div>
        </Grid>
      </Box>
    </>
  )
}
