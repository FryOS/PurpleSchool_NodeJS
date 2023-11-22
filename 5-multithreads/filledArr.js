// module.exports =  function filledArray(bigNumber) {
//     const array = [];
//     let count = 0;
    
//     for (let i = 0; i <= bigNumber; i++) {
//         array.push(i);
        
//         if(array[i] % 3 === 0) {
//             count++;
//         }    
//     }
// }

module.exports =  function filledArray(array) {
    // const array = [];
    // let count = 0;
    
    for (let i = 0; i <= array.length; i++) {                
        if(array[i] % 3 === 0) {
            array.push(i);
        }    
    }
    return array;
}