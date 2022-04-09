class MensagensView { // Diferente da apostila que está MensagemView, deixei Mensagens no plural para seguir o padrão de views
    constructor(elemento) {
        this._elemento = elemento
    }

    update(model) {
        this._elemento.innerHTML = this._template(model)
    }

    _template(model) {
        return `<p class='alert alert-info'>${model.texto}</p>`
    }
}