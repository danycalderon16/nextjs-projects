"use client"
import Image from "next/image";
import React, { useState } from "react";

const  API_KEY  = process.env.YOUTUBE_API_KEY
export default function Page() {
  const [search, setSearch] = useState<string>("");
  const [videos, setVideos] = useState([]);

  const handleSearch = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${"AIzaSyC6CrOgFhWZ1wOKc2o6e3dYvU-yO_BirhQ"}&type=video&part=snippet&maxResults=${20}&q=${search}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setVideos(data.items);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching videos:', error);
      });
  }

  return (
    <main className="flex flex-col min-h-screen items-center gap-2 p-5">
      
        <div className="flex gap-1 w-full">
          <input 
          className="p-2 w-full  rounded-md"
          type="text" 
          name="search" 
          onChange={(e)=> setSearch(e.target.value)}
          value={search} />
          <button 
          className="p-2 rounded-md bg-blue-500 text-white" 
          onClick={()=>handleSearch()}>Search</button>
        </div>
        {
          videos.length > 0 && (
            <div className="grid grid-cols-4 gap-3">
{
            videos.map((video:any, index:number) => (
            <div className="flex flex-col" key={video.snippet.thumbnails.high.url}>
              <Image src={video.snippet.thumbnails.high.url} alt="thumbnail" width={220} height={80}/>
              <p className="text-base">{video.snippet.title}</p>
              <p className="text-sm">{video.snippet.channelTitle}</p>
            </div>
          ))}
            </div>)
        }
    </main>
  );
}
