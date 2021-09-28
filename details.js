const getBlogs = ()=> {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType = "json";
    xhr.onload = () => {
        const blogs = xhr.response;
      const details=  blogs.forEach(value => console.log("NAME:",value.name,"CAPITAL:",value.capital,"FLAG:",value.flag));
      
    };
    xhr.send();
};
getBlogs();