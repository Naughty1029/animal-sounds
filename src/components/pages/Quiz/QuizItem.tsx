import { useState } from 'react'
import Grid from '@mui/material/Grid'
import { AnimalCard } from 'components/pages/Quiz/AnimalCard'
import { QuizModal } from 'components/pages/Quiz/QuizModal'
import { useHistory } from 'react-router-dom'

type Animal = {
  name: string
  image: string
  sound: string
}
type Props = {
  dataSet: Animal[][]
  answers: string[]
}

export const QuizItem: React.VFC<Props> = ({ dataSet, answers }) => {
  const [page, setPage] = useState(0)
  const Correct = new Audio(
    `${process.env.PUBLIC_URL}/assets/voices/correct.mp3`,
  )
  const Incorrect = new Audio(
    `${process.env.PUBLIC_URL}/assets/voices/incorrect.mp3`,
  )

  const checkAnswer = (answer: string) => {
    if (answer === answers[page]) {
      Correct.play()
      if (page === dataSet.length - 1 && page !== 0) {
        Correct.addEventListener('ended', () => history.push('/done'))
      } else {
        Correct.addEventListener('ended', () =>
          setPage((prevCount) => prevCount + 1),
        )
      }
    } else {
      Incorrect.play()
    }
  }

  const history = useHistory()
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
