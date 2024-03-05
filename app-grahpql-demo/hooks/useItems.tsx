'use client';
import { useEffect, useState } from "react"; 
import { GET_USERS, GET_USUARIO_QUERY } from "@/graphql/queries";
import { generateClient } from "aws-amplify/api";
const client = generateClient();

export const useItems = () => {

  const [items, setItems] = useState<any[]>([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true)
      const results:any = await client.graphql({
        query: GET_USERS,
      });

      console.log({results});
      

      setItems([...results.data.listActividades.items]);
      setLoading(false)
    };
    fetchItems();
  }, []);

  return {
    items,
    loading
  }
}