"use client";

import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { CREATE_USUARIO_MUTATION } from "@/graphql/queries";
import { Amplify } from "aws-amplify";
import config from "@/src/amplifyconfiguration.json"

const client = generateClient();
Amplify.configure(config, { ssr: true });

export default function CreateItem() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = async (e: any) => {
    e.preventDefault();
    const result = await client.graphql({
      query: CREATE_USUARIO_MUTATION,
      variables: {
        name,
        lastname:lastName,
        email,
      },
    });

    console.log(result);
    
  };

  return (
    <div>
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
    </div>
  );
}
