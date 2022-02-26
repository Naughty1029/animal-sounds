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
        <div>
          <h1>どーれだ？</h1>
          <QuizItem dataSet={dataSet} answers={answers} />
        </div>
      </CommonLayout>
    </>
  )
}
