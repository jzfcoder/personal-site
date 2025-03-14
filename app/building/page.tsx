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
        <h1 className='text-5xl md:text-6xl font-[family-name:var(--fira-header)]'>Currently Building...</h1>
        <br />
        <div className='font-[family-name:var(--fira-body)]'>
            <span className='underline'><a href='http://getclearify.com'>Clearify</a></span>
            <br />
            <br />
            Follow my progress:
            <div className='flex-row space-x-4'>
              <span>linkedin</span>
              <span>github</span>
              <span>email</span>
            </div>
            <br />
            <span className='underline'><a href='/'>Return to Home</a></span>
        </div>
      </div>
    </div>
  );
}