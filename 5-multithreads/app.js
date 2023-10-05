const chunk = (array, size) => {
	const chunks = [];
	while (array.length) {
		chunks.push(array.splice(0, size));
	}
	return chunks;
};



function main() {
    performance.mark("start");
    const array = [];
    let count = 0;
    
    for (let i = 0; i <= 300000; i++) {
        array.push(i);
        
        if(array[i] % 3 === 0) {
            count++;
        }    
    }
    
    console.log(count);
    performance.mark("end");
    performance.measure("main", "start", "end");
    console.log(performance.getEntriesByName("main"));
}

main();

