/* jshint expr:true */
/*jshint camelcase: false */

'use strict';

var expect = require('chai').expect;
var Todo;
var priority_id;

describe('Todo', function(){

  before(function(done){
    var connect = require('../../app/lib/mongodb-connection-pool');
    connect('todo-test', function(){
      Todo = global.nss.Todo;
      done();
    });
  });

  beforeEach(function(done){
    global.nss.db.dropDatabase(function(err, result){
      Todo = global.nss.Todo;
      done();
    });
  });

  // ------------------------------------------------------------------------ //
  describe('new', function(){
    it('should create a new Todo', function(){
      var obj = {name:'Laundry', dueDate: '02-30-2014', isComplete: false, tags:'cleaning, boring stuff'};
      var obj2 = {name:'shopping', dueDate: '02-28-2014', isComplete: false};
      var t1 = new Todo(obj);
      var t2 = new Todo(obj2);

      expect(t1).to.be.instanceof(Todo);
      expect(t1).to.have.property('name').and.equal('Laundry');
      expect(t1).to.have.property('dueDate').and.equal('02-30-2014');
      expect(t2.tags).to.have.length(0);
    });
  });
  // ------------------------------------------------------------------------ //

  describe('#save', function(){
    it('should save a Todo object into the database', function(done){
      var t1 = new Todo ({name:'Laundry', dueDate: '02-30-2014', isComplete: false, tags:'cleaning, boring'});
      t1.save(function(record){
        expect(t1).to.be.instanceof(Todo);
        expect(t1.name).to.equal('Laundry');
        expect(t1.dueDate).to.equal('02-30-2014');
        expect(t1).to.have.property('_id').and.be.ok;
        done();
      });
    });


  });

  // ------------------------------------------------------------------------ //
  describe('.findAll', function(){
    it('should return all todos in the datbase', function(done){
      var t1 = new Todo ({name:'Laundry', dueDate: '02-30-2014', isComplete: false, tags:'cleaning, boring'});
      var t2 = new Todo ({name:'Grocery', dueDate: '02-29-2014', isComplete: false, tags:'shopping, logistics'});
      var t3 = new Todo ({name:'parachuting', dueDate: '02-28-2014', isComplete: false, tags:'entertainment, fun'});

      t1.save(function(){
        t2.save(function(){
          t3.save(function(){
            Todo.findAll(function(todos){
              expect(todos).to.have.length(3);
              done();
            });
          });
        });
      });
    });
  });

  // ------------------------------------------------------------------------ //
  describe('.findById', function(){
    it('should find the Todo by its id', function(done){
      var t1 = new Todo ({name:'Laundry', dueDate: '02-30-2014', isComplete: false, tags:'cleaning, boring'});
      var t2 = new Todo ({name:'Grocery', dueDate: '02-29-2014', isComplete: false, tags:'shopping, logistics'});
      var t3 = new Todo ({name:'parachuting', dueDate: '02-28-2014', isComplete: false, tags:'entertainment, fun'});

      t1.save(function(){
        t2.save(function(){
          t3.save(function(){
            var id = t2._id.toString();
            Todo.findById(id, function(foundTodo){
              //expect(foundTodo).to.be.instanceof(Todo);
              expect(foundTodo._id.toString()).to.equal(id);
              done();
            });
          });
        });
      });
    });
  });

// ---------------------Delete---------------------------------------------- //
  describe('.deleteById', function(){
    it('should delete the todo by its id from the datbase', function(done){
      var t1 = new Todo ({name:'Laundry', dueDate: '02-30-2014', isComplete: false, tags:'cleaning, boring'});
      var t2 = new Todo ({name:'Grocery', dueDate: '02-29-2014', isComplete: false, tags:'shopping, logistics'});
      var t3 = new Todo ({name:'parachuting', dueDate: '02-28-2014', isComplete: false, tags:'entertainment, fun'});

      t1.save(function(){
        t2.save(function(){
          var id = t2._id.toString();
          t3.save(function(){
            Todo.deleteById(id, function(numberRemoved){
              Todo.findById(id, function(foundTodo){
                expect(numberRemoved).to.equal(1);
                expect(foundTodo).to.be.null;
                done();
              });
            });
          });
        });
      });
    });
  });

// -----------------Name--------------------------------------------------- //

  describe('.findByName', function(){
    it('should find the Todo by its name', function(done){
      var t1 = new Todo ({name:'Laundry', dueDate: '02-30-2014', isComplete: false, tags:'cleaning, boring'});
      var t2 = new Todo ({name:'Grocery', dueDate: '02-29-2014', isComplete: false, tags:'shopping, logistics'});
      var t3 = new Todo ({name:'parachuting', dueDate: '02-28-2014', isComplete: false, tags:'entertainment, fun'});

      t1.save(function(){
        t2.save(function(){
          t3.save(function(){
            Todo.findByName('Grocery', function(foundTodo){
              expect(foundTodo).to.be.instanceof(Todo);
              expect(foundTodo.name).to.equal('Grocery');
              done();
            });
          });
        });
      });
    });

    it('should not find the Todo by its name', function(done){
      Todo.findByName('Grocery', function(foundTodo){
        expect(foundTodo).to.be.null;
        done();
      });
    });
  });
// ----------------------------findByComplete-------------------------------------- //

  describe('.findByComplete', function(){
    it('should filter todos by either true of false', function(done){
      var t1 = new Todo({name:'Laundry', dueDate: '02-30-2014', isComplete: false, tags:'cleaning, boring', priority_id: priority_id});
      var t2 = new Todo({name:'Grocery', dueDate: '02-29-2014', isComplete: false, tags:'shopping, logistics', priority_id: priority_id});
      var t3 = new Todo({name:'parachuting', dueDate: '02-28-2014', isComplete: false, tags:'entertainment, fun', priority_id: priority_id});

      t1.save(function(){
        t2.save(function(){
          t3.save(function(){
            Todo.findByComplete(false, function(todos){
              expect(todos).to.have.length(3);
              expect(todos[0].name).to.equal('Laundry');
              done();
            });
          });
        });
      });
    });
  });
// --------------------------------------------------------------------------------- //

});


