import { KillDragonHandler } from './handlers/kill-dragon.handler';
import { DropAncientItemHandler } from './handlers/drop-ancient-item.handler';

export const CommandHandlers = [KillDragonHandler, DropAncientItemHandler];

export class DropAncientItemCommand {
  constructor(public readonly heroId: string, public readonly itemId: string) {}
}

export class KillDragonCommand {
    constructor(
      public readonly heroId: string,
      public readonly dragonId: string,
    ) {}
  }