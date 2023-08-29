import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi I'm Rohit, nice to meet you. Please take a look around my project.</p>
            </div>
            <div>
            <div>
  
  <p>With a keen eye for design aesthetics and a deep understanding of HTML, CSS, and JavaScript, I specialize in turning concepts into visually appealing and functional websites. I'm committed to staying up-to-date with the ever-evolving web landscape, ensuring that the websites I build are not only visually stunning but also performant and accessible.</p>
  

</div>

            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
