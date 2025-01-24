const one = ["Collection/CollectionImages/NorborneUC.png", "Norborne Portrait","Portrait of a young girl. Printed in Norborne, Missouri."]
const two = ["Collection/CollectionImages/manilaUC.png","Manila Group Photo","\"Clerical force of Supreme Court, Manila, Philippines\"", "This photo was most likely taken when the USA was in occupation of the Philippines. Dated to be taken between 1901-1946."]
const three = ["Collection/CollectionImages/MilitaryUC.png","Military Event","This photo captures a USA military event. The righter most person may be a pilot due to the pin he wears."]
const four = ["Collection/CollectionImages/WJUC.png", "William and Jennie Klinger","\"William and Jennie Klinger Pinewood Minnesota.\" In different handwriting: \"Aunt Millie\"", "Left is Jennie and right is William. This was a marriage photograph taken in 1930. It can be inferred that the \"Aunt Millie\" writing is referring to Jennie. Jennie and William once lived together on a farm in Minnesota. William was reported to live to be over 100 years old", "Jennie's mother was named Mary Johnson Burgeson."]
const five = ["Collection/CollectionImages/1958UC.png","1958 Faimly Portrait","A mother, father, and their two sons standing in front of their home. Printed or photographed June 14, 1958."]
const six = ["Collection/CollectionImages/1959UC.png","1959 Woman","A photo of a woman in what could be their home. Printed or photographed in December of 1959."]
const seven = ["Collection/CollectionImages/MilwaukeeUC.png","Milwaukee Portrait","Portrait of a young person. Printed in Milwaukee, Wisconsin."]
const eight = ["Collection/CollectionImages/GrandfatherUC.png","Great-Great-Great Grandfather","\"George Thomas (Lee) Williams. Jena Christian's father. Harmon Ainsworth's grandfather.\"", "George Williams is the man shown in the portrait. Harmon Ainsworth is my mom's grandfather. This makes George my great-great-great grandfather.", "For some reason, this photo was edited. Notable parts are the hands, vase, and bow tie."]
const nine = ["Collection/CollectionImages/GrandmotherUC.png","Great-Great Grandmother","This is a portrait of Maud Sampley. She is my mothers great-grandmother, making her my great-great grandmother."]
const ten = ["Collection/CollectionImages/SWUC.png","Sophia and William","\"William William + Sophia\"", "The man is William and the woman is Sophia. It can be assumed that they are related in one way or another.", "William and Sophia are supposedly related to my mom's side of the family, but we don't quite know how."]

const stuff = [one, two, three, four, five, six, seven, eight, nine, ten]

function description(image) {

    var popup = document.getElementById("popup");

    var num = image - 1; 

    var list;

    for (let i = 0; i < 10 ; i++) {
      list = stuff[num];
    }

    while (popup.hasChildNodes()) {
      popup.removeChild(popup.firstChild);
    }

    const img = document.createElement("img");
    img.src = list[0];
    img.height = 300;
    popup.appendChild(img);



    const title = document.createElement("h1");
    const nodeTitle = document.createTextNode(list[1]);
    title.appendChild(nodeTitle);
    popup.appendChild(title);

    for (let i = 2; i < list.length; i++){
      var text = document.createElement("p");
      var nodeText = document.createTextNode(list[i]);
      text.appendChild(nodeText);
      popup.appendChild(text);
    }

    popup.style.visibility="visible";

    document.addEventListener("click", toggel, 1000);
    
  }


function toggel() {
  var popup = document.getElementById("popup");
  popup.style.visibility='hidden'; 
}

