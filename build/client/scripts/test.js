(function() {
  var sayName;

  sayName = function(name) {
    console.log(name);
    return name;
  };

  sayName("Something");

}).call(this);
