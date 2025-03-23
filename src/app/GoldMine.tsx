'use client';
import { round } from '@/lib/math';
import React, { useReducer } from 'react';

interface State {
  count: number;
}

type CounterAction = { type: 'reset' } | { type: 'setCount'; value: State['count'] };

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'setCount':
      return { ...state, count: round(action.value) };
    default:
      throw new Error('Unknown action');
  }
}

export default function GoldMine() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addThree = () => dispatch({ type: 'setCount', value: state.count + 3 });
  const tenPercent = () => dispatch({ type: 'setCount', value: state.count * 1.1 });
  const reset = () => dispatch({ type: 'reset' });

  return (
    <div className="m-8 bg-slate-400 rounded-xl grid grid-cols-1 gap-4">
      <h1 className="m-2 text-2xl font-bold text-amber-400 underline">Gold Mine</h1>
      <p className="m-2 text-xl">
        Count: <span className="text-emerald-300">{state.count}</span>
      </p>
      <div className="grid grid-cols-5">
        <button className="m-2 rounded-sm bg-emerald-700 hover:bg-slate-300" onClick={addThree}>
          +3
        </button>
        <button className="m-2 rounded-sm bg-emerald-700 hover:bg-slate-300" onClick={tenPercent}>
          +10%
        </button>
        <button className="m-2 rounded-sm bg-red-700 hover:bg-red-300" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
