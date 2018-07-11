//Packet count problem

const packets = [12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50];
const studentCount = 7;

let difference = ((packets, studentCount) => {
    const subsetCount = packets.length - studentCount + 1;      //how many maximun subsets can be made

    if(packets.length === 0){
        return 'Ohh !! There are no packets.';
    }

    if(packets.length < studentCount){
        return 'Oops !! Please get more packets.';
    }

    if(studentCount === 1){
        return 'Ahh !! There is only one student.';
    }

    let sortedPackets = packets.sort((a, b) => {
        return a - b;       //to avoid lexical sorting use number sort ago
    });

    let diff = Infinity;

    for(let i = 0; i < subsetCount; i++){
        let subset = sortedPackets.slice(i, studentCount + i);
        let currentDiff = Math.max(...subset) - Math.min(...subset);
        if(currentDiff <= diff){
            diff = currentDiff;     //update the difference if current difference is less
        }
    }

    return diff;

})(packets, studentCount);

console.log("Minimum difference is : ", difference);
