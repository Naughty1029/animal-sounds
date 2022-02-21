import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import Button from '@mui/material/Button'
//型エイリアス
type Animal = {
  name: string
  image: string
}
const path = `${process.env.PUBLIC_URL}/assets/images/`

export const AnimalCard: React.VFC<Animal> = ({ name, image }) => {
  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={path + image}
            alt={name}
          />
        </CardActionArea>
      </Card>
      <Button variant="contained">{name}</Button>
    </>
  )
}
