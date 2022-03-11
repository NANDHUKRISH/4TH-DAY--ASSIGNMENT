// 2.Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
 
// CODE:
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function()
{
  var data=JSON.parse(request.response);
  console.log(data);
  for(let i=0;i<data.length;i++)
  {console.log("Flag "+data[i].flag);
  }
}

// OUTPUT:
Flag 🇦🇽 
Flag 🇬🇫 
Flag 🇰🇮 
Flag 🇧🇯 


// 3.Use the same rest countries and print all countries name, region, sub region and population

// CODE:

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function()
{
  var data=JSON.parse(request.response);
  console.log(data);
  for(let i=0;i<data.length;i++)
  {console.log("Country name IS ",data[i].name["official"] ," Region ", data[i].region ,"SUB REGION " , data[i].subregion , " POPULATION " ,data[i].population) ;
  
  }
}

// OUTPUT:

Country name IS  Åland Islands  Region  Europe SUB REGION  Northern Europe  POPULATION  29458
Country name IS  Guiana  Region  Americas SUB REGION  South America  POPULATION  254541 
Country name IS  Independent and Sovereign Republic of Kiribati  Region  Oceania SUB REGION  Micronesia  POPULATION  119446