
import { useAppContext } from '@/contexts/ContextProvider'
import Image from "next/image"
import Link from 'next/link'
import HeroRightSection from './hero_right'

const HeroSection = () => {
  const { posts } = useAppContext()

  const post = posts?.find((post:any) => post.flag === 'hero')

  console.table(post)

  return (
    <div className="container md:flex md:justify-between mt-16 md:mx-auto w-full md:h-[680px] md:gap-10">
      <div className="flex-col w-full md:w-[980px] px-4 md:px-0 md:pl-6">
        <Link href="/post" className='flex flex-col w-full md:w-[950px]'>
          <Image
              src="/images/post9.jpg"
              alt="Post Image"
              className="w-full md:w-auto h-[200px] md:h-[520px]"
              width={950}
              height={250}
              priority
          />
          <p className="text-2xl md:text-3xl font-medium text-left mt-4 mb-4">{post?.title}</p>
        </Link>
        <Link href="/post">
          <div className='flex gap-4 mb-8'>
            <Image
                src="/images/avatar.jpg"
                alt="User Image"
                className="md:w-auto rounded-full"
                width={50}
                height={50}
                priority
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-medium text-left">{post?.author}</p>
              <p className="text-sm text-left text-gray-400">{post?.created_at}</p>
            </div>
          </div>
        </Link>
      </div>
      <HeroRightSection />
    </div>
  )
}

export default HeroSection