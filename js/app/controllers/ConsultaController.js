class ConsultaController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputData = $('#data');
        this._inputPeso = $('#peso');
        this._inputAltura = $('#altura');
        this._listaConsultas = new ListaConsultas();
        this._consultasView = new ConsultasView($('#consultasView'));
        // this._consultasView.update(); // Comentado após o método map() na view ConsultasView
    }

    adiciona(evento) {
        evento.preventDefault();
        
        // let consulta = new Consulta(
        //     this._inputNome.value,
        //     DateHelper.textoParaData(this._inputData.value),
        //     this._inputPeso.value,
        //     this._inputAltura.value
        // );

        // console.log(consulta);

        this._listaConsultas.adiciona(this._criaConsulta());
        this._consultasView.update(this._listaConsultas);
        this._limparFormulario();
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