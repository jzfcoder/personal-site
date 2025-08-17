import AsciiBackground from "../AsciiBackground";

export default function Engineer() {
  return (
    <div className='flex flex-col h-screen text-center items-center justify-center min-h-screen py-2 text-white'>
      <AsciiBackground 
        cX={2}
        cY={2}
        rW={2}
        rH={1}
        fR={2}
        inverse
      />
      <div className='flex-1 flex-col w-3/4 p-5 md:p-20 min-w-100'>
        <h1 className='text-3xl font-[family-name:var(--fira-header)]'>Currently Building...</h1>
        <br />
        <div className='font-[family-name:var(--fira-body)]'>
            <span className='underline'><a target="_blank" href='https://tryshortcut.ai'>Shortcut</a></span>
            <br />
            An AI agent for excel, at <a target="_blank" href='https://fundamentalresearchlabs.ai'>Fundamental Research Labs</a>
        </div>
        <br />
        <br />
        <br />
        <h2 className='text-3xl font-[family-name:var(--fira-header)]'>=== Prev Built ===</h2>
        <br />
        <div className='font-[family-name:var(--fira-body)]'>
            <span className='underline'><a target="_blank" href='http://getclearify.com'>Clearify</a></span>
            <br />
            An AI-powered eczema tracking app
            <br />
            <br />
            <span className='underline'><a href='/'>Return to Home</a></span>
        </div>
      </div>
    </div>
  );
}