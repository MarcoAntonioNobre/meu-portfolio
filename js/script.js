const insta = document.getElementById('instaId');
const linkedin = document.getElementById('linkedinId');
const github = document.getElementById('githubId');
const whatsapp = document.getElementById('whatsappId');

insta.addEventListener('click', function () {
    window.open('https://www.instagram.com/marconobree?igsh=MTJ4dXRweTVqMHVx', '_blank');
});

linkedin.addEventListener('click', function () {
    window.open('https://www.linkedin.com/in/marco-nobre-730a02194', '_blank');
});

github.addEventListener('click', function () {
    window.open('https://github.com/MarcoAntonioNobre', '_blank');
});

whatsapp.addEventListener('click', function () {
    const numero = '5533988661359';
    const mensagem = encodeURIComponent('Olá, estou entrando em contato com você pelo link do seu portfólio!');
    const whatsappUrl = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(whatsappUrl, '_blank');
});

const copy = document.getElementById('copy');
const ano = new Date().getFullYear();
copy.innerHTML = '&copy Marco Nobre, ' + ano + '. Todos os direitos reservados.'

function calcular() {

    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let valor3 = document.getElementById('valor3').value;
    let resultadoABC = document.getElementById('resultadoABC');

    let soma = parseInt(valor1) + parseInt(valor2);

    if (valor3 == 0 && valor2 == 0 && valor3 == 0) {
        resultadoABC.innerHTML = "Digite algum valor para calcular!";
    } else {
        if (soma > parseInt(valor3)) {
            resultadoABC.innerHTML = "O resultado da soma de 'A+B' é MAIOR que o valor de C";
        } else if (soma == parseInt(valor3)) {
            resultadoABC.innerHTML = "O resultado da soma de 'A+B' é IGUAL ao valor de C";
        }else{
            resultadoABC.innerHTML = "O resultado da soma de 'A+B' é MENOR que o valor de C";
        }
    }

}

function parOuImparPositivoNegativo() {
    let parOuImpar = document.getElementById('parOuImpar').value;
    let positivoOuNegativo = parOuImpar
    let resultadoImparPar = document.getElementById('resultadoImparPar');

    let convertePontoEmVirgula = positivoOuNegativo.replace(',', '.')

    let posNeg = '';
    if (convertePontoEmVirgula > 0) {
        posNeg = 'é um número positivo!'
    } else if (convertePontoEmVirgula == 0) {
        posNeg = "é um número nulo"
    } else {
        posNeg = 'é um número negativo!'
    }
    var parImpar = '';
    if (parOuImpar % 2 === 0) {
        parImpar = 'par';
    } else {
        parImpar = 'ímpar';
    }

    resultadoImparPar.innerHTML = 'O número digitado é ' + parImpar + ' e ' + posNeg;

}

