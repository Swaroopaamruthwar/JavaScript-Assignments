function CreateObject(arr) {
    // Write your code here
    obj={};
    arr.forEach((element,index,arr)=>{
        if(index%2===0){
            obj[element]=arr[index+1];
        }
    });
    return obj;
}

module.exports = CreateObject;
