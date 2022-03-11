// selector variable
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')


// Get your own free OWM API key at https://www.openweathermap.org/appid - please do not re-use mine!
// You don't need an API key for this to work at the moment, but this will change eventually.
apik = "3045dd712ffe6e702e3245525ac7fa38"
//kelvin to celcious
function convertion(val){
    return (val - 273).toFixed(2)
}
//fetch
    btn.addEventListener('click', function(){

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())
        //  .then(data => console.log(data))
        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']

            city.innerHTML=`City: ${nameval}`
            temp.innerHTML = `Temperature: ${ convertion(tempature)} C`
            description.innerHTML = `Conditions: ${descrip}`
            wind.innerHTML = `Wind Speed: ${wndspd} km/h`

        })
        .catch(err => alert('You entered Wrong city name'))
    })
// // const get_meal_btn = document.getElementById('get_meal');
// // const meal_container = document.getElementById('meal');

// // get_meal_btn.addEventListener('click', () => {
// // fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+inputval.value')
// // .then(res => res.json())
// // .then(res => {
// // createMeal(res.meals[0]);
// // });
// // });

// // const createMeal = (meal) => {
// // const ingredients = [];
// // // Get all ingredients from the object. Up to 20
// // for(let i=1; i<=20; i++) {
// // if(meal[`strIngredient${i}`]) {
// // ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
// // } else {
// // // Stop if no more ingredients
// // break;
// // }
// // }

// // const newInnerHTML = `
// // <div class="row">
// // <div class="columns five">
// // <img src="${meal.strMealThumb}" alt="Meal Image">
// // ${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
// // ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
// // ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
// // <h5>Ingredients:</h5>
// // <ul>
// // ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
// // </ul>
// // </div>
// // <div class="columns seven">
// // <h4>${meal.strMeal}</h4>
// // <p>${meal.strInstructions}</p>
// // </div>
// // </div>
// // ${meal.strYoutube ? `
// // <div class="row">
// // <h5>Video Recipe</h5>
// // <div class="videoWrapper">
// // <iframe width="420" height="315"
// // src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
// // </iframe>
// // </div>
// // </div>` : ''}
// // `;

// // meal_container.innerHTML = newInnerHTML;
// // }






// // selector variable
// var inputval = document.querySelector('#cityinput')
// var btn = document.querySelector('#add');
// var Meal = document.querySelector('#cityoutput')
// var Area = document.querySelector('#description')
// var Ingredients = document.querySelector('#temp')
// var Description = document.querySelector('#wind')
// function ing(meal) {
//       const ingredients = [];
//     // Get all ingredients from the object. Up to 20
//     for(let i=1; i<=20; i++) {
//     if(meal[`strIngredient${i}`]) {
//     ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
//     } else {
//     // Stop if no more ingredients
//     break;
//     }
//     }


// // Get your own free OWM API key at https://www.openweathermap.org/appid - please do not re-use mine!
// // You don't need an API key for this to work at the moment, but this will change eventually.


// //fetch
//     btn.addEventListener('click', function(){

//         fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+inputval.value)
//         .then(res => res.json())
//          .then(data => console.log(data))
//         // .then(data => {
//         //     var categoryDATA= data['name']
//             //    var AreaDATA = data['main']['temp']
//         //     var IngredientsDATA = data['weather']['0']['description']
//         //     var DescriptionDATA= data['main']['temp']
//         //    

//         //     Meal.innerHTML=`strCategory: ${category}`
//         //     Area.innerHTML = `: ${ convertion(tempature)} C`
//         //     Ingredients.innerHTML = `Conditions: ${descrip}`
//         //     Description.innerHTML = `Wind Speed: ${wndspd} km/h`

//         // })
//         .catch(err => alert('You entered Wrong city name'))
//     })