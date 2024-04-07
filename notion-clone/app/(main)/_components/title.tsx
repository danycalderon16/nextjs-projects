"use client"

import { Doc } from '@/convex/_generated/dataModel'
import React from 'react'

interface Props {
  initialData: Doc<"documents">
}

export const Title = ({initialData}:Props) => {
  return (
    <div>Title</div>
  )
}
