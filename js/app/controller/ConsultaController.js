class ConsultaController {
    constructor() {
        let $ = document.querySelector.bind(document); // querySelector é atribuído a $, mas permanece associado ao document
        this._inputNome = $('#nome');
        this._inputData = $('#data');
        this._inputPeso = $('#peso');
        this._inputAltura = $('#altura');
    }

    adiciona(evento) {
        evento.preventDefault();
        
        let consulta = new Consulta(
            this._inputNome.value,
            new Date(...
                this._inputData.value
                .split('-')
                .map((item, indice) => item - (indice % 2))),

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
                
            this._inputPeso.value,
            this._inputAltura.value
        );
        console.log(consulta);
    }
}