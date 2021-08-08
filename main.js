var updatedimage=[image];
var updatedname=["Suman Karmakar","Sutapa Karmakar","Bineet Karmakar","Samhita Karmakar","Monika Mondal"];
var i=0;
function nextslide(){
  document.getElementById("album").src=image[i];
  i++;
  if(i==6)
    {
      i=0;
    }
}
