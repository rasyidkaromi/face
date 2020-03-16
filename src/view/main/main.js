import React from 'react'
import { Wrapper, ContentWrapper, StyledRouter } from './main.styles'
import ListProduct from '../../components/ListProduct'

const Main = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <StyledRouter>
          <ListProduct path='/' default />
        </StyledRouter>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Main
