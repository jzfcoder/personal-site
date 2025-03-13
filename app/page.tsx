import AsciiBackground from "./AsciiBackground";

export default function Home() {
  return (
    <div className='flex flex-col h-screen text-center items-center justify-center min-h-screen py-2 text-white'>
      <AsciiBackground />
      <h1 className='text-6xl font-[family-name:var(--fira-header)]'>Jeremy Flint</h1>
      <br />
      <p className='flex flex-row space-x-4 font-[family-name:var(--fira-body)]'>
        <span>Engineer.</span>
        <span>Entrepreneur.</span>
        <a href="zflint.com">Explorer.</a>
      </p>
    </div>
  );
}