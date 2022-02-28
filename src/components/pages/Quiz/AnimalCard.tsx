import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import { AnswerButton } from 'components/pages/Quiz/AnswerButton'

//型エイリアス
type Props = {
  name: string
  image: string
  sound: string
  checkAnswer: (value: string) => void
}
const path = `${process.env.PUBLIC_URL}/assets/images/animals/`

export const AnimalCard: React.VFC<Props> = ({
  name,
  image,
  sound,
  checkAnswer,
}) => {
  return (
    <>
      <Card onClick={() => checkAnswer(sound)}>
        <CardActionArea>
          <CardMedia component="img" image={path + image} alt={name} />
        </CardActionArea>
      </Card>
      <AnswerButton checkAnswer={checkAnswer} sound={sound}>
        {name}
      </AnswerButton>
    </>
  )
}
