import {
    Briefcase,
    GraduationCap,
    Code,
    Server,
    CheckCircle,
    Database,
    Globe,
    BarChart
} from 'lucide-react';
const Resume = ({ className }: any) => {
    return (
        <div className={`flex-1 p-8 overflow-y-auto ${className}`} style={{ scrollbarWidth: 'thin' }}>
            {/* Experience Section */}
            <section className="p-2">
                <div className="flex items-center mb-8">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                        <Briefcase className="text-gray-900" size={16} />
                    </div>
                    <h2 className="text-xl font-bold uppercase">Experience</h2>
                </div>

                {/* Experience Item 1 */}
                <div className="mb-12 border-b border-gray-800 pb-8">
                    <div className="flex justify-between items-start mb-2">
                        <div className="bg-gray-700 text-xs px-2 py-1 rounded">09/2024 - Current</div>
                    </div>

                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-bold">Sr. Full Stack & Chart Engineer</h3>
                        <div className="flex items-center">
                            <img src="/api/placeholder/24/24" alt="ChainStats logo" className="h-6 w-6 mr-2" />
                            <span>ChainStats</span>
                        </div>
                    </div>

                    <p className="text-gray-400 mb-4">ChainStats</p>
                    <p className="text-gray-400">
                        ChainStats Is Transforming How On-Chain Data Is Aggregated And Analyzed
                        Through A Powerful Two-Part Ecosystem
                    </p>
                </div>

                {/* Experience Item 2 */}
                <div className="mb-12 border-b border-gray-800 pb-8">
                    <div className="flex justify-between items-start mb-2">
                        <div className="bg-gray-700 text-xs px-2 py-1 rounded">07/2023 - 09/2024</div>
                    </div>

                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-bold">Sr. Full Stack & Web3 Engineer</h3>
                        <div className="flex items-center">
                            <span className="text-green-500 font-bold">Upwork</span>
                        </div>
                    </div>

                    <p className="text-gray-400 mb-4">Self-Employed, Freelancer</p>
                    <p className="text-gray-400">
                        As A Freelance Sr. Full Stack & Web3 Engineer, I Built Innovative Decentralized
                        Applications While Managing My Own Business.
                    </p>
                </div>

                {/* Experience Item 3 */}
                <div className="mb-12 border-b border-gray-800 pb-8">
                    <div className="flex justify-between items-start mb-2">
                        <div className="bg-gray-700 text-xs px-2 py-1 rounded">06/2022 - 06/2023</div>
                    </div>

                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-bold">Sr. Full Stack & Web3 Engineer</h3>
                        <div className="flex items-center">
                            <span className="bg-red-500 text-white px-2 py-1 font-bold">ARSNL</span>
                        </div>
                    </div>

                    <p className="text-gray-400 mb-4">Arsin Art</p>
                    <p className="text-gray-400">
                        ARSNL Is An Integrated Performance Media And Marketing Agency, Born From
                        Digital. Retail-Speed Fast. We Connect Brands To Their Best Audiences And Drive
                        Action.
                    </p>
                </div>

                {/* Experience Item 4 */}
                <div className="mb-12 border-b border-gray-800 pb-8">
                    <div className="flex justify-between items-start mb-2">
                        <div className="bg-gray-700 text-xs px-2 py-1 rounded">01/2020 - 05/2022</div>
                    </div>

                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-bold">Lead Front-End Engineer</h3>
                        <div className="flex items-center">
                            <span className="text-gray-300 flex items-center">
                                <img src="/api/placeholder/24/24" alt="Cropper logo" className="h-6 w-6 mr-2" />
                                Cropper
                            </span>
                        </div>
                    </div>

                    <p className="text-gray-400 mb-4">Cropper</p>
                    <p className="text-gray-400">
                        Cropper Is An Automated Market Maker (AMM) Built On The Solana Blockchain
                        Which Leverages The Central Order Book Of The Serum Decentralized Exchange
                        (DEX) To Enable Lightning-Fast Trades, Shared Liquidity And New Features For
                        Earning Yield.
                    </p>
                </div>

                {/* Experience Item 5 */}
                <div className="mb-12 border-b border-gray-800 pb-8">
                    <div className="flex justify-between items-start mb-2">
                        <div className="bg-gray-700 text-xs px-2 py-1 rounded">11/2017 - 12/2019</div>
                    </div>

                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-bold">Sr. React Engineer</h3>
                        <div className="flex items-center">
                            <span className="text-red-500 font-bold">VINCIT</span>
                        </div>
                    </div>

                    <p className="text-gray-400 mb-4">Vincit</p>
                    <p className="text-gray-400">
                        A Group Of World-Class Talent With A Passion For The Power Of Digital
                        Technology
                    </p>
                </div>
            </section>

            {/* Education Section */}
            <section className="p-2">
                <div className="flex items-center mb-8">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                        <GraduationCap className="text-gray-900" size={16} />
                    </div>
                    <h2 className="text-xl font-bold uppercase">Education</h2>
                </div>

                <div className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                        <div className="bg-gray-700 text-xs px-2 py-1 rounded">2013 - 2017</div>
                    </div>

                    <h3 className="text-lg font-bold mb-2">University Of Helsinki</h3>
                    <p className="text-gray-400 mb-4">Finland</p>
                    <p className="text-gray-400">
                        University Of Helsinki Is One Of The Top Public Universities In Helsinki, FI.
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section className="p-2">
                <div className="flex items-center mb-8">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                        <Code className="text-gray-900" size={16} />
                    </div>
                    <h2 className="text-xl font-bold uppercase">Skills</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Front-End Skills */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-4 border border-amber-500">
                                <Code className="text-amber-500" size={16} />
                            </div>
                            <h3 className="font-bold uppercase">Front-End</h3>
                        </div>

                        <div className="mb-4">
                            <p className="text-sm mb-2">HTML5, CSS3, JS, TS</p>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-sm mb-2">React, Vue, Angular</p>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-sm mb-2">Web3, Dapp</p>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-sm mb-2">Responsive Design, RESTful API</p>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-sm mb-2">Figma, Adobe XD</p>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-sm mb-2">Tailwind CSS, Bootstrap</p>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* DevOps & Management */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-4 border border-amber-500">
                                <BarChart className="text-amber-500" size={16} />
                            </div>
                            <h3 className="font-bold uppercase">DevOps & Management</h3>
                        </div>

                        <div className="mb-3 flex items-center">
                            <CheckCircle className="text-amber-500 mr-2" size={16} />
                            <p>Amazon Web Services</p>
                        </div>

                        <div className="mb-3 flex items-center">
                            <CheckCircle className="text-amber-500 mr-2" size={16} />
                            <p>Google Cloud Platform</p>
                        </div>

                        <div className="mb-3 flex items-center">
                            <CheckCircle className="text-amber-500 mr-2" size={16} />
                            <p>CI / CD</p>
                        </div>

                        <div className="mb-3 flex items-center">
                            <CheckCircle className="text-amber-500 mr-2" size={16} />
                            <p>Docker, Kubernetes</p>
                        </div>

                        <div className="mb-3 flex items-center">
                            <CheckCircle className="text-amber-500 mr-2" size={16} />
                            <p>Git, GitHub, GitLab</p>
                        </div>

                        <div className="mb-3 flex items-center">
                            <CheckCircle className="text-amber-500 mr-2" size={16} />
                            <p>Jira, Trello, Linear</p>
                        </div>

                        <div className="mb-3 flex items-center">
                            <CheckCircle className="text-amber-500 mr-2" size={16} />
                            <p>Test Driven Development</p>
                        </div>
                    </div>
                </div>

                {/* Languages */}
                <div className="mt-12">
                    <div className="flex items-center mb-6">
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-4 border border-amber-500">
                            <Globe className="text-amber-500" size={16} />
                        </div>
                        <h3 className="font-bold uppercase">Languages</h3>
                    </div>

                    <div className="mb-6">
                        <p className="mb-2">Vietnamese</p>
                        <div className="flex space-x-1">
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className="w-4 h-4 rounded-full bg-amber-500"></div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="mb-2">English</p>
                        <div className="flex space-x-1">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-4 h-4 rounded-full bg-amber-500"></div>
                            ))}
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="w-4 h-4 rounded-full bg-gray-700"></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Backend Skills with Circular Progress */}
                <div className="mt-12">
                    <div className="flex items-center mb-6">
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-4 border border-amber-500">
                            <Server className="text-amber-500" size={16} />
                        </div>
                        <h3 className="font-bold uppercase">Back-End</h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {/* Node.js */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 relative">
                                <svg className="w-full h-full" viewBox="0 0 36 36">
                                    <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#444"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#F59E0B"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                        strokeDashoffset="10"
                                    />
                                    <text x="18" y="20" textAnchor="middle" fill="#F59E0B" fontSize="8">90%</text>
                                </svg>
                            </div>
                            <p className="text-center mt-2">Node.js, Express.JS</p>
                        </div>

                        {/* Python */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 relative">
                                <svg className="w-full h-full" viewBox="0 0 36 36">
                                    <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#444"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#F59E0B"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                        strokeDashoffset="13"
                                    />
                                    <text x="18" y="20" textAnchor="middle" fill="#F59E0B" fontSize="8">87%</text>
                                </svg>
                            </div>
                            <p className="text-center mt-2">Python, Django, Flask</p>
                        </div>

                        {/* SQL */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 relative">
                                <svg className="w-full h-full" viewBox="0 0 36 36">
                                    <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#444"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#F59E0B"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                        strokeDashoffset="15"
                                    />
                                    <text x="18" y="20" textAnchor="middle" fill="#F59E0B" fontSize="8">85%</text>
                                </svg>
                            </div>
                            <p className="text-center mt-2">SQL / NoSQL</p>
                        </div>

                        {/* Solidity */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 relative">
                                <svg className="w-full h-full" viewBox="0 0 36 36">
                                    <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#444"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#F59E0B"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                        strokeDashoffset="18"
                                    />
                                    <text x="18" y="20" textAnchor="middle" fill="#F59E0B" fontSize="8">82%</text>
                                </svg>
                            </div>
                            <p className="text-center mt-2">Solidity</p>
                        </div>

                        {/* Rust */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 relative">
                                <svg className="w-full h-full" viewBox="0 0 36 36">
                                    <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#444"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#F59E0B"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                        strokeDashoffset="29"
                                    />
                                    <text x="18" y="20" textAnchor="middle" fill="#F59E0B" fontSize="8">71%</text>
                                </svg>
                            </div>
                            <p className="text-center mt-2">Rust</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Resume;