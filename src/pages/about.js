import Link from 'next/link';

export default function About() {
    return (
      <>
        <section id="about-main" className="flex flex-col px-4 pt-20 pb-10 text-white gap-10 border-b border-neutral-800">
            <div className="flex flex-col text-left gap-2">
                <h1 className="text-5xl font-bold mb-4">About Me</h1>
                <p className="text-xl text-neutral-400">I am a data scientist and software developer from Italy.<br/>I like coding, producing music, reading and calisthenics.</p>
            </div>
            <div className="flex flex-col text-left">
                <h3 className="text-2xl font-medium mb-4">Contacts</h3>
                <ul className="list-disc list-inside text-neutral-400 text-lg font-light">
                    <li className="mb-1">Email: alessandro99[at]gmail.com</li>
                    <li className="mb-1"><Link href="https://www.linkedin.com/in/alessandro-ciffo-4b7710191/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline hover:text-indigo-200">LinkedIn &#8599;</Link></li>
                    <li className="mb-1"><Link href="https://github.com/alessandro-ciffo" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline hover:text-indigo-200">GitHub &#8599;</Link></li>
                </ul>
            </div>
        </section>
        <section id="about-experience" className="flex flex-col px-4 pt-10 pb-10 text-white gap-10 border-b border-neutral-800">
            <h2 className="text-4xl font-semibold">Experience</h2>
            <div className="max-w-[800px]">
                <h3 className="text-2xl font-medium mb-4">Co-Founder</h3>
                <span className="flex flex-row text-base mb-4">
                    <Link href="https://casify.it" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-200 hover:underline">Casify.it</Link>
                    <span className="italic font-light text-neutral-400">&nbsp;&mdash; Jan 2024 &ndash; Present</span>
                </span>
                <ul className="list-disc list-outside pl-6 text-neutral-400 text-base font-normal mb-4 text-pretty">
                    <li className="mb-2">Casify provides real estate investors the tools to find and evaluate investment opportunities at a fraction of the time.</li>
                    <li className="mb-2">Pretty much a bit of everything: software development, machine learning engineering, sales, marketing, fundraising, etc. Every day is different.</li>
                    <li className="mb-2">Developed and deployed machine learning models to predict property prices, rental income and yields.</li>
                </ul>
            </div>
            <div className="max-w-[960px]">
                <h3 className="text-2xl font-medium mb-4">Founder in Residence</h3>
                <span className="flex flex-row text-base mb-4">
                    <Link href="https://www.antler.co/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-200 hover:underline">Antler</Link>
                    <span className="italic font-light text-neutral-400">&nbsp;&mdash; Jul 2023 &ndash; Dec 2023</span>
                </span>
                <ul className="list-disc list-outside pl-6 text-neutral-400 text-base font-normal mb-4 text-pretty">
                    <li className="mb-2">Left my job as a data scientist to found my own startup.</li>
                    <li className="mb-2">Went through Antler&apos;s founder matchmaking and acceleration program.</li>
                    <li className="mb-2">Learned what it takes to start a company from zero: validation, development, iteration, fundraising, etc.</li>
                </ul>
            </div>
            <div className="max-w-[960px]">
                <h3 className="text-2xl font-medium mb-4">Data Scientist</h3>
                <span className="flex flex-row text-base mb-4">
                    <Link href="https://www.midpage.ai/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-200 hover:underline">Midpage.ai</Link>
                    <span className="italic font-light text-neutral-400">&nbsp;&mdash; Mar 2023 &ndash; May 2023</span>
                </span>
                <ul className="list-disc list-outside pl-6 text-neutral-400 text-base font-normal mb-4 text-pretty">
                    <li className="mb-2">Developed a tool that enabled lawyers to summarize and ask questions on legal documents using AI and information retrieval.</li>
                    <li className="mb-2">AI development, LLMs, information retrieval, prompt engineering.</li>
                    <li className="mb-2">Developed the backend of the application and deployed it in production.</li>
                </ul>
            </div>
            <div className="max-w-[960px]">
                <h3 className="text-2xl font-medium mb-4">Data Scientist Intern</h3>
                <span className="flex flex-row text-base mb-4">
                    <Link href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-200 hover:underline">Amazon</Link>
                    <span className="italic font-light text-neutral-400">&nbsp;&mdash; Jul 2022 &ndash; Jan 2023</span>
                </span>
                <ul className="list-disc list-outside pl-6 text-neutral-400 text-base font-normal mb-4 text-pretty">
                    <li className="mb-2">Developed unsupervised machine learning solutions to detect anomalies in fulfillment centers&apos; data.</li>
                    <li className="mb-2">Worked with AWS tools like Redshift, S3, SageMaker and more.</li>
                    <li className="mb-2">Worked with very large datasets under strict computational performance requirements.</li>
                </ul>
            </div>
            <div className="max-w-[960px]">
                <h3 className="text-2xl font-medium mb-4">Data Scientist Intern</h3>
                <span className="flex flex-row text-base mb-4">
                    <Link href="https://www.generalirealestate.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-200 hover:underline">Generali Real Estate</Link>
                    <span className="italic font-light text-neutral-400">&nbsp;&mdash; Nov 2021 &ndash; May 2022</span>
                </span>
                <ul className="list-disc list-outside pl-6 text-neutral-400 text-base font-normal mb-4 text-pretty">
                    <li className="mb-2">Built machine learning models to predict future real estate prices and identify investment opportunities.</li>
                    <li className="mb-2">Managed data ingestion pipelines to extract data from multiple sources and store them in a unique database available to all employees.</li>
                    <li className="mb-2">Presented modelling results in a clear manner to a non-technical audience on a regular basis.</li>
                </ul>
            </div>
            <div className="max-w-[960px]">
                <h3 className="text-2xl font-medium mb-4">Visiting Student - Research Intern</h3>
                <span className="flex flex-row text-base mb-4">
                    <Link href="https://bidsa.unibocconi.eu/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-200 hover:underline">Bocconi Institute for Data Science and Analytics</Link>
                    <span className="italic font-light text-neutral-400">&nbsp;&mdash; May 2021 &ndash; Jul 2022</span>
                </span>
                <ul className="list-disc list-outside pl-6 text-neutral-400 text-base font-normal mb-4 text-pretty">
                    <li className="mb-2">Research on applications of Natural Language Processing to corporate finance.</li>
                    <li className="mb-2">Helped investigating how activist shareholder letters influence share prices during M&A campaigns.</li>
                </ul>
            </div>
        </section>
        <section id="about-education" className="flex flex-col px-4 pt-10 pb-10 text-white gap-10 border-b border-neutral-800">
            <h2 className="text-4xl font-semibold">Education</h2>
            <div className="max-w-[960px]">
                <h3 className="text-2xl font-medium mb-4">MSc - Data Science</h3>
                <span className="flex flex-row text-base mb-4">
                    <Link href="https://www.unibocconi.it/en" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-200 hover:underline">Bocconi University</Link>
                    <span className="italic font-light text-neutral-400">&nbsp;&mdash; Sep 2020 &ndash; Mar 2023</span>
                </span>
                <ul className="list-disc list-outside pl-6 text-neutral-400 text-base font-normal mb-4 text-pretty">
                    <li className="mb-2">Coursework: Statistics & Probability, Machine Learning, Database Systems, Econometrics, Natural Language Processing, Simulation & Modelling, Time Series Analysis, Computer Vision, Marketing Analytics</li>
                    <li className="mb-2">Final Dissertation: "Predicting amino acid covariance in multiple sequence alignments using AlphaFold-generated structures"</li>
                    <li className="mb-2">Final Grade: 110/110 cum laude</li>
                </ul>
            </div>
            <div className="max-w-[960px]">
                <h3 className="text-2xl font-medium mb-4">BSc - Economics, Management and Computer Science</h3>
                <span className="flex flex-row text-base mb-4">
                    <Link href="https://www.unibocconi.it/en" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-200 hover:underline">Bocconi University</Link>
                    <span className="italic font-light text-neutral-400">&nbsp;&mdash; Sep 2017 &ndash; Jul 2020</span>
                </span>
            </div>
        </section>
        <section id="about-education" className="flex flex-col px-4 pt-20 pb-20 text-white gap-6 border-b border-neutral-800">
            <h2 className="text-4xl font-semibold">Skills</h2>
            <div className="max-w-[960px] mt-4">
                <h3 className="font-medium mb-2 text-xl">Software Development</h3>
                <span className="text-neutral-400 text-base">Python, SQL, Julia, React, Tailwind, Docker, Git, CI/CD, Linux, AWS</span>
            </div>
            <div className="max-w-[960px]">
                <h3 className="font-medium mb-2 text-xl">AI & Data Science</h3>
                <span className="text-neutral-400 text-base">Machine Learning, Deep Learning (Pytorch, Tensorflow), NLP, Computer Vision, LLMs, Information Retrieval, A/B Testing, Time Series Analysis, MLOps</span>
            </div>
            <div className="max-w-[960px]">
                <h3 className="font-medium mb-2 text-xl">Languages</h3>
                <span className="text-neutral-400 text-base">Italian (Native), English (Proficient), French (Intermediate), Portuguese (Intermediate)</span>
            </div>
        </section>
      </>
    );
  }