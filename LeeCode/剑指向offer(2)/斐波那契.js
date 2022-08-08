var fb = function(n) {

    if(n==0){
        return 0;
    }else if(n==1){
        return 1;
    }else{
        return fb(n-1)+fb(n-2)
    }
};
console.log(fb(44)%(1e9+7))
