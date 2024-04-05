"use client"
import { useUser } from '@clerk/clerk-react'
import { useQuery } from 'convex/react'
import { File } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { CommandDialog } from '@/components/ui/command'
import { api } from '@/convex/_generated/api'
import { useSearch } from '@/hooks/use-search'

export const SearchCommand = () => {

  const {user } = useUser();
  const router = useRouter(); 
  const docuemnts = useQuery(api.docuements.getSearch)
  const [isMounted, setIsMounted] = useState(false)

  const toggle = useSearch((store)=> store.toggle)
  const isOpen = useSearch((store)=> store.isOpen)
  const onClose = useSearch((store)=> store.onClose)

  useEffect(()=>{
    setIsMounted(true);

  },[])
  
  if(!isMounted){
    return null;
  }

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>search-command</CommandDialog>
  )
}
