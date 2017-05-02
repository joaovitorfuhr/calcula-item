const Lab = require('lab');
const lab = export.lab = Lab.script();

const { expect } = require('code');

const { calculaItem } = require('../app/contaItem');

lab.experiment('quando não informa id',() => {
  lab.test('valor = unxepct', (done) => {
    let ci = calculaitem();
    expect(ci.resultado()).to.equal({resultado: []});
    done();
  });
});

lab.experiment('quando o id for existente') =>{
  lab.test('valor= 1, 2, 3, 4', (done)



)}
