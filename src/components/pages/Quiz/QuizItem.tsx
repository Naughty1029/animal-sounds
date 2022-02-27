import { useState } from 'react'
import Grid from '@mui/material/Grid'
import { AnimalCard } from 'components/pages/Quiz/AnimalCard'
import { QuizModal } from 'components/pages/Quiz/QuizModal'

interface Animal {
  name: string
  image: string
  sound: string
}

export const QuizItem = ({ dataSet, answers }) => {
  const [page, setPage] = useState(0)

  const checkAnswer = (answer) => {
    if (answer === answers[page]) {
      alert('あたり')
      setPage((prevCount) => prevCount + 1)
    } else {
      alert('はずれ')
    }
    return true
  }

  return (
    <>
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
      </Grid>
      <QuizModal answer={answers[page]} />
    </>
  )
}
