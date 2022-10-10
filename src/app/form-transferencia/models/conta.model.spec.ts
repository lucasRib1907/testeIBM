import { ContaModel } from "./conta.model";

describe('ContaModel', () => {
  let contaModel: ContaModel;

  beforeEach(() => {
    contaModel = new ContaModel();
  });

  it('should created ContaModel', () => {
    expect(contaModel)
      .toBeTruthy();
  })
})
