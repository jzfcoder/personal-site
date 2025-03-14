import AsciiBackground from "../AsciiBackground";

export default function Engineer() {
  return (
    <div className='flex flex-col h-screen text-center items-center justify-center min-h-screen py-2 text-white'>
      <AsciiBackground 
        cX={2}
        cY={2}
        rW={2}
        rH={1}
        fR={1}
        inverse
      />
      <div className='flex-1 flex-col w-3/4 p-5 md:p-20 min-w-100'>
        <h1 className='text-5xl md:text-6xl font-[family-name:var(--fira-header)]'>Engineering Portfolio</h1>
        <br />
        <p className='font-[family-name:var(--fira-body)]'>
            [coming soon]
            <br />
            <span className='underline-animation'><a href='/'>Return to Home</a></span>
        </p>
      </div>
    </div>
  );
}