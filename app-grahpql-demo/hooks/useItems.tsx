'use client';
import { useEffect, useState } from "react"; 
import { GET_ITEMS, GET_USUARIO_QUERY } from "@/graphql/queries";
import { generateClient } from "aws-amplify/api";
const client = generateClient();

export const useItems = () => {

  const [items, setItems] = useState<any[]>([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true)
      const results:any = await client.graphql({
        query: `query MyQuery {
          listVideosInteractivos {
            items {
              createdAt
              id_actividad
              id_creador
              id_proyecto
              url_video
              timestamps {
                time
                tipo
                act {
                  correctAnswer
                  incorrectAnswer1
                  incorrectAnswer3
                  question
                  incorrectAnswer2
                }
              }
              updatedAt
            }
          }
        }`
      });

      console.log({results});      

      setItems([...results.data.listVideosInteractivos.items]);
      setLoading(false)
    };
    fetchItems();
  }, []);

  return {
    items,
    loading
  }
}