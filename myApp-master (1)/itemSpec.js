const request = require("request");
const server = require("../server");

const endpoind = "http://localhost:3090/artist";

describe("artist", function() {
  it("should return 200 response code", function(done) {
    request.get(endpoind, function(error, response) {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

  it("should fail on POST", function(done) {
    request.post(endpoint, { json: true, body: {} }, function(error, response) {
      expect(response.statusCode).toEqual(404);
      done();
    });
  });
  it("should Delete artists", function(done){
    request.delete(endpoind,{json: true, body:{} }, function(error, response){
      expect(response.statusCode).toEqual(404);
      done();
    })
  })
  it("should PUT artists",function(done){
    request.put(endpoind,{json: true, body:{}, function(error  ,response){
      expect(response.statusCode).toEqual(204);
      done();
    }})
  })
});
