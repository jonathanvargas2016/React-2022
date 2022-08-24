import React from 'react'
import { useCounter } from '../hook/useCounter'
import { useFetch } from '../hook/useFetch'

export const MultipleCustomHooks = () => {


  const { counter, increment } = useCounter(1)

  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  const { author, quote } = !!data && data[0]

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        isLoading ? (
          <div className='alert alert-info text-center'>
            Loading...
          </div>
        ) : (
          <blockquote className='blockquote text-end'>

            <p className='mb-3'>{quote} </p>

            <footer className='blockquote-footer'>{author} </footer>
          </blockquote>
          
        )
      }

      <button className='btn btn-outline-success' disabled={isLoading} onClick={() => increment()}>Next quote</button>





    </>
  )
}
