function totalNeedWood(chair,table,bed){
    const parchairWood=3;
    const partableWood=10;
    const parbedWood=50;
    

    const needChairWood=chair*parchairWood;
    const needTableWood=table*partableWood;
    const needBedwood=parbedWood*bed;

    const totalWood=needBedwood+needChairWood+needTableWood
    return(totalWood)
}


const wood= totalNeedWood(1,2,3);
console.log(wood)