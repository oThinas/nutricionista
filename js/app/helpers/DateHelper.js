class DateHelper {
    constructor() {
        throw new Error('Essa classe não pode ser instânciada.')
    }

    static textoParaData(texto) {
        if (/^d{4}-d{2}-d{2}$/.test(texto)) {
            throw new Error('O formato correto é yyyy-mm-dd')
        }
        // Informa que o texto recebido deve possuir quatro dígitos, -, dois dígitos, -, dois dígitos
        // ^ e $ indicam que mais nenhum caractére será aceito
        // //[barras duplas] indicam uma expressão regular

        return new Date(...
            texto.split('-')
            .map((item, indice) => item - (indice % 2))
        )

    }

        // [new Date] Trata o problema da data, isso porque todo input date é inserido como string, porém Date é um objeto
            // [...] Spread operator: informa que o primeiro item do array (split)Date ocupará o primeiro parâmetro do construtor (dd-mm-yyyy)
            // Como Date é um array agora (split), o mês 1, na verdade tem o índice 0. Para resolver isso, usamos o método map()
            // Estrutura inicial:
            //let consulta = new Consulta(
            // this._inputNome.value,
            // new Date(...
            //     this._inputData.value
            //     .split('-')
            //     .map(function(item) {
            //         return item;
            //     })),
            //

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
        // return data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
        // É a mesma coisa, mas o primeiro usa Template String
    }
}