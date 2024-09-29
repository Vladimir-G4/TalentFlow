import logo from '!/assets/talentflow.png';
import IconCloud from '@/components/magicui/icon-cloud';
import './Home.css';

const slugs = [
    "amazon",
    "google",
    "netflix",
    "microsoft",
    "apple",
    "meta",
    "ibm",
    "spotify",
    "twitter",
    "tiktok",
    "tesla",
    "databricks",
    "stripe",
    "nvidia",
    "linkedin",
    "salesforce",
    "adobe",
    "oracle",
    "github",
    "ticketmaster",
    "snowflake",
    "datadog",
    "atlassian",
    "okta",
    "crowdstrike",
    "mongodb",
    "majorleaguehacking",


];


function Home() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <img className="w-60 h-60 pr-2 ml-neg1" src={logo} />
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Internships that Flow
                            <br className="hidden lg:inline-block" />Your Way
                        </h1>
                        <p className="mb-8 leading-relaxed">Dive into opportunities and guide your career journey.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background ">
                            <IconCloud iconSlugs={slugs} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-14 mx-auto">
                    <div className="flex flex-col text-center w-full">
                        <h2 className="sm:text-2xl text-1xl text-indigo-500 font-medium title-font mb-1">
                            Explore Opportunities that Match Your Flow
                        </h2>
                        <h3 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 m-5">
                            
                        </h3>
                    </div>
                    <div className="flex flex-wrap">
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <h2 className="text-gray-900 text-lg title-font font-medium">
                                Point #1
                            </h2>
                        </div>
                        <div className="flex-grow">
                            <p className="leading-relaxed text-base">
                                
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <h2 className="text-gray-900 text-lg title-font font-medium">
                                Point #2
                            </h2>
                        </div>
                        <div className="flex-grow">
                            <p className="leading-relaxed text-base">
                                
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <h2 className="text-gray-900 text-lg title-font font-medium">
                                Point #3
                            </h2>
                        </div>
                        <div className="flex-grow">
                            <p className="leading-relaxed text-base">
                                
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>


                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-20 mx-auto">
                        <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                            AI-Driven Resume Parsing
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                            Streamline your skills and let the best opportunities find you.
                        </p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                        </div>
                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                            <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Point #1</h2>
                            <p className="leading-relaxed text-base">
                                <br />
                            </p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                            <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Point #2</h2>
                            <p className="leading-relaxed text-base">
                                <br />
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="pt-5">
                        
                        </div>
                    </div>
                    </section>

        </>
    )
}

export default Home