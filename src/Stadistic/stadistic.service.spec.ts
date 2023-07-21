import { Test, TestingModule } from '@nestjs/testing';
import { StadisticService } from './stadistic.service';

describe('StadisticService', () => {
  let service: StadisticService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StadisticService],
    }).compile();

    service = module.get<StadisticService>(StadisticService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
