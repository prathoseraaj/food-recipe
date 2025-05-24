const fetchcategory = async() =>{
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();
    console.log(data.categories);
    return data.categories;
}

fetchcategory();