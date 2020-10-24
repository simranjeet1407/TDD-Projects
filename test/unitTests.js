const chai = require('chai');
const assert = chai.assert;
const functions = require('../functions');

describe('sum', function(){
    it('returns 8 when adding 4 and 4', function(){  
        assert.equal(functions.sum(4,4),8);
    }); 

    it('returns 0 when adding 6 and -6', function(){  
      assert.equal(functions.sum(6,-6),0);
  });

  it('returns 20.1 when adding 19 and 1.1', function(){  
    assert.equal(functions.sum(19,1.1),20.1);
});
});

describe('product', function(){
  it('returns 10 when multiplying 2 and 5', function(){  
      assert.equal(functions.product(2,5),10);
  }); 

  it('returns 0 when multiplying 0 and 3', function(){  
    assert.equal(functions.product(0,3),0);
});

it('returns 1000 when multiplying 100 and 10', function(){  
  assert.equal(functions.product(100,10),1000); 
});
});

describe('min', function(){
  it('should return the 5 when both numbers are same', function(){  
      assert.equal(functions.min(5,5),5);
  }); 

  it('should return the 4 when compare 4 and 6 ', function(){  
    assert.equal(functions.min(6,4),4);
});

it('should return the -2 when compare 10 and -2', function(){  
  assert.equal(functions.min(10,-2),-2); 
});
});

describe('max', function(){
  it('should return the 8 when both numbers are same', function(){  
      assert.equal(functions.max(8,8),8);
  }); 

  it('should return the 10 when compare 9 and 10 ', function(){  
    assert.equal(functions.max(9,10),10);
});

it('should return the 7 when compare 7 and -5', function(){  
  assert.equal(functions.max(7,-5),7); 
});
});

describe('head', function(){
  it('should return null when the provided array is empty []', function(){  
    let arr = [];
    assert.isNull(functions.head(arr));
  }); 

  it('should return 6 when the provided array is [6,7,8]', function(){  
    let arr = [6,7,8];
    assert.equal(functions.head(arr),6);
});

it('should return how are you when the provided array is [how are you]', function(){  
  let arr = ['how are you'];
  assert.equal(functions.head(arr), 'how are you');
});
});

describe('tail', function(){
  it('should return null when the provided array is empty []', function(){  
    let arr = [];
      assert.isNull(functions.tail(arr));
  }); 

  it('should return 8 when the provided array is [6,7,8] ', function(){  
    let arr = [6,7,8];
    assert.equal(functions.tail(arr), 8);
});

it('should return I am good if the provided array is [I am good]', function(){  
  let arr = ['I am good'];
  assert.equal(functions.tail(arr),  'I am good'); 
});
});

describe('mid', function(){
it('should return null when the provided array is empty [] ' , function(){
let arr = [];
  assert.isNull(functions.mid(arr)); 
});

it('should return 2 when the provided array is [4,2,8] ', function(){  
  let arr = [4,2,8];
  assert.equal(functions.mid(arr), 2);
});

it('should return ["smith","brown"] if the provided array is ["john", "smith", "brown", "victoria"]' , function(){  
let arr = ["john", "smith", "brown", "victoria"];
assert.deepEqual(functions.mid(arr), ["smith","brown"]); 
});
});

describe('total', function(){
  it('should return 0 when the provided array is empty []', function(){  
    let arr = [];
      assert.deepEqual(functions.total(arr),0);
  }); 

  it('should return 30 when the provided array is [4,8,18] ', function(){  
    let arr = [4,8,18];
    assert.equal(functions.total(arr), 30);
});

it('should return 25 when the provided array is [5,-5,25] ', function(){  
  let arr = [5,-5,25];
  assert.equal(functions.total(arr), 25);
});
});

describe('average', function(){
  it('should return Null when the provided array is empty []', function(){  
    let arr = [];
      assert.isNull(functions.average(arr));
  }); 

  it('should return 7.33333333 when the provided array is [8,5,9] ', function(){  
    let arr = [8,5,9];
    assert.notDeepEqual(functions.average(arr), 7.33333333);
});

it('should return 3 when the provided array is [8,0,-3,7] ', function(){  
  let arr = [8,0,-3,7];
  assert.equal(functions.average(arr), 3);
});
});

describe('smallest', function(){
  it('should return Null when the provided array is empty []', function(){  
    let arr = [];
      assert.isNull(functions.smallest(arr));
  }); 

  it('should return 10 when the provided array is [20,10,50] ', function(){  
    let arr = [20,10,50];
    assert.equal(functions.smallest(arr), 10);
});

it('should return -5 when the provided array is [-5,0,8] ', function(){  
  let arr = [-5,0,8];
  assert.equal(functions.smallest(arr), -5);
});
});

describe('largest', function(){
  it('should return Null when the provided array is empty []', function(){  
    let arr = [];
      assert.isNull(functions.largest(arr));
  }); 

  it('should return 50 when the provided array is [10,50,20] ', function(){  
    let arr = [10,50,20];
    assert.equal(functions.largest(arr), 50);
});

it('should return 8 when the provided array is [-5,0,8] ', function(){  
  let arr = [-5,0,8];
  assert.equal(functions.largest(arr), 8);
});
});

describe('merge', function(){
  it('should returns Null when both the provided arrays are empty []', function(){  
    let arr1 = [];
    let arr2 = [];
      assert.isNull(functions.merge(arr1,arr2));
  }); 
  
  it('should returns [1,3,0,9] when the arr1 is [1,0] and arr2 is [3,9]', function(){  
    let arr1 = [1,0];
    let arr2 = [3,9];
    assert.deepEqual(functions.merge(arr1,arr2), [1,3,0,9]);
  });

  it('should returns [5,9] when the arr1 is empty [] and arr2 is [5,9] ', function(){  
    let arr1 = [];
    let arr2 = [5,9];
    assert.deepEqual(functions.merge(arr1,arr2), [5,9]);
  });
  });

