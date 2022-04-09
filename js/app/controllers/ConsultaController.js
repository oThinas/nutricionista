class ConsultaController {
    constructor() {
        let $ = document.querySelector.bind(document)
        this._inputNome = $('#nome')
        this._inputData = $('#data')
        this._inputPeso = $('#peso')
        this._inputAltura = $('#altura')
        this._listaConsultas = new ListaConsultas()

        this._consultasView = new ConsultasView($('#consultasView'))
        this._mensagem = new Mensagem()
        this._mensagensView = new MensagensView($('#mensagensView'))
        // this._consultasView.update(); // Comentado após o método map() na view ConsultasView
        // this._consultasView.update(this._listaConsultas) // Caso isso esteja no contructor, irá aparecer o cabeçalho da tabela mesmo sem nenhum registro na tabela
        
    }

    adiciona(evento) {
        evento.preventDefault()
        
        // let consulta = new Consulta(
        //     this._inputNome.value,
        //     DateHelper.textoParaData(this._inputData.value),
        //     this._inputPeso.value,
        //     this._inputAltura.value
        // ) 

        // console.log(consulta) // Bloco atualizado para o bloco de código abaixo após a utilização do método map() na view ConsultasView

        this._listaConsultas.adiciona(this._criaConsulta())
        this._mensagem.texto = 'Consulta cadastrada com sucesso!'
        this._consultasView.update(this._listaConsultas)
        this._mensagensView.update(this._mensagem)
        this._limparFormulario()
    }

    _criaConsulta() {
        return new Consulta(
            this._inputNome.value,
            DateHelper.textoParaData(this._inputData.value),
            this._inputPeso.value,
            this._inputAltura.value
        )
    }

    _limparFormulario() {
        this._inputNome.value = ""
        this._inputData.value = ""
        this._inputPeso.value = ""
        this._inputAltura.value = ""

        this._inputNome.focus()
    }
}