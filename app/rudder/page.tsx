import AsciiBackground from "../AsciiBackground";

export default function Rudder() {
  return (
    <div className='flex flex-col h-screen items-center min-h-screen pt-24 px-8 text-black relative'>
      <AsciiBackground />
      <div className='flex flex-col items-start gap-4 bg-white p-6 max-w-md'>
        <h1 className='text-5xl'>rudder</h1>
        <p className='text-sm text-gray-600'>coming soon</p>
        <p className='max-w-md'>
          When an LLM agent hallucinates at step <i>k</i>, every step after it inherits the lie. We're working on catching the moment of confabulation from inside the model — and steering around it.
        </p>
        <p className='max-w-md'>
          More soon.
        </p>
        <p className='mt-2'>
          <span className='underline'><a href='/'>Return to Home</a></span>
        </p>
      </div>
    </div>
  );
}
