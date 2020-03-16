import React, { useContext } from 'react'
import { Wrapper, SpinningCircle, Pp } from './loading.styles'
import { LoadingContext } from '../../context/loadingcontext'


const Loadings = () => {
    const { loadingCount } = useContext(LoadingContext)

    return (
        <>
            {loadingCount > 0 && (
                <Wrapper>
                    <Pp>Loading...</Pp>
                    <SpinningCircle />

                </Wrapper>
            )}
        </>
    )
}

export default Loadings
