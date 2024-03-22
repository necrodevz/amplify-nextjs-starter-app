"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { generateClient } from "aws-amplify/data";
import { type Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests


export default function Home() {
  return (
      <div className="container mx-auto p-4">
        <button className="font-sans text-lg text-balance rounded border-2 border-cyan-600">Register Using Telegram</button>
      </div>
  )
}
