"use client";
import CreateItem from "@/components/create-item";
import { GET_USERS, GET_USUARIO_QUERY } from "@/graphql/queries";
import { useItems } from "@/hooks/useItems";
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
const client = generateClient();

export default function Home() {
 
  const { items, loading } = useItems();
  

  const handleOneUser = async (id:string) => {

    const result:any = await client.graphql({
      query: GET_USUARIO_QUERY,
      variables: {
        id
      }
    });
    
    const keys = Object.entries(result.data.listActividades);
    
    alert(keys)
  }

  

  return (
    <main className="flex min-h-screen items-center justify-evenly gap-2 p-24">
      <div className="grid grid-cols-3 gap-2">
      {
        loading ?
        <p>Loading...</p>:
        items.map((user:any)=>(
          <div 
          onClick={()=>handleOneUser(user.id)}
          className="border border-gray-800 p-2 rounded-md cursor-pointer hover:shadow-md hover:scale-105"          
          key={user.id}>
          
          <p>{user.url_video}</p>
          </div>
        ))
      }
      </div>
      <CreateItem />
    </main>
  );
}
