import { UsuarioModel } from "./usuario.model";

describe('UsuarioModel', () => {
  let usuarioModel: UsuarioModel;

  beforeEach(() => {
    usuarioModel = new UsuarioModel();
  });

  it('should created UsuarioModel', () => {
    expect(usuarioModel)
      .toBeTruthy();
  })
})
