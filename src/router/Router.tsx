import { useContext } from 'react'
import { PageContext } from 'providers/PageProvider'
import {
  BrowserRouter,
  Route,
  Switch,
  RouteProps,
  Redirect,
} from 'react-router-dom'
import { Top } from 'components/pages/Top/Top'
import { Quiz } from 'components/pages/Quiz/Quiz'
import { Done } from 'components/pages/Done/Done'
import { CommonLayout } from 'components/layouts/CommonLayout'
import { NotFoundPage } from 'components/pages/Error/NotFoundPage'

export const Router: React.VFC = () => {
  const { pageInfo } = useContext(PageContext)
  const GuardRoute = (props: RouteProps) => {
    if (!pageInfo) return <Redirect to="/" />
    return <Route {...props} />
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <CommonLayout>
            <Top />
          </CommonLayout>
        </Route>
        <GuardRoute exact path="/quiz">
          <CommonLayout>
            <Quiz />
          </CommonLayout>
        </GuardRoute>
        <GuardRoute exact path="/done">
          <CommonLayout>
            <Done />
          </CommonLayout>
        </GuardRoute>
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}
