// 1. How to compare two JSON have the same properties without order?
//     a. var obj1 = { name: "Person 1", age:5 };
//     b. var obj2 = { age:5, name: "Person 1" };
....................................................................
// 1st method:
...............
// CODE:
                        var obj1 = { name: "Person 1", age:5 };
                        var obj2 = { age:5, name: "Person 1" };

                        function compare(object1,object2)
                        {
                        Temp=object1.name===object2.name && object1.age===object2.age;
                        if (Temp==true)
                        console.log("The objects obj1 & obj2 have same properties");
                        else
                        console.log("Properties of objects obj1 & obj2 are not same");
                        }
                        compare(obj1,obj2);

// OUTPUT: 
                        The objects obj1 & obj2 have same properties
 
// 2ND METHOD:
..............
// CODE:
                         var obj1 = { name: "Person 1", age:5 ,place: "kerala"};
                         var obj2 = { age:5, name: "Person 1" ,place:"kerala"};
                         var compare=(x,y)=>
                         { 
                          var a=Object.keys(obj1);   //keys of obj1  [ 'name', 'age', 'place' ]
                          var b=Object.keys(obj2);   //keys of obj2  [ 'age', 'name', 'place' ]
                          if(a.length==b.length)
                          {
                         {for(i in x)
                         {if(x[i]==y[i])
                         var  temp=true;
                          else
                          temp=false;
                          }}
                          return temp;}
                          else 
                          return "Not possible to compare these objects";
                          }
                          console.log(compare(obj1,obj2));

// OUTPUT:
                               true
................................................................................................................
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

...................................................................................
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
