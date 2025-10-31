import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-green-50 via-green-200 to-green-400 text-gray-800 py-10">
      <div className="container relative px-4 md:px-6 text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Smarter <span className="text-gray">Buildings</span>. Safer <span className="text-gray">Futures</span>.
        </h2>
        <p className="text-gray text-lg"><span className="font-semibold">BDR</span> | Inspection-as-a-Service for the Built World</p>

        <div className="flex justify-center space-x-6 mt-4">
          {/* Linkedin */}
          <a href="https://www.linkedin.com/company/building-diagnostic-robotics/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/people/BDR/61575974576898/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/buildingdiagnosticrobotics?igsh=MTVkeDEyN3VtMXpqbQ==" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          {/* Spotify */}
          <a href="https://open.spotify.com/show/64ZFIlUZt4SrvRPkeX36wX?si=94f081623ab74bba" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 168 168" fill="currentColor">
              <path d="M84,0C37.7,0,0,37.7,0,84s37.7,84,84,84s84-37.7,84-84S130.3,0,84,0z M121.6,121.5c-1.5,2.5-4.8,3.3-7.3,1.9 
              c-20-12.2-45.2-14.9-75.2-8c-2.9,0.7-5.8-1.1-6.5-4c-0.7-2.9,1.1-5.8,4-6.5c33.6-7.5,62.2-4.3,85.4,9.6 
              C122.2,116.1,123.1,119,121.6,121.5z M132.4,102.2c-1.8,2.9-5.6,3.9-8.5,2.1c-22.9-14.1-57.9-18.2-84.9-9.9 
              c-3.2,1-6.6-0.8-7.6-4.1c-1-3.2,0.8-6.6,4.1-7.6c31.8-9.8,70.4-5.3,97.8,11.2C133.3,94.9,134.2,99.3,132.4,102.2z M134.6,82.2 
              c-27.2-16.2-72.3-17.6-98.2-9.6c-3.7,1.2-7.7-0.9-8.9-4.6c-1.2-3.7,0.9-7.7,4.6-8.9c30.6-9.8,80.5-8.2,112.3,11.3 
              c3.2,1.9,4.3,6.1,2.3,9.3C144.7,83.5,138.5,84.6,134.6,82.2z" />
            </svg>
          </a>
        </div>

        <div className="flex justify-center items-center gap-8 mt-6 text-gray text-base">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-green-600" /> <span>(510) 514-9518</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-green-600" /> <span>info@bdx-robotics.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-green-600" /> <span>19 Morris Ave, Brooklyn, NY</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} Building Diagnostic Robotics. All rights reserved.
        </p>
      </div>
    </footer>
  )
}