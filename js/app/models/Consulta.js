class Consulta {
    constructor(nome, data, peso, altura) {
        this._nome = nome
        this._data = new Date (data.getTime()) //A blindagem deve ser feita aqui também
        this._peso = peso
        this._altura = altura
        // O sinal _ significa que os atributos estão encapsulados (somente leitura)
        // Então precisamos dos métodos get e set para cada atributo

        Object.freeze(this)
        // Somente congela valores de serem alterados manualmente, mas ainda podem ser alterados por métodos
        // Exemplo:
        //console.peso(80); -> não é alterado
        //console.data.setDate(13); -> é alterado
        // Isso porque _data é um objeto do tipo Date
    }

    get imc() {
        return this._peso / (this._altura * this._altura)
    }

    get nome() {
        return this._nome
    }

    get data() {
        return new Date(this._data.getTime())
        // A instância retornada é diferente da instânciada. Nosso atributo está blindado
    }

    get peso() {
        return this._peso
    }

    get altura() {
        return this._altura
    }
}