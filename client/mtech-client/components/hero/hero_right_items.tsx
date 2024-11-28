import Image from "next/image"
import { useAppContext } from '@/contexts/ContextProvider'

const HeroRightSectionItems = () => {
    const { posts } = useAppContext()

    const trendings = posts?.filter((post:any) => post.flag === 'trending')

  return (
    <>
        {trendings?.map((post:any) => (
            <div className='md:flex  gap-4 mt-4' key={post?.title}>
                <Image
                    src="/images/post2.jpg"
                    alt="Post Image"
                    className="w-full md:w-[100px] h-200 md:h-[100px] rounded-2xl mb-3 md:mb-0"
                    width={50}
                    height={50}
                    priority
                />
                <div className="border-b-2 border-gray-200">
                    <p className="flex text-xl font-medium text-left mb-4 text-wrap">{post?.title}</p>
                    <p className="text-lg font-normal text-left text-gray-400 mb-4">
                        by {post?.author}
                    </p>
                </div>
            </div>
        ))}
        {/* <div className='flex  gap-4 mt-6'>
            <Image
                src="/images/post3.jpg"
                alt="Post Image"
                className="md:w-auto rounded-2xl"
                width={60}
                height={60}
                priority
            />
            <div>
                <p className="text-xl font-semibold text-left mb-4"></p>
                <p className="text-sm font-normal text-left text-gray-400 mb-4">by </p>
            </div>
        </div> */}
    </>
  )
}

export default HeroRightSectionItems