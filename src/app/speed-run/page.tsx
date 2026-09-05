'use client';

import React, { useState, useEffect } from 'react';
import { SpeedRunGameMode, SpeedRunGameState } from '@/types/speedRun';
import { SpeedRunLobby } from '@/components/speed-run/SpeedRunLobby';
import { SpeedRunGame } from '@/components/speed-run/SpeedRunGame';
import { SpeedRunResult } from '@/components/speed-run/SpeedRunResult';

export default function SpeedRunPage() {
  const [view, setView] = useState<'lobby' | 'game' | 'result'>('lobby');
  const [activeMode, setActiveMode] = useState<SpeedRunGameMode>('blitz');
  const [lastGameState, setLastGameState] = useState<SpeedRunGameState | null>(null);

  useEffect(() => {
    if (view === 'lobby') {
      try {
        const { trackSpeedRunLobbyViewed } = require('@/lib/analytics');
        trackSpeedRunLobbyViewed({ defaultMode: 'blitz' });
      } catch (e) {
        console.debug('Telemetry trackSpeedRunLobbyViewed suppressed', e);
      }
    }
  }, [view]);

  const handleStartGame = (mode: SpeedRunGameMode) => {
    setActiveMode(mode);
    setView('game');

    // Phase B Telemetry: Track Speed Run Started
    try {
      const { trackSpeedRunStarted } = require('@/lib/analytics');
      trackSpeedRunStarted({ mode });
    } catch (e) {
      console.debug('Telemetry trackSpeedRunStarted suppressed', e);
    }
  };

  const handleEndGame = (finalState: SpeedRunGameState) => {
    setLastGameState(finalState);
    setView('result');

    // Phase B Telemetry: Track Speed Run Completed
    try {
      const { trackSpeedRunCompleted } = require('@/lib/analytics');
      trackSpeedRunCompleted({
        mode: finalState.mode,
        score: finalState.score,
        maxCombo: finalState.maxCombo,
        correctCount: finalState.correctCount,
      });
    } catch (e) {
      console.debug('Telemetry trackSpeedRunCompleted suppressed', e);
    }
  };

  const handlePlayAgain = () => {
    setView('game');

    // Phase B Telemetry: Track Speed Run Restarted
    try {
      const { trackSpeedRunStarted } = require('@/lib/analytics');
      trackSpeedRunStarted({ mode: activeMode });
    } catch (e) {
      console.debug('Telemetry trackSpeedRunStarted suppressed', e);
    }
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
