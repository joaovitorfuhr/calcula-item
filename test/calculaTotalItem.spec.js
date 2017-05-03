const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { calculaTotalItem } = require('../app/calculaTotalItem');

lab.experiment("verifica calculo", () => {
  lab.test("quando o produto existe", (done) => {
    expect(calculaTotalItem(1,3)).to.equal({ produto: 'laranja', valor: 9});
    done();
  })
});
