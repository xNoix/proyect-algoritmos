import { Test, TestingModule } from '@nestjs/testing';
import { StadisticController } from './stadistic.controller';

describe('StadisticController', () => {
  let controller: StadisticController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StadisticController],
    }).compile();

    controller = module.get<StadisticController>(StadisticController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
