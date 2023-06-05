const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(sports) 
{
    var listSports = sports.filter(function (sports){
         return sports.like > 5 ;
    })  
    console.log(listSports);
}


// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]





