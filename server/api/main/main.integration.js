'use strict';

var app = require('../..');
import request from 'supertest';

var newMain;

describe('Main API:', function() {

  describe('GET /api/mains', function() {
    var mains;

    beforeEach(function(done) {
      request(app)
        .get('/api/mains')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          mains = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      mains.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/mains', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/mains')
        .send({
          name: 'New Main',
          info: 'This is the brand new main!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMain = res.body;
          done();
        });
    });

    it('should respond with the newly created main', function() {
      newMain.name.should.equal('New Main');
      newMain.info.should.equal('This is the brand new main!!!');
    });

  });

  describe('GET /api/mains/:id', function() {
    var main;

    beforeEach(function(done) {
      request(app)
        .get('/api/mains/' + newMain._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          main = res.body;
          done();
        });
    });

    afterEach(function() {
      main = {};
    });

    it('should respond with the requested main', function() {
      main.name.should.equal('New Main');
      main.info.should.equal('This is the brand new main!!!');
    });

  });

  describe('PUT /api/mains/:id', function() {
    var updatedMain;

    beforeEach(function(done) {
      request(app)
        .put('/api/mains/' + newMain._id)
        .send({
          name: 'Updated Main',
          info: 'This is the updated main!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMain = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMain = {};
    });

    it('should respond with the updated main', function() {
      updatedMain.name.should.equal('Updated Main');
      updatedMain.info.should.equal('This is the updated main!!!');
    });

  });

  describe('DELETE /api/mains/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/mains/' + newMain._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when main does not exist', function(done) {
      request(app)
        .delete('/api/mains/' + newMain._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
