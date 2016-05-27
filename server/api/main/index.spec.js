'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var mainCtrlStub = {
  index: 'mainCtrl.index',
  show: 'mainCtrl.show',
  create: 'mainCtrl.create',
  update: 'mainCtrl.update',
  destroy: 'mainCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var mainIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './main.controller': mainCtrlStub
});

describe('Main API Router:', function() {

  it('should return an express router instance', function() {
    mainIndex.should.equal(routerStub);
  });

  describe('GET /api/mains', function() {

    it('should route to main.controller.index', function() {
      routerStub.get
        .withArgs('/', 'mainCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/mains/:id', function() {

    it('should route to main.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'mainCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/mains', function() {

    it('should route to main.controller.create', function() {
      routerStub.post
        .withArgs('/', 'mainCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/mains/:id', function() {

    it('should route to main.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'mainCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/mains/:id', function() {

    it('should route to main.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'mainCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/mains/:id', function() {

    it('should route to main.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'mainCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
