"use client"
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import {  DropdownMenu, DropdownMenuContent , DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useUser } from '@clerk/clerk-react'
import React from 'react'

export const UserItem = () => {
  const {user} = useUser()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div role='button' className="flex items-center text-sm p-3 w-full hover:bg-primary/5">
          <div className="gap-x-2 flex items-center max-w-[150px]">
            <Avatar className='h-5 w-5'>
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
          </div>
        </div>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
