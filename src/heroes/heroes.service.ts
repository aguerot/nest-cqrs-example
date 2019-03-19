import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Hero } from './models/hero.model';
import { GetHeroesQuery } from './queries/impl';
import { KillDragonDto } from './interfaces/kill-dragon-dto.interface';
import { KillDragonCommand } from './commands';

@Injectable()
export class HeroesGameService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async killDragon(heroId: string, killDragonDto: KillDragonDto) {
    return await this.commandBus.execute(
      new KillDragonCommand(heroId, killDragonDto.dragonId),
    );
  }

  async findAll(): Promise<Hero[]> {
    return this.queryBus.execute(new GetHeroesQuery());
  }
}
