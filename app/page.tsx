import AsciiBackground from "./AsciiBackground";

export default function Home() {
  return (
    <div className='flex flex-col h-screen text-center items-center justify-center min-h-screen py-2 text-white'>
      <AsciiBackground />
      <h1 className='text-6xl font-[family-name:var(--fira-header)]'>Jeremy Flint</h1>
      <br />
      <p className='flex flex-row space-x-4 font-[family-name:var(--fira-body)]'>
        <span className='underline-animation delay-1'><a href='portfolio'>Engineer.</a></span>
        <span className='underline-animation delay-2'><a href='projects'>Entrepreneur.</a></span>
        <span className='underline-animation delay-3'><a href="https://zflint.com">Explorer.</a></span>
      </p>
    </div>
  );
}