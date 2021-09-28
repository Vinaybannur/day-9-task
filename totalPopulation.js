const getBlogs = ()=> {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType = "json";
    xhr.onload = () => {
        const blogs = xhr.response;
        const totalPopulation = blogs.reduce((sum,curr)=>sum+curr.population,0);
        console.log("TOTAL_POPULATION:",totalPopulation);
    };
    xhr.send();
};
getBlogs();