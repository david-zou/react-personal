import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import ContainerBlock from '../components/ContainerBlock'

import { ThemeProvider } from "next-themes"; // enable light/dark mode

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <ContainerBlock
        title="Welcome to David Zou's Portfolio Website"
        description="David Zou's Portfolio Website"
        >
      </ContainerBlock>
    </ThemeProvider>
  )
}
