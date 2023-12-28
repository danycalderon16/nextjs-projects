"use client"
import React from 'react'
import { SimpleWidget } from '..'
import { IoCalculator } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { useAppSelector } from '@/store/store'

export function WidgetGrid() {
  const count = useAppSelector(state => state.counter.count);
  return (
    <div className="flex flex-wrap p-2">
        <SimpleWidget 
        title={count.toString()}
          label='Counter'
          subtitle='Contador client side'
          icon={<IoCalculator className="text-blue-600" size={70}/>}
          href='/dashboard/counter'
        />
      </div>
  )
}
