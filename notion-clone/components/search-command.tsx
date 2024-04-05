"use client"
import { useUser } from '@clerk/clerk-react'
import { useQuery } from 'convex/react'
import { File } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { CommandDialog } from '@/components/ui/command'

export const SearchCommand = () => {

  const {user } = useUser();
  const router = useRouter(); 
;  
  return (
    <CommandDialog>search-command</CommandDialog>
  )
}
