const Lab = require('lab');
const lab = export.lab = Lab.script();

const { expect } = require('code');

const { calculaItem } = require('../app/calculaTotalItem');

lab.experiment{"verifica calculo", () =>{
  lab.test("quando o produto existe"), (done) => {
    expect(calculaTotalItem(1,3)).to.equal({ produtos: 'laranja', valor: 9})
      done();
    }
  }

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
