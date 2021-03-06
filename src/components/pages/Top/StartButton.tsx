/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const buttonStyle = css`
  font-size: 30px;
  margin-top: 30px;
  width: 100%;
  max-width: 300px;
  padding: 0;
`
const hrefResetStyle = css`
  color: #fff;
  text-decoration: none;
  display: block;
  width: 100%;
  padding: 15px 0;
`

type Props = {
  children: string
  startFlag: boolean
}

export const StartButton: React.VFC<Props> = (props) => {
  const button = new Audio(`${process.env.PUBLIC_URL}/assets/voices/button.mp3`)
  return (
    <Button
      css={buttonStyle}
      variant="contained"
      disabled={props.startFlag}
      onClick={() => button.play()}
    >
      <Link css={hrefResetStyle} to="/quiz">
        {props.children}
      </Link>
    </Button>
  )
}
