import { TransferirModel } from "./transferir.model";

describe('TransferirModel', () => {
  let transferirModel: TransferirModel;

  beforeEach(() => {
    transferirModel = new TransferirModel();
  });

  it('should created TransferirModel', () => {
    expect(transferirModel)
      .toBeTruthy();
  })
})
