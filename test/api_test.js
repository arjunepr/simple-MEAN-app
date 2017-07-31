// TODO: TEST API
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../server');

const { expect } = chai;

chai.use(chaiHttp);

describe('API', () => {

  it('Should return all available data on a GET request ', (done) => {
    chai.request(app)
      .get('/api/tasks/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);

        done();
      });
  });

});