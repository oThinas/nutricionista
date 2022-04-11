class MensagensView extends View{ // Diferente da apostila que está MensagemView, deixei Mensagens no plural para seguir o padrão de views
    constructor(elemento) {
        super(elemento)
    }

    _template(model) {
        return `<p class='alert alert-info'>${model.texto}</p>`
    }
}