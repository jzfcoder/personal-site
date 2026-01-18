import AsciiBackground from "./AsciiBackground";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, FaXTwitter } from 'react-icons/fa6';

export default function Home() {
  return (
    <div className='flex flex-col h-screen items-center min-h-screen pt-24 px-8 text-black relative'>
      <AsciiBackground />
      <div className='flex flex-row items-start gap-8 bg-white p-4'>
        <div className='flex flex-col items-center'>
          <Image src="/pfp2.JPEG" alt="Jeremy Flint" width={180} height={180} className='object-cover' />
          <div className='flex justify-center space-x-4 mt-4'>
            <a href='https://x.com/zflintj' target='_blank' rel='noopener noreferrer'>
              <FaXTwitter className='text-2xl' />
            </a>
            <a href='https://www.linkedin.com/in/jeremy-z-flint' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='text-2xl' />
            </a>
            <a href='https://github.com/jzfcoder' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='text-2xl' />
            </a>
            <a href='mailto:jzflint@mit.edu'>
              <FaEnvelope className='text-2xl' />
            </a>
          </div>
        </div>
        <div className='text-left'>
          <h1 className='text-5xl'>Jeremy Flint</h1>
          <p className='mt-4 max-w-md'>
            I'm on leave as a sophomore at MIT, currently building agents and benchmarking infrastructure
            at <span className='underline'><a href='https://tryshortcut.ai' target='_blank'>Shortcut</a></span> by <span className='underline'><a href='https://fundamentalresearchlabs.ai' target='_blank'>Fundamental Research.</a></span>
          </p>
          <p className='mt-4 max-w-md'>
            I plan on returning to MIT in Spring 2026 to continue studying AI & Decision Making. I'm interested in helping shape a future where humans and AI safely coexist.
          </p>
          <p className='mt-4 max-w-md'>
            You can find some of the things I've built <span className='underline'><a href='/portfolio' target='_blank'>here.</a></span>
          </p>
          <p className='mt-4 max-w-md'>
            Most recently, I started
            an <span className='underline'><a href='https://www.getclearify.com' target='_blank'>AI-powered skincare app</a></span> and
            joined <span className='underline'><a href='https://www.linkedin.com/company/stitch-ai/' target='_blank'>Stitch</a></span> to design a graph-based LLM interface.
          </p>
          <p className='mt-4 max-w-md'>
            I also enjoy <span className='underline'><a href='https://mitathletics.com/sports/mens-swimming-and-diving' target='_blank'>swimming</a></span> and
            skateboarding in my spare time.
          </p>
        </div>
      </div>
    </div>
  );
}