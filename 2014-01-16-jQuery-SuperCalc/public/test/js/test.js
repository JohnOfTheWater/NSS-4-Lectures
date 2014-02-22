test ('containsChar', function(){
  deepEqual(containsChar('mouse', 'u'), true, "whatever");
  deepEqual(containsChar('mouse', 'z'), false, "whatever");
});
