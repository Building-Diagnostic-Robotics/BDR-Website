'use client'

import { Calendar, Clock, Share } from 'lucide-react'
import toast from 'react-hot-toast'

export default function BlogPostToolbar({
  date,
  readTime,
  spotifyUrl,
}: {
  date: string
  readTime: string
  spotifyUrl?: string
}) {
  return (
    <div className="flex justify-center items-center flex-wrap gap-2 text-sm text-white/60 mb-6">
      {/* Date */}
      <div className="flex items-center gap-1">
        <Calendar className="h-4 w-4" />
        <span>{date}</span>
      </div>

      {/* Dot */}
      <span className="mx-2">•</span>

      {/* Read time */}
      <div className="flex items-center gap-1">
        <Clock className="h-4 w-4" />
        <span>{readTime}</span>
      </div>

      {/* Dot */}
      {spotifyUrl && <span className="mx-2">•</span>}

      {/* Spotify */}
      {spotifyUrl && (
        <a
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-green-400 transition-colors"
        >
          <span>Listen on Spotify</span>
          <svg className="w-4 h-4 fill-current text-white-400" viewBox="0 0 168 168">
            <path d="M84,0C37.7,0,0,37.7,0,84s37.7,84,84,84s84-37.7,84-84S130.3,0,84,0z M121.6,121.5c-1.5,2.5-4.8,3.3-7.3,1.9 c-20-12.2-45.2-14.9-75.2-8c-2.9,0.7-5.8-1.1-6.5-4c-0.7-2.9,1.1-5.8,4-6.5c33.6-7.5,62.2-4.3,85.4,9.6 C122.2,116.1,123.1,119,121.6,121.5z M132.4,102.2c-1.8,2.9-5.6,3.9-8.5,2.1c-22.9-14.1-57.9-18.2-84.9-9.9 c-3.2,1-6.6-0.8-7.6-4.1c-1-3.2,0.8-6.6,4.1-7.6c31.8-9.8,70.4-5.3,97.8,11.2C133.3,94.9,134.2,99.3,132.4,102.2z M134.6,82.2 c-27.2-16.2-72.3-17.6-98.2-9.6c-3.7,1.2-7.7-0.9-8.9-4.6c-1.2-3.7,0.9-7.7,4.6-8.9c30.6-9.8,80.5-8.2,112.3,11.3 c3.2,1.9,4.3,6.1,2.3,9.3C144.7,83.5,138.5,84.6,134.6,82.2z"/>
          </svg>
        </a>
      )}

      {/* Dot */}
      <span className="mx-2">•</span>

      {/* Share */}
      <button
        onClick={() => {
          navigator.clipboard.writeText(window.location.href)
          toast.success('Link copied to clipboard')
        }}
        className="flex items-center gap-1 hover:text-white transition-colors"
        aria-label="Copy link"
      >
        <span>Share</span>
        <Share className="h-4 w-4" />
      </button>
    </div>
  )
}