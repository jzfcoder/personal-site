import AsciiBackground from "./AsciiBackground";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='flex flex-col h-screen text-center items-center justify-center min-h-screen py-2 text-white relative'>
      <AsciiBackground />
      <h1 className='text-6xl font-[family-name:var(--fira-header)]'>Jeremy Flint</h1>
      <br />
      <p className='flex flex-row space-x-4 font-[family-name:var(--fira-body)]'>
        <span className='underline-animation delay-1'><a href='portfolio'>Engineer.</a></span>
        <span className='underline-animation delay-2'><a href='building'>Entrepreneur.</a></span>
        <span className='underline-animation delay-3'><a target="_blank" href="https://zflint.com">Explorer.</a></span>
      </p>
      <div className='fixed bottom-4 w-full flex justify-center space-x-4'>
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
  );
}