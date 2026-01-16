const biriyaniKhur=['mora','jora','khara','juja','mora','abul','babyl','kabol'];

function noduplicate(arry){
    const unique=[]
    for(man of arry){
        if(unique.includes(man)===false){
            unique.push(man)
        }
    }
    return unique;


}
const unique=noduplicate(biriyaniKhur)