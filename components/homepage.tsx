"use client"

import React from "react"

import { getEthersProvider } from "@/config/providerConfig"
import { getEthersSigner } from "@/config/signerConfig"
import { config } from "@/config/walletConfig"

import { Button } from "./ui/button"

const HomePage = () => {
  const handleGetProvider = () => {
    const provider = getEthersProvider(config)
    console.log("provider >>", provider)
  }

  const handleSigner = async () => {
    const signer = await getEthersSigner(config)
    console.log("Signer>>>", signer)
  }

  return (
    <div>
      <Button onClick={handleGetProvider}>Get Provider</Button>
      <Button onClick={handleSigner}>Get Singner</Button>
    </div>
  )
}

export default HomePage
