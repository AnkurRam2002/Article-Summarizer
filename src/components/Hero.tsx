const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-begin items-center w-full mb-10 pt-3'>
        <div className='text-3xl mt-2'><span className='blue_gradient'>aBridge</span></div>

        <div className='desc pb-2 pl-3'> 
          Powered by OpenAI
        </div>
      </nav>

      <h1 className='head_text'>
        <span className='orange_gradient'> Summarize Articles with One Click</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with aBridge, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;