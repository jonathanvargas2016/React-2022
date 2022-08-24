import React from 'react'
import { useFetch, useCounter } from '../hook'
import { Loading, Quote } from './index'

export const MultipleCustomHooks = () => {


  const { counter, increment } = useCounter(1)

  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  const { author, quote } = !!data && data[0]

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        isLoading ? <Loading /> : <Quote quote={quote} author={author} />
      }

      <button className='btn btn-outline-success' disabled={isLoading} onClick={() => increment()}>Next quote</button>





    </>
  )
}
