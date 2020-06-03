import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import Model from '../models';

chai.should();
chai.use(chaiHttp);
import { filtration } from '../lib/helpers';

const { carOwner } = Model;

describe('services', () => {
  describe('searchService', () => {
    it('Should be able to filter accord to the specified params', async (done) => {
      const filterData = {
        start_year: 1991,
        end_year: 2009,
        gender: 'male',
        countries: [
          'Brazil',
          'Ireland',
          'Egypt',
          'Poland',
          'Niger',
          'Greece',
          'Peru',
        ],
        colors: ['Green', 'Violet', 'Yellow', 'Blue'],
      };

      const result = await carOwner.findAndCountAll(
        filtration(filterData, 1, 10)
      );
      result.have.property('count');
      done();
    });
  });
});
