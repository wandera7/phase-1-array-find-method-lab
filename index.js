// code your solution here

function superbowlWin(array){
    const winner=array.find((arr)=>arr.result==='W');
    return winner?winner.year:undefined;  
    
}