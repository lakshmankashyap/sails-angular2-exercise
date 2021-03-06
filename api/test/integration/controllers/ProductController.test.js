var request = require('supertest');

describe('ProductController', function() {

    describe('GET /products', function() {
        it('respond with json', function(done) {
            request(sails.hooks.http.app)
            .get('/products')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
        });
    });
   
     describe('GET /products/1', function() {
        it('respond with json', function(done) {
            request(sails.hooks.http.app)
            .get('/products/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
        });
    });
 
});