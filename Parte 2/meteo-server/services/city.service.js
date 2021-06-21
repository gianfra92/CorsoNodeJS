const cityList = [];

const getList = () => {
    return cityList;
}

const addCity = (data) => {
    if (cityList.findIndex(el => el.id === data.id)>0)
        return;
    return cityList.push(data);
}

const deleteCity = (id) => {
    if (id=== undefined)
        throw {message:'Cannot delete city without id', code:404};
    const index = cityList.findIndex(el => el.id==id);
    console.log(index,id)
    if (index>0){
        return cityList.splice(index,1);
    }else
        throw{message:'No city found', code:404};
}

module.exports = {
    getList,
    addCity,
    deleteCity
}

