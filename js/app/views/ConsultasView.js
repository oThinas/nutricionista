class ConsultasView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    update() {
        this._elemento.innerHTML = this._template();
      }
      
    _template() {
      return `
          <table class="table table-bordered">
          <thead class="thead-dark">
              <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Data da Consulta</th>
                  <th scope="col">Peso (kg)</th>
                  <th scope="col">Altura (m)</th>
                  <th scope="col">IMC</th>
              </tr>
          </thead>
          <tbody>
      
          </tbody>
          </table>
        `;
    }
}