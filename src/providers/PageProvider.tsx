import { createContext, useState, ReactNode, useContext } from 'react'

type PageContextProps = {
  pageInfo: boolean
  setPageInfo: React.Dispatch<React.SetStateAction<boolean>>
}

export const PageContext = createContext<PageContextProps>({
  pageInfo: false,
  setPageInfo: () => {},
})

export const PageProvider: React.VFC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pageInfo, setPageInfo] = useState(false)
  return (
    <PageContext.Provider value={{ pageInfo, setPageInfo }}>
      {children}
    </PageContext.Provider>
  )
}

export const useAuth = () => useContext(PageContext)
