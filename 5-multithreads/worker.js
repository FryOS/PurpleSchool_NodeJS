const chunk = (array, size) => {
	const chunks = [];
	while (array.length) {
		chunks.push(array.splice(0, size));
	}
	return chunks;
};
process.env.UV_THREADPOOL_SIZE  = 8 ;

function main() {
    performance.mark("start");    
    const array = [];
    let count = 0;
    
    for (let i = 0; i <= 300000; i++) {
        array.push(i);          
    }

    const  newArr = chunk(array, process.env.UV_THREADPOOL_SIZE); 
    
    for (let j = 0; j < newArr.length; j++) {
        const element = newArr[j];
        for (let k = 0; k < element.length; k++) {
            if(element[k] % 3 === 0) {
                count++;
            }            
        }  
    }
    console.log(count);
    performance.mark("end");
    performance.measure("main", "start", "end");
    console.log(performance.getEntriesByName("main"));
}

main();



