import {
  ChevronLeft,
  ChevronRight,
  HomeIcon,
  Laptop2Icon,
  LayoutListIcon,
  LibraryIcon,
  Maximize2Icon,
  Mic2Icon,
  PlayIcon,
  RepeatIcon,
  SearchIcon,
  ShuffleIcon,
  SkipBackIcon,
  SkipForwardIcon,
  Volume1Icon,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="space-y-5 mt-10">
            <a
              href="#"
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon className="inline-block mr-2" />
              Home
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <SearchIcon className="inline-block mr-2" />
              Search
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <LibraryIcon className="inline-block mr-2" />
              Library
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a
              href="#"
              className="gap-3 text-sm text-zinc-300 hover:text-zinc-100"
            >
              Shu Ding
            </a>
            <a
              href="#"
              className="gap-3 text-sm text-zinc-300 hover:text-zinc-100"
            >
              Hot Tracks Brazil
            </a>
            <a
              href="#"
              className="gap-3 text-sm text-zinc-300 hover:text-zinc-100"
            >
              Top Musics of 2020
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p=1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p=1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/10 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                alt="Capa do album"
                width={104}
                height={104}
              />
              <strong>The Weeknd</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                alt="Capa do album"
                width={104}
                height={104}
              />
              <strong>The Weeknd</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                alt="Capa do album"
                width={104}
                height={104}
              />
              <strong>The Weeknd</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                alt="Capa do album"
                width={104}
                height={104}
              />
              <strong>The Weeknd</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                alt="Capa do album"
                width={104}
                height={104}
              />
              <strong>The Weeknd</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                alt="Capa do album"
                width={104}
                height={104}
              />
              <strong>The Weeknd</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Willian Rodrigues
          </h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded hover:bg-white/10 group flex flex-col gap-2"
            >
              <Image
                className="w-full"
                src="/album.jpg"
                alt="Capa do album"
                width={120}
                height={120}
              />
              <strong className="font-semibold text-sm">After Hours</strong>
              <span className="block text-sm text-zinc-500">
                The Weeknd, Max Martin, Oscar Holter
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/album.jpg" alt="Capa do album" width={56} height={56} />
          <div className="flex flex-col">
            <p className="font-semibold text-sm">After Hours</p>
            <span className="block text-xs text-zinc-400">
              The Weeknd, Max Martin, Oscar Holter
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <ShuffleIcon className="text-zinc-200" size={20} />
            <SkipBackIcon className="text-zinc-200" size={20} />

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <PlayIcon />
            </button>
            <SkipForwardIcon className="text-zinc-200" size={20} />
            <RepeatIcon className="text-zinc-200" size={20} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">01:32</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="h-1 rounded-full bg-white w-1/3"></div>
            </div>
            <span className="text-xs text-zinc-400">03:32</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mic2Icon className="text-zinc-200" size={20} />
          <LayoutListIcon className="text-zinc-200" size={20} />
          <Laptop2Icon className="text-zinc-200" size={20} />
          <div className="flex items-center gap-2">
            <Volume1Icon className="text-zinc-200" size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="h-1 rounded-full bg-white w-1/3"></div>
            </div>
          </div>
          <Maximize2Icon className="text-zinc-200" size={20} />
        </div>
      </footer>
    </div>
  );
}
