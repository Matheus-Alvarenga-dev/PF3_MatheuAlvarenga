const calcular = document.getElementById('calcular');


function ve () {
    const nome = document.getElementById('nome').value;
    const  p = document.getElementById('mensal').value;
    const i = document.getElementById('juros').value;
    const n = document.getElementById('parcelas').value;
    const resultado = document.getElementById('resultado');

 if (nome !== '' && p !== '' && i !== '' && n !=='') {
      
        const VF = p * ( ( ( (1 + (i/p) ) ** n ) - 1) / (i/p) ) .toFixed(2);
        
        resultado.textContent = `${nome} aplicando mensalmente ${p} reais, com a taxa de juros de ${i}%, com ${n} parcelas mensais, o valor poupado será ${VF} reais.`;

    }else {
        resultado.textContent = 'Para calcular, preencha todos os campos.';
    }

}
calcular.addEventListener('click', ve);
