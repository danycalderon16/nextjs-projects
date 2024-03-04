"use client";
import CreateItem from "@/components/create-item";
import { GET_USERS, GET_USUARIO_QUERY } from "@/graphql/queries";
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
const client = generateClient();

export default function Home() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const results = await client.graphql({
        query: GET_USERS,
      });

      setItems([...results.data.listUsuarios.items]);
    };
    fetchItems();
  }, []);
  

  const handleOneUser = async () => {

    const result = await client.graphql({
      query: GET_USUARIO_QUERY,
      variables: {
        id:'e9252267-fa01-4908-8fcc-686ce0ce07f4'
      }
    });
    
    const keys = Object.entries(result.data.getUsuario);
    
    alert(keys)
  }

  

  return (
    <main className="flex min-h-screen items-center justify-evenly gap-2 p-24">
      <div className="grid grid-cols-3 gap-2">
      {
        items &&
        items.map((user:any)=>(
          <div 
          onClick={()=>handleOneUser()}
          className="border border-gray-800 p-2 rounded-md cursor-pointer hover:shadow-md hover:scale-105"          
          key={user.id}>
          
          <p>{user.name}</p>
          </div>
        ))
      }
      </div>
      <CreateItem />
    </main>
  );
}
