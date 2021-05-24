export const order = (array)=>{
    let order = [];
    let resul = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(order.length < 2){
            order.push(element);
        } else
        {
            resul.push(order);
            order=[];
            order.push(element);
        }
    }
    if(order.length !== 0){
        resul.push(order)
    }
    return resul;
}
