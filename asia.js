const getBlogs = ()=> {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType = "json";
    xhr.onload = () => {
        const blogs = xhr.response;
        const asia =blogs.filter((continent)=>continent.region=="Asia");
        console.log(asia);

    };
    xhr.send();
};
getBlogs();