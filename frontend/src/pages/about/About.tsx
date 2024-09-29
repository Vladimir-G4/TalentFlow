import Brian from '!/assets/brianzou.png'
import Dylan from '!/assets/dylantonthat.png'
import Julia from '!/assets/julialam.png'
import Vladimir from '!/assets/vladimirgutierrez.png'
import BlurIn from '@/components/magicui/blur-in'
import { BorderBeam } from '@/components/magicui/border-beam'
import './About.css'

function About() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-3 mx-auto min-h-screen flex flex-col justify-center">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            <BlurIn
              word="About Us"
              className="text-4xl font-bold bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl"
            />
          </span>
          <div className="flex flex-col text-center w-full mb-20 pt-4">
            <section className="text-gray-600 body-font">
              <div className="container px-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    TalentFlow is a college-specific platform designed to help students and alumni gain deeper insights into where their peers have interned or worked. 
                    Our platform provides a transparent view of companies, complete with ratings for interview processes and work experiences.
                    Users can see the number of active and alumni students currently employed at each company, explore detailed profiles of peers who have navigated similar career paths, 
                    and leverage AI-powered resume analysis to identify key skills that correlate with successful hires.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-10 mt-10">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>

          <div className="relative flex h-25 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
            <div className="flex flex-wrap -m-4">

              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img alt="team" className="object-scale-down h-40 drop-shadow-md rounded-md m-auto" src={Brian} />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">Brian Zou</h2>
                    <h5 className="mb-1">CS @ NJIT</h5>
                  </div>
                </div>
              </div>

              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img alt="team" className="object-scale-down h-40 drop-shadow-md rounded-md m-auto" src={Vladimir} />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">Vladimir Gutierrez</h2>
                    <h5 className="mb-1">CS @ NJIT</h5>
                  </div>
                </div>
              </div>

              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img alt="team" className="object-scale-down h-40 drop-shadow-md rounded-md m-auto mb-4" src={Dylan} />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">Dylan Ton-That</h2>
                    <h5 className="mb-1">CS @ NJIT</h5>
                  </div>
                </div>
              </div>

              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img alt="team" className="object-scale-down h-40 drop-shadow-md rounded-md m-auto mb-4" src={Julia} />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">Julia Lam</h2>
                    <h5 className="mb-1">CS @ NJIT</h5>
                  </div>
                </div>
              </div>

            </div>
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
      </section>
      
    </>
  );
}

export default About;