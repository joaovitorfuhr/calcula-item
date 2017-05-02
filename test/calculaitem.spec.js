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

lab.experiment('quando somar todos os id', () =>{
  lab.test('id1 ++ id2 ++ id3 ++ id4 = r.resultado')
  expect(r.resulatado => 4)


)}
