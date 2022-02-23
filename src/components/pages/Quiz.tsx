import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import defaultDataset from 'dataset'
import { AnimalCard } from 'components/organisms/AnimalCard'
import { Link } from 'react-router-dom'

type Animal = {
  name: string
  image: string
  sound: string
}

export const Quiz: React.VFC = () => {
  const [page, setPage] = useState(0)
  const [question, setQuestion] = useState([
    {
      name: 'aaa',
      image: 'aaa',
      sound: 'aaa',
    },
  ])
  const [answer, setAnswer] = useState({})
  const choices = 3 //選択肢の数
  console.log(question)

  //選択肢
  const initQuestion = (datas: Animal[]) => {
    const shuffledData = shuffleArray(datas)
    return sliceByNumber(shuffledData, choices)
  }

  //配列をシャッフルして、問題の順番・組み合わせを変更する
  const shuffleArray = (array: Animal[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      let r = Math.floor(Math.random() * (i + 1))
      let tmp = array[i]
      array[i] = array[r]
      array[r] = tmp
    }
    return array
  }

  //配列をn個ずつに分割する
  const sliceByNumber = (array: Animal[], number: number) => {
    const length = Math.ceil(array.length / number)
    return new Array(length)
      .fill(undefined)
      .map((v, i) => array.slice(i * number, (i + 1) * number))
  }

  //正解の配列を生成する
  const initAnswerArray = (data: any): string[] => {
    const newAnswer = new Array(data.length).fill(undefined).map((v, i) => {
      let r = Math.floor(Math.random() * choices)
      return data[i][r]['sound']
    })
    return newAnswer
  }

  // const checkAnswer = (answer:string):boolean => {
  //   if(answer === answers[page]){
  //     alert('正解');
  //   }else{
  //     alert('不正解');
  //   }
  //   return true;
  // }

  //問題と正解の配列をそれぞれ作って管理する
  useEffect(() => {
    let dataSet = initQuestion(defaultDataset)
    setQuestion(dataSet)
    let answer = initAnswerArray(dataSet)
    setAnswer(answer)
  }, [])

  return (
    <>
      <h1>Quiz Page</h1>
      <br />
      <br />
      <Link to="/">TOPへ</Link>
      <br />
      <br />
      <br />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {question[page].map((data: any, index: number) => {
            console.log(data.name)
            return (
              <Grid key={index} item xs={4}>
                <AnimalCard
                  name={data.name}
                  image={data.image}
                  sound={data.sound}
                  checkAnswer={checkAnswer}
                />
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <br />
      <br />
      <div>次の問題へ</div>
    </>
  )
}