function calcularIMC() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let resultadoIMC = document.getElementById('resultadoIMC');
    let obs = document.getElementById('obs');
    let quadroIMC = document.getElementById('quadroIMC')

    //Cálculo IMC
    let pesoNum = parseFloat(peso);
    let alturaNum = parseFloat(altura);
    let alturaMetro = alturaNum / 100;

    if (pesoNum <= 0 || pesoNum > 400) {
        resultadoIMC.innerHTML = "Digite um peso válido.";
        return
    }
    if (alturaNum <= 0 || alturaNum > 300) {
        resultadoIMC.innerHTML = "Digite uma altura válida.";
        return;
    }

    let alturaRes = alturaMetro * alturaMetro;
    let imc = pesoNum / alturaRes;
    let imcArredondado = imc.toFixed(2);

    quadroIMC.style.color = '#fff'

    if (imcArredondado <= 18.5) {
        resultadoIMC.innerHTML = 'O resultado do seu IMC é: ' + imcArredondado + ' e seu peso está abaixo do normal.';
        obs.innerHTML = 'Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.'
        quadroIMC.style.display = 'block'
        quadroIMC.classList.add('alert-info');
        quadroIMC.classList.add('text-info');
        quadroIMC.classList.remove('alert-success');
        quadroIMC.classList.remove('text-success');
        quadroIMC.classList.remove('alert-warning');
        quadroIMC.classList.remove('text-warning');
        quadroIMC.classList.remove('alert-danger');
        quadroIMC.classList.remove('text-danger');
    } else if (imcArredondado >= 18.6 && imcArredondado <= 24.9) {
        resultadoIMC.innerHTML = 'O resultado do seu IMC é: ' + imcArredondado + ' e seu peso está normal.';
        obs.innerHTML = 'Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.'
        quadroIMC.style.display = 'block'
        quadroIMC.classList.add('alert-success');
        quadroIMC.classList.add('text-success');
        quadroIMC.classList.remove('alert-info');
        quadroIMC.classList.remove('text-info');
        quadroIMC.classList.remove('alert-warning');
        quadroIMC.classList.remove('text-warning');
        quadroIMC.classList.remove('alert-danger');
        quadroIMC.classList.remove('text-danger');
    } else if (imcArredondado >= 25 && imcArredondado <= 29.9) {
        resultadoIMC.innerHTML = 'O resultado do seu IMC é: ' + imcArredondado + ' e você está com <b>SOBREPESO</b>';
        obs.innerHTML = 'Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.'
        quadroIMC.style.display = 'block'
        quadroIMC.classList.add('alert-warning');
        quadroIMC.classList.add('text-warning');
        quadroIMC.classList.remove('alert-info');
        quadroIMC.classList.remove('text-info');
        quadroIMC.classList.remove('alert-success');
        quadroIMC.classList.remove('text-success');
        quadroIMC.classList.remove('alert-danger');
        quadroIMC.classList.remove('text-danger');
    } else if (imcArredondado >= 30 && imcArredondado <= 34.9) {
        resultadoIMC.innerHTML = 'O resultado do seu IMC é: ' + imcArredondado + ' e você está com <b>OBESIDADE GRAU 1</b>';
        obs.innerHTML = 'Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.'
        quadroIMC.style.display = 'block'
        quadroIMC.classList.add('alert-danger');
        quadroIMC.classList.add('text-danger');
        quadroIMC.classList.remove('alert-info');
        quadroIMC.classList.remove('text-info');
        quadroIMC.classList.remove('alert-success');
        quadroIMC.classList.remove('text-success');
        quadroIMC.classList.remove('alert-warning');
        quadroIMC.classList.remove('text-warning');
    } else if (imcArredondado >= 35 && imcArredondado <= 39.9) {
        resultadoIMC.innerHTML = 'O resultado do seu IMC é:' + imcArredondado + ' e você está com <b>OBESIDADE GRAU 2</b>';
        obs.innerHTML = 'Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.'
        quadroIMC.style.display = 'block'
        quadroIMC.classList.add('alert-danger');
        quadroIMC.classList.add('text-danger');
        quadroIMC.classList.remove('alert-info');
        quadroIMC.classList.remove('text-info');
        quadroIMC.classList.remove('alert-success');
        quadroIMC.classList.remove('text-success');
        quadroIMC.classList.remove('alert-warning');
        quadroIMC.classList.remove('text-warning');
    } else if (imcArredondado >= 40) {
        resultadoIMC.innerHTML = 'O resultado do seu IMC é: ' + imcArredondado + ' e você está com <b>OBESIDADE GRAU 3</b>';
        obs.innerHTML = 'Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.'
        quadroIMC.style.display = 'block'
        quadroIMC.classList.add('alert-danger');
        quadroIMC.classList.add('text-danger');
        quadroIMC.classList.remove('alert-info');
        quadroIMC.classList.remove('text-info');
        quadroIMC.classList.remove('alert-success');
        quadroIMC.classList.remove('text-success');
        quadroIMC.classList.remove('alert-warning');
        quadroIMC.classList.remove('text-warning');
    }

    console.log(obs)
}