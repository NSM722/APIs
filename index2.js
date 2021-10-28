console.log(alert('script started'));
let index1 = 7;
let index2 = 13;

let sum = index1 + index2;
console.log(`The sum of ${index1} and ${index2} is equal to ${sum}`);

let countries = ['Kenya', 'France', 'Nigeria', 'England', 'Kiribati'];
console.log(countries[4]);
console.log(".............")

for (country in countries) {
    console.log(countries[country])
};
console.log(".............")

for (country of countries) {
    console.log(country)
};

console.log(".............")

for (country of countries) {
    console.log(country)
    $("#countries").append(`<li>${country}</li>`)
};

// $("#countries").unhide(); jquery to hide or unhide data under the id=countries
$(function() {
    let val = $("a").attr("href");
    alert(val);
});

$(function() {
    let val = $("a").attr("href", "https://earth3dmap.com/")
    alert(val)
});

$(function() {
    $("table").removeAttr("table_layout"); 
});

$(function() {
    let statement = $("p").html();
    alert(statement);
    //can also use console.log(val)
});

/*$(function() {
    $("p").html("<b>These Motherfuckers</b>")
});*/

$(function() {
    alert($("#name").val())
});

$(function() {
    $("#countries").prepend("<li>Seychelles</li>")
    $("#countries").append("<li>Guinea</li>")

});

$(function() {
    $("#after_before").before("<b>testing this code</b>")
    $("#after_before").after("<b>end of the code</b>")
});