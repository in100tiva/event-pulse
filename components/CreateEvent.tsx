import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateEvent: React.FC = () => {
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(false);
  const [anonymousSuggestions, setAnonymousSuggestions] = useState(true);
  const [moderation, setModeration] = useState(false);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-dark text-gray-300">
      <div className="layout-container flex h-full grow flex-col">
        <header className="w-full">
          <div className="px-4 md:px-10 lg:px-20 py-4">
            <div className="mx-auto max-w-4xl">
              <div className="flex justify-between items-center gap-2">
                <button 
                  onClick={() => navigate('/dashboard')}
                  className="flex items-center gap-2 p-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-2xl">arrow_back</span>
                  <span className="hidden sm:inline text-base font-medium">Voltar ao Painel</span>
                </button>
                <button className="p-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-2xl">more_vert</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex flex-1 justify-center px-4 md:px-10 lg:px-20 py-5">
          <div className="layout-content-container flex flex-col max-w-4xl flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Criar Novo Evento</h1>
            </div>

            <div className="flex flex-col gap-8 mt-6">
              <div className="flex flex-col gap-4 bg-surface-dark p-6 rounded-xl border border-border-dark">
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Detalhes do Evento</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                  <div className="md:col-span-2">
                    <label className="flex flex-col">
                      <p className="text-gray-300 text-base font-medium leading-normal pb-2">Título do Evento</p>
                      <input 
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:border-primary border border-border-dark bg-[#1a2c20] h-14 placeholder:text-[#61896f] p-[15px] text-base font-normal leading-normal text-white" 
                        placeholder="ex: Reunião Geral do 3º Trimestre" 
                      />
                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <label className="flex flex-col">
                      <p className="text-gray-300 text-base font-medium leading-normal pb-2">Descrição do Evento</p>
                      <textarea 
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:border-primary border border-border-dark bg-[#1a2c20] min-h-36 placeholder:text-[#61896f] p-[15px] text-base font-normal leading-normal text-white" 
                        placeholder="Conte-nos mais sobre o seu evento"
                      ></textarea>
                    </label>
                  </div>
                  <div>
                    <label className="flex flex-col">
                      <p className="text-gray-300 text-base font-medium leading-normal pb-2">Data e Hora</p>
                      <div className="relative">
                        <input 
                          className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:border-primary border border-border-dark bg-[#1a2c20] h-14 placeholder:text-[#61896f] p-[15px] pl-12 text-base font-normal leading-normal text-white" 
                          placeholder="Selecione data e hora" 
                          type="text" 
                          defaultValue="18 de Julho, 2024 - 14:00"
                        />
                        <span className="material-symbols-outlined text-[#61896f] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">calendar_month</span>
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="flex flex-col">
                      <p className="text-gray-300 text-base font-medium leading-normal pb-2">Tipo de Evento</p>
                      <div className="flex items-center justify-between rounded-lg bg-black/20 p-2 h-14 border border-border-dark">
                        <span className="text-gray-300 font-medium ml-2">Evento Online</span>
                        <button 
                          onClick={() => setIsOnline(!isOnline)}
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark ${isOnline ? 'bg-primary' : 'bg-gray-600'}`}
                        >
                          <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isOnline ? 'translate-x-5' : 'translate-x-0'}`}></span>
                        </button>
                      </div>
                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <label className="flex flex-col">
                      <p className="text-gray-300 text-base font-medium leading-normal pb-2">Localização (se presencial)</p>
                      <input 
                        disabled={isOnline}
                        className={`flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:border-primary border border-border-dark bg-[#1a2c20] h-14 placeholder:text-[#61896f] p-[15px] text-base font-normal leading-normal text-white ${isOnline ? 'opacity-50 cursor-not-allowed' : ''}`} 
                        placeholder="ex: Rua Exemplo, 123, São Paulo, SP" 
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-surface-dark p-6 rounded-xl border border-border-dark">
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Configurações de Engajamento</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                  <div>
                    <label className="flex flex-col">
                      <p className="text-gray-300 text-base font-medium leading-normal pb-2">Limite de Participantes (opcional)</p>
                      <input 
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:border-primary border border-border-dark bg-[#1a2c20] h-14 placeholder:text-[#61896f] p-[15px] text-base font-normal leading-normal text-white" 
                        placeholder="ex: 100" 
                        type="number" 
                      />
                    </label>
                  </div>
                  <div className="flex flex-col justify-end">
                    <div className="flex items-center justify-between rounded-lg bg-black/20 p-2 h-14 border border-border-dark">
                      <span className="text-gray-300 font-medium ml-2">Permitir sugestões anônimas</span>
                      <button 
                        onClick={() => setAnonymousSuggestions(!anonymousSuggestions)}
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark ${anonymousSuggestions ? 'bg-primary' : 'bg-gray-600'}`}
                      >
                        <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${anonymousSuggestions ? 'translate-x-5' : 'translate-x-0'}`}></span>
                      </button>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="flex items-center justify-between rounded-lg bg-black/20 p-4 h-14 border border-border-dark">
                      <span className="text-gray-300 font-medium">Moderar sugestões antes de publicar</span>
                      <button 
                        onClick={() => setModeration(!moderation)}
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark ${moderation ? 'bg-primary' : 'bg-gray-600'}`}
                      >
                        <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${moderation ? 'translate-x-5' : 'translate-x-0'}`}></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 mt-8 py-4 bg-background-dark border-t border-border-dark">
              <div className="flex flex-col-reverse sm:flex-row justify-end items-center gap-3">
                <button 
                  onClick={() => navigate('/dashboard')}
                  className="flex items-center justify-center gap-2 font-bold px-6 py-3.5 h-14 w-full sm:w-auto rounded-lg text-gray-300 bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  Salvar como Rascunho
                </button>
                <button 
                  onClick={() => navigate('/manage/new-event')}
                  className="flex items-center justify-center gap-2 font-bold px-6 py-3.5 h-14 w-full sm:w-auto rounded-lg text-background-dark bg-primary hover:bg-primary/90 transition-colors"
                >
                  Publicar Evento
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateEvent;