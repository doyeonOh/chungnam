'use strict';

describe('chungnamApp.version module', function() {
  beforeEach(module('chungnamApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
