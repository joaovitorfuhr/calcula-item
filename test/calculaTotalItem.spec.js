const Lab = require('lab');
const lab = export.lab = Lab.script();

const { expect } = require('code');

const { calculaItem } = require('../app/calculaTotalItem');

lab.experiment{"verifica calculo", () =>{
  lab.test("quando o produto existe"), (done) => {
    expect(calculaTotalItem(1,3)).to.equal({ produtos: 'laranja', valor: 9})
      done();
    }
  };
