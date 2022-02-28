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
}

export const RestartButton: React.VFC<Props> = (props) => {
  return (
    <Button css={buttonStyle} variant="contained">
      <Link css={hrefResetStyle} to="/quiz">
        {props.children}
      </Link>
    </Button>
  )
}
