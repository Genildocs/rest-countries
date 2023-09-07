const countries = [
    {id: 1, country : 'Brazil', capital: 'Brasilia'},
    {id: 2, country : 'Mauritania', capital: 'Nouakchott'},
    {id: 3, country : 'Eritrea', capital: 'Asmara'},
    {id: 4, country : 'Puerto Rico', capital: 'San Juan'},
]

const search = [];

const handleSearch = (s) =>{
    const filter = countries.filter((item)=>{
        return item.country.includes(s)
    })

    search.push(filter)
}

handleSearch('Puerto Rico')

console.log(search)