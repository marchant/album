montageDefine("d1a4ba1","deserialization/interpreter",{dependencies:["./reviver","./context"],factory:function(e,t){(function(t){function n(){}var i=e("./reviver").Reviver,r=e("./context").Context;Object.defineProperties(n.prototype,{instantiate:{value:function(e,t){var n=new i,a=new r(e,n,t);return a.getObjects()}}}),t.Interpreter=n})(t)}});