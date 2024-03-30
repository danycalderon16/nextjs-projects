"use client";
import CreateItem from "@/components/create-item";
import { GET_USUARIO_QUERY, GET_VIDEOS } from "@/graphql/queries";
import { useItems } from "@/hooks/useItems";
import { generateClient } from "aws-amplify/api";
import {Videos} from "@/interfaces/videos"
const client = generateClient();

export default function Name() {
  const { items, loading, error } = useItems<Videos>({query:GET_VIDEOS,name:"listInteractiveVideos"});
  const handleOneVideo = async (id:string) => {

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
      {/* {
        error ? <p>{error}</p> :
        loading ?
        <p>Loading...</p>:
        items.map((video:Videos)=>(
          <div 
          onClick={()=>handleOneVideo(video.idProject)}
          className="border border-gray-800 p-2 rounded-md cursor-pointer hover:shadow-md hover:scale-105"          
          key={video.idActivity}>
          
          <p>{video.urlVideo}</p>
          </div>
        ))
      } */}
      </div>
      <CreateItem />
    </main>
  );
}