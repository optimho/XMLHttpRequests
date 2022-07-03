//npi install axios

// import axios from "axios";

// axios.get('https://swapi.dev/api/planets/')
//     .then(({data})=>{
//         // console.log(data)
//         for (let planet of data.results){
//             console.log(planet.name)
//         }
//
//         return  axios.get(data.next)
//
//     })
//     .then(({data}) => {
//         // console.log(data)
//         for (let planet of data.results) {
//             console.log(planet.name)
//         }
// }).catch((err)=> {
//    console.log('There is a problem',err)
// })
//

const fetchNextPlanet = (url='https://swapi.dev/api/planets/') =>{
    console.log()
    return axios.get (url)
}

const printPlanets = ({data}) =>{
    console.log(data);
    for (let planet of data.results){
        console.log(planet.name)
    }
    return Promise.resolve(data.next)
}

fetchNextPlanet()
.then(printPlanets)
.then(fetchNextPlanet)
.then(printPlanets)
.catch((err)=>{
    console.log('There is a problem', err)
})
