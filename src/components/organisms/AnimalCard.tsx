import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import Button from '@mui/material/Button'
//型エイリアス
type Props = {
  name: string
  image: string
  sound: string
  checkAnswer: (value: string) => boolean
}
const path = `${process.env.PUBLIC_URL}/assets/images/`

export const AnimalCard: React.VFC<Props> = ({
  name,
  image,
  sound,
  checkAnswer,
}) => {
  console.log(name)
  return (
    <>
      <Card onClick={() => checkAnswer(sound)}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={path + image}
            alt={name}
          />
        </CardActionArea>
      </Card>
      <Button onClick={() => checkAnswer(sound)} variant="contained">
        {name}
      </Button>
    </>
  )
}
