'use client'
import { useAppContext } from '@/contexts/ContextProvider';
import { useEffect } from 'react';
import HeroSection from "../components/hero/hero";
import NavBar from "../components/navbar";

export default function Home() {
  const { fetch_posts } = useAppContext()

  useEffect(()=>{
    fetch_posts()
  }, [])

  return (
    <>
      <NavBar />
      <HeroSection />
    </>
  );
}
