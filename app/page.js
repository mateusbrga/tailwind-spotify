import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>

          <nav className='space-y-5 mt-10 '>
            <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-200' >
              <HomeIcon />
              Home
            </a>
            <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-200' >
              <Search />
              Search
            </a>
            <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-200' >
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2'>
            <a className='text-sm text-zinc-500' href="#">Playlist 1</a>
            <a className='text-sm text-zinc-500' href="#">Playlist 1</a>
            <a className='text-sm text-zinc-500' href="#">Playlist 1</a>
            <a className='text-sm text-zinc-500' href="#">Playlist 1</a>
            <a className='text-sm text-zinc-500' href="#">Playlist 1</a>
            <a className='text-sm text-zinc-500' href="#">Playlist 1</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-2'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-2'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl'> Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>

            <div className='bg-white/10 rounded'>
              <a href="#" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                <Image src="/album.jpg" width={104} height={104} alt="Capa do album" />
                <strong>Wasting Light</strong>
              </a>
            </div>

            <div className='bg-white/10 rounded'>
              <a href="#" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                <Image src="/album.jpg" width={104} height={104} alt="Capa do album" />
                <strong>Wasting Light</strong>
              </a>
            </div>

            <div className='bg-white/10 rounded'>
              <a href="#" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                <Image src="/album.jpg" width={104} height={104} alt="Capa do album" />
                <strong>Wasting Light</strong>
              </a>
            </div>

            <div className='bg-white/10 rounded'>
              <a href="#" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                <Image src="/album.jpg" width={104} height={104} alt="Capa do album" />
                <strong>Wasting Light</strong>
              </a>
            </div>

            <div className='bg-white/10 rounded'>
              <a href="#" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                <Image src="/album.jpg" width={104} height={104} alt="Capa do album" />
                <strong>Wasting Light</strong>
              </a>
            </div>

            <div className='bg-white/10 rounded'>
              <a href="#" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                <Image src="/album.jpg" width={104} height={104} alt="Capa do album" />
                <strong>Wasting Light</strong>
              </a>
            </div>
      </div>
    </main>
      </div >
    <footer className="bg-zinc-800 border-t border-zinc-700 p-6 ">
      Footer
    </footer>
    </div >
  )
}
