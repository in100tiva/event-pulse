import React from 'react';

const PublicEvent: React.FC = () => {
  return (
    <div className="bg-background-dark font-display text-text-primary-dark">
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <main className="flex-grow">
          <div className="px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex flex-col items-center">
            <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
              
              {/* Hero Section */}
              <section className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-4 p-4">
                  <div className="flex flex-col gap-3 max-w-2xl">
                    <p className="text-4xl md:text-5xl font-black leading-tight tracking-tighter text-white">Community Meetup: The Future of Tech</p>
                    <p className="text-text-secondary-dark text-lg font-normal leading-normal">
                      Join us for an evening of networking, learning, and discussion about the latest trends shaping our industry. We'll have guest speakers, Q&A sessions, and opportunities to connect with peers.
                    </p>
                  </div>
                  <div className="flex flex-row md:flex-col gap-4 items-start">
                    <span className="flex items-center gap-2 min-w-[84px] cursor-pointer justify-center overflow-hidden rounded-lg h-10 px-4 bg-surface-dark text-sm font-bold leading-normal tracking-[0.015em] border border-border-dark text-white">
                      <span className="material-symbols-outlined text-base">videocam</span>
                      <span className="truncate">Online Event</span>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                  <div className="flex items-center gap-4 rounded-lg p-4 border border-border-dark bg-surface-dark">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-500/20 text-green-500">
                      <span className="material-symbols-outlined">calendar_month</span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base font-medium leading-normal text-white">Date & Time</p>
                      <p className="text-text-secondary-dark text-sm font-normal">October 26, 2024 at 7:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg p-4 border border-border-dark bg-surface-dark">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-500/20 text-green-500">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base font-medium leading-normal text-white">Location</p>
                      <p className="text-text-secondary-dark text-sm font-normal">Online via EventPulse Live</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-2 rounded-lg p-4 border border-border-dark bg-surface-dark">
                    <p className="text-base font-medium leading-normal text-white">Confirmed Attendees</p>
                    <div className="flex items-baseline gap-2">
                      <p className="tracking-light text-2xl font-bold leading-tight text-white">128</p>
                      <p className="text-green-500 text-sm font-medium leading-normal">+15%</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* RSVP Form */}
              <section className="bg-surface-dark border border-border-dark rounded-lg p-6">
                <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-4 pt-2 text-white">Will you be there?</h2>
                <div className="flex flex-col md:flex-row md:items-end gap-4 px-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-base font-medium leading-normal pb-2 text-gray-300">Full name</p>
                    <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-dark bg-background-dark focus:border-primary h-12 placeholder:text-gray-500 p-3 text-base font-normal leading-normal" placeholder="Enter your full name" />
                  </label>
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-base font-medium leading-normal pb-2 text-gray-300">Email address</p>
                    <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-dark bg-background-dark focus:border-primary h-12 placeholder:text-gray-500 p-3 text-base font-normal leading-normal" placeholder="Enter your email address" />
                  </label>
                </div>
                <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-success text-white text-sm font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105">
                    <span className="truncate">Going</span>
                  </button>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-gray-700 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 hover:bg-gray-600">
                    <span className="truncate">Maybe</span>
                  </button>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-transparent text-gray-400 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-800 border border-gray-700">
                    <span className="truncate">Not Going</span>
                  </button>
                </div>
              </section>

              {/* Suggestions Wall */}
              <section className="bg-surface-dark border border-border-dark rounded-lg p-6">
                <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-4 pt-2 text-white">Suggestions Wall</h2>
                <div className="flex flex-col gap-4 px-4 py-3">
                  <div className="flex flex-col gap-2">
                    <textarea 
                      className="flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-dark bg-background-dark focus:border-primary p-3 text-base font-normal leading-normal" 
                      placeholder="Have a question or suggestion?" 
                      rows={3}
                    ></textarea>
                    <div className="flex justify-between items-center mt-2">
                      <label className="flex items-center gap-2 text-sm text-gray-400">
                        <input className="rounded text-success focus:ring-success/50 bg-gray-700 border-border-dark h-4 w-4" type="checkbox" />
                        Submit anonymously
                      </label>
                      <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-success text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-success/90">
                        <span className="truncate">Submit</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 pt-6">
                    {/* Suggestion Item 1 */}
                    <div className="relative flex flex-col md:flex-row items-start gap-4 p-4 border border-border-dark rounded-lg bg-background-dark/50">
                      <div className="flex-grow">
                        <p className="text-base leading-relaxed text-white">What are the key skills developers should focus on for the next 5 years?</p>
                        <p className="text-sm text-gray-500 mt-2">by Jane Doe</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-base font-bold text-success">
                          <span className="material-symbols-outlined text-xl">thumb_up</span>
                          <span>42</span>
                        </div>
                        <button className="flex items-center justify-center h-10 w-10 cursor-pointer rounded-full bg-success/10 text-success hover:bg-success/20 transition-colors">
                          <span className="material-symbols-outlined text-xl">thumb_up</span>
                        </button>
                      </div>
                      <div className="absolute top-0 right-0 -mt-3 -mr-3 flex items-center gap-1 bg-success text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        <span>Answered</span>
                      </div>
                    </div>

                    {/* Suggestion Item 2 */}
                    <div className="flex flex-col md:flex-row items-start gap-4 p-4 border border-border-dark rounded-lg bg-background-dark/50">
                      <div className="flex-grow">
                        <p className="text-base leading-relaxed text-white">Will there be a recording of the event available afterwards?</p>
                        <p className="text-sm text-gray-500 mt-2">by Anonymous</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-base font-bold text-gray-400">
                          <span className="material-symbols-outlined text-xl">thumb_up</span>
                          <span>27</span>
                        </div>
                        <button className="flex items-center justify-center h-10 w-10 cursor-pointer rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 transition-colors">
                          <span className="material-symbols-outlined text-xl">thumb_up</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Live Poll Section */}
              <section className="bg-surface-dark border-2 border-success rounded-lg p-6 shadow-lg shadow-green-900/10">
                <div className="flex items-center gap-3 px-4 pt-2">
                  <div className="relative flex items-center">
                    <div className="absolute h-2 w-2 rounded-full bg-success"></div>
                    <div className="h-2 w-2 rounded-full bg-success animate-ping"></div>
                  </div>
                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-success">Live Poll Active</h2>
                </div>
                <p className="px-4 text-lg font-medium mt-4 text-white">Which emerging technology are you most excited about?</p>
                <div className="flex flex-col gap-3 p-4">
                  {[
                    { label: "Quantum Computing", percent: 65 },
                    { label: "Edge AI", percent: 25 },
                    { label: "Web3 & Blockchain", percent: 10 },
                  ].map((option, idx) => (
                    <div key={idx} className="relative w-full rounded-full bg-gray-800 p-1 flex items-center text-sm font-medium h-12 overflow-hidden border border-gray-700">
                      <div className="absolute left-0 top-0 h-full rounded-full bg-success/20 transition-all duration-1000" style={{ width: `${option.percent}%` }}></div>
                      <div className="relative z-10 flex justify-between w-full px-4 items-center text-white">
                        <span>{option.label}</span>
                        <span>{option.percent}%</span>
                      </div>
                    </div>
                  ))}
                  <p className="text-right text-sm text-gray-400 mt-2">248 votes</p>
                </div>
              </section>

            </div>
          </div>
        </main>
        
        <footer className="w-full py-6 flex justify-center items-center text-center border-t border-border-dark mt-8">
          <p className="text-sm text-gray-500">Created with <a className="font-bold text-success hover:underline" href="#">EventPulse</a></p>
        </footer>
      </div>
    </div>
  );
};

export default PublicEvent;