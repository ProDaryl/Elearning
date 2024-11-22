'use client'
import React from 'react'

type Props = {
    funnelpageID:"string"
}

const  page = (params: Props) => {
    console.log(params)
  return (
    <div>page</div>
  )
}

export default page