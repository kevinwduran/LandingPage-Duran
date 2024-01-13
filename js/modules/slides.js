export default class SlidesAnimation {
    constructor(radioBtnSelector, labelSelector) {
        // Seleciona os inputs de rádio e as labels com base nos seletores fornecidos
        this.radioInputs = document.querySelectorAll(radioBtnSelector);
        this.labelElements = document.querySelectorAll(labelSelector);
        
        // Variáveis para controle do intervalo e contador
        this.intervalId = null;
        this.contador = 1;
    }

    // Atualiza a classe 'checked' na label correspondente ao input de rádio selecionado
    updateCheckedLabel() {
        this.radioInputs.forEach((radioInput, index) => {
            if (radioInput.checked) {
                // Remove a classe 'checked' de todas as labels e adiciona à label correspondente
                this.labelElements.forEach((labelElement) => {
                    labelElement.classList.remove('checked');
                });
                this.labelElements[index].classList.add('checked');
            }
        });
    }

    // Avança para a próxima imagem no intervalo de tempo
    nextImage() {
        for (let i = 0; i < this.radioInputs.length; i++) {
            if (this.radioInputs[i].checked) {
                this.contador = i + 1;
                break;
            }
        }

        const nextIndex = (this.contador % 4) + 1;
        const radioElement = document.getElementById('radio' + nextIndex);

        if (radioElement) {
            radioElement.checked = true;
            this.updateCheckedLabel();
        }
    }

    // Inicia o intervalo de troca automática de imagens
    startInterval() {
        this.intervalId = setInterval(() => {
            this.nextImage();
        }, 3000);
    }

    // Manipula o clique nos inputs de rádio para pausar e reiniciar o intervalo
    handleRadioClick() {
        clearInterval(this.intervalId);
        setTimeout(() => {
            this.startInterval();
        }, 2000);
    }

    // Inicializa a classe, adicionando eventos e configurando o estado inicial
    init() {
        // Adiciona a classe 'checked' à primeira label quando a página carrega
        const firstLabel = this.labelElements[0];
        if (firstLabel) {
            firstLabel.classList.add('checked');
        }

        // Adiciona listener para pausar e reiniciar o intervalo quando um input é clicado
        this.radioInputs.forEach((radioInput) => {
            radioInput.addEventListener('click', () => this.handleRadioClick());
        });

        // Inicia o intervalo automaticamente
        this.startInterval();

        // Adiciona listener para atualizar a label quando um input é clicado
        this.radioInputs.forEach((radioInput) => {
            radioInput.addEventListener('click', () => this.updateCheckedLabel());
        });

        // Adiciona event listener para atualizar a label quando a imagem muda automaticamente
        document.addEventListener('change', () => this.updateCheckedLabel());
    }
}
