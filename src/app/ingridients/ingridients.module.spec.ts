import { IngridientsModule } from './ingridients.module';

describe('IngridientsModule', () => {
  let ingridientsModule: IngridientsModule;

  beforeEach(() => {
    ingridientsModule = new IngridientsModule();
  });

  it('should create an instance', () => {
    expect(ingridientsModule).toBeTruthy();
  });
});
