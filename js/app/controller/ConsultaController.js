class ConsultaController {
    constructor() {
        let $ = document.querySelector.bind(document); // querySelector é atribuído a $, mas permanece associado ao document
        this._inputNome = $('#nome');
        this._inputData = $('#data');
        this._inputPeso = $('#peso');
        this._inputAltura = $('#altura');
        this._listaConsultas = new ListaConsultas();
    }

    adiciona(evento) {
        evento.preventDefault();
        
        let consulta = new Consulta(
            this._inputNome.value,
            DateHelper.textoParaData(this._inputData.value),
            this._inputPeso.value,
            this._inputAltura.value
        );
    }

    _criaConsulta() {
        return new Consulta(
            this._inputNome.value,
            DateHelper.textoParaData(this._inputData.value),
            this._inputPeso.value,
            this._inputAltura.value
        );
    }

    _limparFormulario() {
        this._inputNome.value = "";
        this._inputData.value = "";
        this._inputPeso.value = "";
        this._inputAltura.value = "";

        this._inputNome.focus();
    }
}