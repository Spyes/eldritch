import { Map, List } from 'immutable';
import { expect } from 'chai';

import { getLocationStyle } from '../public/js/common/style';

describe("Common", () => {
  describe("Style", () => {
    describe("getLocationStyle", () => {
      it("should return an empty object when no location is given", () => {
        expect(getLocationStyle()).to.be.empty;
      });

      it("should return a style based on a given location", () => {
        const location = Map({coords: Map({x: 500, y: 409, r: 80})});
        const left = location.getIn(['coords', 'x']);
        const top = location.getIn(['coords', 'y']) + 150;
        const expected = {
          position: "absolute",
          backgroundColor: "white",
          left,
          top
        };
        expect(getLocationStyle(location)).to.deep.equal(expected);
      });
    });
  });
});
