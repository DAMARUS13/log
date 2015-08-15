/**
 * Created by kusirus on 15/08/15.
 */

var log = (function(){

    function test_t(t){
        return t == null ? 'Message auto !' : t;
    }

    this.c = function(t, f){
        if(typeof t == "object"){
            console.table(t, f);
        }
        else if(typeof t == "string"){
            console.log("%c" + t, "background-color:yellow")
        }else{
            console.log(test_t(t));
        }
    };

    this.a = function(t){
        alert(test_t(t));
    };

    return this;
})();
