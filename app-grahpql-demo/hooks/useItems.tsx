'use client';
import { useEffect, useState } from "react"; 
import { generateClient } from "aws-amplify/api";
const client = generateClient();

interface Props<T> {
  query: string,
  name: string
}

export function useItems<T>({query, name}:Props<T>){

  const [items, setItems] = useState<T[]>([]);
  const [ loading, setLoading ] = useState<Boolean>(true);
  const [error, setError] = useState<String | null>();

  useEffect(() => {
    const fetchItems = async () => {
      
      setLoading(true);

      try {
        const results:any = await client.graphql({ query });      
        setItems([...results.data[name].items]);
        setLoading(false)
        setError(null);
      } catch (res:any) {
        const { errors } = res;
        console.error(errors);
        setError(errors[0].message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return {
    items,
    loading,
    error
  }
}