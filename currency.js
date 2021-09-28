const getBlogs = ()=> {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType = "json";
    xhr.onload = () => {
        const blogs = xhr.response;
        
    
        
        const currency =blogs.filter((result)=>result.currencies[0].code=="USD");
        console.log(currency);

        

    };
    xhr.send();
};
getBlogs();