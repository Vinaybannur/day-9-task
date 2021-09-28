const getBlogs = ()=> {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType = "json";
    xhr.onload = () => {
        const blogs = xhr.response;
        const allpopulation =blogs.filter((result)=>result.population<200000);
        console.log(allpopulation);

    };
    xhr.send();
};
getBlogs();