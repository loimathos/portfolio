"use client";
import Image from "next/image";
import Windows from "@/components/windows";
import {ReactNode, useState} from "react";

export default function Home() {
  return (
    <div className="font-sans p-10 ">
      <main className="">
              <Windows title="Présentation">
                  <p>
                      Salutation, Je suis KIENE mathis, nouvellement arrivé dans le monde de la tech, Je passe ton temps à
                      observer et à tenter d'écrire des programmes.
                  </p>
              </Windows>
              <Windows title="Compétences technique">
                  iofb
                  fezo<br/>
                  efnoufn
              </Windows>
      </main>
    </div>
  );
}