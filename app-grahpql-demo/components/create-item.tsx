"use client";

import { use, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { CREATE_USUARIO_MUTATION, CREATE_VIDEO, create_hard } from "@/graphql/queries";
import { Amplify } from "aws-amplify";
import config from "@/src/amplifyconfiguration.json"
import { create } from "domain";

const client = generateClient();
Amplify.configure(config, { ssr: true });

export default function CreateItem() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  
  const variables = {
      idProject: Date.now().toString(),
      idActivity:  Date.now().toString(),
      idCreator:  Date.now().toString(),
      startTime: 0.0,  
      endTime: 10.0,  
      activityType: "Tipo de Actividad",
      urlVideo: "https://www.ejemplo.com/video",
      timestamps: [
        {}
      ]
    
  };
  const [data,setData] = useState(variables)

  const handleAdd = async (e: any) => {
    const aux = data;
    data.timestamps.push(
      {
        time: 2.0,
        type: lastName,
        activities: {
          question: name,
          correctAnswer: "",
          justification: "Justificación de la respuesta correcta",
          incorrectAnswer1: "Respuesta Incorrecta 1",
          incorrectAnswer2: "Respuesta Incorrecta 2",
          incorrectAnswer3: "Respuesta Incorrecta 3"
        }
      }
    )
    setData(aux);
    e.preventDefault();
    const result =  `mutation MyMutation{
        createInteractiveVideo(input:${JSON.stringify(data)})
        {
          activityType
          createdAt
          endTime
          idActivity
          idCreator
          idProject
          startTime
          updatedAt
          urlVideo
          timestamps {
            time
            type
            activities {
              correctAnswer
              incorrectAnswer1
              incorrectAnswer2
              incorrectAnswer3
              question
              justification
            }
          }
        }
      }`
    
      // const mutation = await client.graphql({
      //   query: result,
      // })

    console.log(result);
    
  }

  return (
    <div>
      {JSON.stringify(data)}
      <form action="" onSubmit={handleAdd} className="flex flex-col gap-2">
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="border p-1 rounded-lg shadow-lg bg-slate-950 text-white mt-2"
          type="submit"
        >
          Add
        </button>
      </form>
      <button onClick={()=>console.log(data)}>show</button>
    </div>
  );
}
