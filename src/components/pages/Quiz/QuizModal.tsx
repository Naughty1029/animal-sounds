/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Modal from '@mui/material/Modal'

type Props = {
  answer: string
}

export const QuizModal: React.VFC<Props> = ({ answer }) => {
  const hear = new Audio(`${process.env.PUBLIC_URL}/assets/voices/hear.mp3`)
  const animalVoice = new Audio(
    `${process.env.PUBLIC_URL}/assets/voices/animals/${answer}`,
  )

  const [open, setOpen] = useState(true)

  //よーく聞いてねを流す関数
  const readyVoice = () => {
    hear.volume = 0.2
    hear.play()
  }

  useEffect(() => {
    setOpen(true)
    hear.removeEventListener('ended', () => animalVoice.play())

    //一番最初の「よーくきいてね」を発火させる
    setTimeout(() => {
      readyVoice()
    }, 1000)

    hear.addEventListener('ended', () => {
      animalVoice.volume = 0.2
      animalVoice.play()
    })
    animalVoice.addEventListener('ended', () => setOpen(false))
  }, [answer])

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <STitle>よーくきいてね！</STitle>
      </Modal>
    </div>
  )
}

const STitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 1em;
  color: #ffffff;
  text-shadow: 0 0 15px #000000;
`
