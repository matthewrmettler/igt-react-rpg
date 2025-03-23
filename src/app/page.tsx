'use client';

import GoldMine from './GoldMine';
import { App } from './App';

export default function Page() {
  App.start();
  return (
    <div>
      <h1 className="m-2 text-2xl font-bold text-amber-300 underline">Clicker</h1>{' '}
      <div className="m-8 bg-slate-800 rounded-xl grid grid-cols-3 gap-4">
        <GoldMine />
        <GoldMine />
        <GoldMine />
      </div>
    </div>
  );
}
