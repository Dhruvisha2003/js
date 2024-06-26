let result;

function calc(n1,n2,operator){
    switch(operator){
        case '+' : {
            result = n1 + n2;
            break;
        }
        case '-' : {
            result = n1 - n2;
            break;
        }
        case '*' : {
            result = n1 * n2;
            break;
        }
        case '/' : {
            result = n1 / n2;
            break;
        }
        default : {
            result = 'Invalid Operator';
        }
    }
    console.log(result);
    return result;
}

calc(5,9,'#')