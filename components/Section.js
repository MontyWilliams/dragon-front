import React from 'react'
import Card from './Card'

function Section({genre, videos}) {
  console.log(videos)
  return (
    <div className="flex flex-col w-[100vw]">
      <div className="">
        <h1 className="text-lg ">{genre}</h1>
          <div className="flex flex-row space-x-12 ">
            {videos.map(video =>  (
              <a key={video.id} href={`/video/${video.slug}`}>
                <Card thumbnail={video.thumbnail} />
              </a>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Section
