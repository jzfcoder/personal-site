import AsciiBackground from "./AsciiBackground";

export default function Home() {
  return (
    <div className='flex flex-col h-screen text-center items-center justify-center min-h-screen py-2 text-white'>
      <AsciiBackground />
      <h1 className='text-3xl font-[family-name:var(--fira-header)]'>Jeremy Flint</h1>
      <p className='font-[family-name:var(--fira-body)]'>Engineer. Entrepreneur. Explorer.</p>
    </div>
  );
}