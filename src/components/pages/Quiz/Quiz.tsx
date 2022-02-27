/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from '@emotion/styled'
import defaultDataset from 'dataset'
import { QuizItem } from './QuizItem'
import { CommonLayout } from 'components/layouts/CommonLayout'

interface Animal {
  name: string
  image: string
  sound: string
}

export const Quiz = () => {
  const choices = 3 //選択肢の数

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

  let dataSet: Animal[][] = initQuestion(defaultDataset)
  let answers: string[] = initAnswerArray(dataSet)

  return (
    <>
      <CommonLayout>
        <SInnerDiv>
          <STitle>どーれだ？</STitle>
          <QuizItem dataSet={dataSet} answers={answers} />
        </SInnerDiv>
      </CommonLayout>
    </>
  )
}

const STitle = styled.h1`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 1em;
  color: #ffffff;
  text-shadow: 0 0 15px #007dc7;
`

const SInnerDiv = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 40px;
  text-align: center;
`
