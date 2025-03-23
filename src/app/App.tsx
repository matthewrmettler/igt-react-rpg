'use client';

import { CurrencyType } from '@/lib/currency';
import { RpgGame } from '@/rpg-game/RpgGame';
import { IgtWallet } from 'incremental-game-template/ig-template/features/wallet/';
import { IgtGame } from 'incremental-game-template/ig-template/IgtGame';

export class App {
  static game: IgtGame;

  static start(): void {
    // Create all feature objects and add them to the game
    this.game = new RpgGame({
      wallet: new IgtWallet([CurrencyType.Copper, CurrencyType.Silver, CurrencyType.Gold]),
      /* Whatever features your game has */
    });
    // All features now exist and can subscribe to each others events
    this.game.initialize();

    // Apply save data if it exists
    this.game.load();

    // Run start on all features and update the game state
    this.game.start();
  }
}
