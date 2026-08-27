'use client';

import React, { useState } from 'react';
import { SpeedRunGameMode, SpeedRunGameState } from '@/types/speedRun';
import { SpeedRunLobby } from '@/components/speed-run/SpeedRunLobby';
import { SpeedRunGame } from '@/components/speed-run/SpeedRunGame';
import { SpeedRunResult } from '@/components/speed-run/SpeedRunResult';

export default function SpeedRunPage() {
  const [view, setView] = useState<'lobby' | 'game' | 'result'>('lobby');
  const [activeMode, setActiveMode] = useState<SpeedRunGameMode>('blitz');
  const [lastGameState, setLastGameState] = useState<SpeedRunGameState | null>(null);

  const handleStartGame = (mode: SpeedRunGameMode) => {
    setActiveMode(mode);
    setView('game');
  };

  const handleEndGame = (finalState: SpeedRunGameState) => {
    setLastGameState(finalState);
    setView('result');
  };

  const handlePlayAgain = () => {
    setView('game');
  };

  const handleBackToLobby = () => {
    setView('lobby');
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {view === 'lobby' && <SpeedRunLobby onStartGame={handleStartGame} />}
        {view === 'game' && (
          <SpeedRunGame
            mode={activeMode}
            onEndGame={handleEndGame}
            onBackToLobby={handleBackToLobby}
          />
        )}
        {view === 'result' && lastGameState && (
          <SpeedRunResult
            gameState={lastGameState}
            onPlayAgain={handlePlayAgain}
            onBackToLobby={handleBackToLobby}
          />
        )}
      </div>
    </div>
  );
}
