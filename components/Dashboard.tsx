import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Event } from '../types';

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Annual Tech Summit 2024',
    date: 'December 5, 2024',
    status: 'Live',
    rsvps: 124,
    suggestions: 32,
    polls: 5,
    image: 'https://picsum.photos/seed/tech1/800/450'
  },
  {
    id: '2',
    title: 'Product Launch Q4',
    date: 'November 15, 2024',
    status: 'Published',
    rsvps: 88,
    suggestions: 15,
    polls: 3,
    image: 'https://picsum.photos/seed/launch/800/450'
  },
  {
    id: '3',
    title: 'Team Offsite 2024',
    date: 'October 30, 2024',
    status: 'Ended',
    rsvps: 62,
    suggestions: 21,
    polls: 8,
    image: 'https://picsum.photos/seed/offsite/800/450'
  },
  {
    id: '4',
    title: 'Marketing All-Hands',
    date: 'January 10, 2025',
    status: 'Draft',
    rsvps: 0,
    suggestions: 0,
    polls: 0,
    image: 'https://picsum.photos/seed/marketing/800/450'
  },
];

const StatusBadge: React.FC<{ status: Event['status'] }> = ({ status }) => {
  const styles = {
    Live: 'bg-green-900/50 text-green-300',
    Published: 'bg-green-900/50 text-green-300',
    Ended: 'bg-gray-700/50 text-gray-400',
    Draft: 'bg-gray-700/50 text-gray-400',
  };

  const dotColor = {
    Live: 'bg-green-500 animate-pulse',
    Published: 'bg-green-500',
    Ended: 'bg-gray-500',
    Draft: 'bg-gray-500',
  };

  return (
    <div className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}>
      <div className={`size-2 rounded-full ${dotColor[status]}`}></div>
      {status}
    </div>
  );
};

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-dark text-text-primary-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 px-4 md:px-8">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-border-dark py-4">
              <div className="flex items-center gap-4 text-white">
                <div className="size-6 text-primary">
                  <span className="material-symbols-outlined text-3xl">heart_check</span>
                </div>
                <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">EventPulse</h2>
              </div>
              <div className="flex flex-1 justify-center items-center gap-2">
                <button className="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors">
                  <span className="text-sm font-medium">TechCorp</span>
                  <span className="material-symbols-outlined text-base">unfold_more</span>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-gray-800/50 hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined">settings</span>
                </button>
                <button 
                  onClick={() => navigate('/login')}
                  className="flex items-center justify-center rounded-lg h-10 w-10 bg-gray-800/50 hover:bg-gray-800 transition-colors"
                >
                  <span className="material-symbols-outlined">logout</span>
                </button>
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-border-dark" 
                  style={{ backgroundImage: 'url("https://picsum.photos/seed/avatar/200/200")' }}
                ></div>
              </div>
            </header>

            <main className="flex-1 py-8">
              <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-white">Welcome back, Maria!</p>
                <button 
                  onClick={() => navigate('/create-event')}
                  className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-black text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity gap-2"
                >
                  <span className="material-symbols-outlined">add_circle</span>
                  <span className="truncate">Create New Event</span>
                </button>
              </div>

              <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] mb-4 text-white">Your Events</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockEvents.map((event) => (
                  <div 
                    key={event.id}
                    onClick={() => navigate(`/manage/${event.id}`)}
                    className="flex flex-col gap-4 p-5 rounded-xl bg-surface-dark border border-border-dark hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer hover:border-primary/50 group"
                  >
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover rounded-lg overflow-hidden relative" 
                      style={{ backgroundImage: `url("${event.image}")` }}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <div>
                      <p className="text-lg font-bold leading-normal text-white">{event.title}</p>
                      <p className="text-sm font-normal leading-normal text-gray-400 mb-3">{event.date}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <StatusBadge status={event.status} />
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-300">
                        <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base text-primary">groups</span><span>{event.rsvps} RSVPs</span></div>
                        <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base text-primary">lightbulb</span><span>{event.suggestions} Suggestions</span></div>
                        <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base text-primary">poll</span><span>{event.polls} Polls</span></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {mockEvents.length === 0 && (
                <div className="w-full flex flex-col items-center justify-center text-center py-20 px-6 rounded-xl bg-surface-dark border-2 border-dashed border-border-dark mt-6">
                  <div className="w-20 h-20 flex items-center justify-center bg-gray-800/50 rounded-full mb-6">
                    <span className="material-symbols-outlined text-4xl text-primary">event</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Let's create your first event!</h3>
                  <p className="text-gray-400 max-w-sm">Your dashboard is ready. Click the 'Create New Event' button to get started.</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;