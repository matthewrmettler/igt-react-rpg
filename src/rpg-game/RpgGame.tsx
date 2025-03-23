import { IgtGame } from 'incremental-game-template';
import { RpgFeatures } from '@/rpg-game/RpgFeatures';

export class RpgGame extends IgtGame {
  protected readonly SAVE_KEY: string = 'telmoria';
  protected readonly TICK_DURATION: number = 0.05;
  features: RpgFeatures;

  constructor(features: RpgFeatures) {
    super();
    this.features = features;
  }
}
