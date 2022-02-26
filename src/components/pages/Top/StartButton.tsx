/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const buttonStyle = css`
  font-size: 30px;
  margin-top: 30px;
  width: 100%;
  padding: 10px 0;
  max-width: 300px;
`
const hrefResetStyle = css`
  color: #fff;
  text-decoration: none;
`

interface Props {
  children: string
}

export const StartButton: React.VFC<Props> = (props) => {
  return (
    <Button css={buttonStyle} variant="contained">
      <Link css={hrefResetStyle} to="/quiz">
        {props.children}
      </Link>
    </Button>
  )
}
