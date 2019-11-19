let fDiv = document.getElementById("fDiv");
let textA = document.getElementById("textA");
let button1 = document.getElementById("firstB");
let sButtons = document.getElementById("sButtons");
let button4 = document.getElementById("fourthB");
let button2 = document.getElementById("secondB");
let styleDiv = document.getElementById("styleDiv");
let rd1 = document.getElementById("rd1");
let rd2 = document.getElementById("rd2");
let rd3 = document.getElementById("rd3");
let rd4 = document.getElementById("rd4");
let rd5 = document.getElementById("rd5");
let fontMono = document.getElementById("inputState");
let monosp = document.getElementById("fontF");
let defaultF = document.getElementById("defaulF");

button1.addEventListener("click", function() {
  textA.value = fDiv.innerHTML;
  textA.style.border = '20px solid lightgray';
  textA.style.backgroundColor = 'white';
  sButtons.style.display = "flex";
  styleDiv.style.display = "none";
  textA.style.display = "block";
})

button4.addEventListener("click", function() {
  fDiv.innerHTML = textA.value;
})

button2.addEventListener("click", function() {
  textA.style.display = "none";
  sButtons.style.display = "none";
  styleDiv.style.display = "block";
})

rd1.addEventListener("change", function() {
  fDiv.style.fontSize = "12px";
})
rd2.addEventListener("change", function() {
  fDiv.style.fontSize = "14px";
})
rd3.addEventListener("change", function() {
  fDiv.style.fontSize = "16px";
})
rd4.addEventListener("change", function() {
  fDiv.style.fontSize = "18px";
})
rd5.addEventListener("change", function() {
  fDiv.style.fontSize = "20px";
})

fontMono.addEventListener("change", function() {
  if (fontMono.value == "monospace") {
    fDiv.style.fontFamily = "monospace";
    cursiveCheck.checked = false;
  } else if (fontMono.value == "cursive") {
    fDiv.style.fontFamily = "cursive";
  } else {
    fDiv.style.fontFamily = "";
    cursiveCheck.checked = false;
  }
});

let textColorButton = document.getElementById("textColor");
let backColorButton = document.getElementById("backColor");
let textColorDiv = document.getElementById("tColorB");
let backColorDiv = document.getElementById("bColorB");
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
let d4 = document.getElementById("d4");
let d5 = document.getElementById("d5");
let d6 = document.getElementById("d6");
let d7 = document.getElementById("d7");
let d8 = document.getElementById("d8");
let d9 = document.getElementById("d9");

textColorButton.addEventListener("click", function() {
  textColorDiv.style.display = "flex";
  backColorDiv.style.display = "none";
});
backColorButton.addEventListener("click", function() {
  textColorDiv.style.display = "none";
  backColorDiv.style.display = "flex";
});
d1.addEventListener("click", function() {
  fDiv.style.color = "white";
  textColorDiv.style.display = 'none';
});
d2.addEventListener("click", function() {
  fDiv.style.color = "red";
  textColorDiv.style.display = 'none';
  
});
d3.addEventListener("click", function() {
  fDiv.style.color = "green";
  textColorDiv.style.display = 'none';
});
d4.addEventListener("click", function() {
  fDiv.style.color = "blue";
  textColorDiv.style.display = 'none';
});
d5.addEventListener("click", function() {
  fDiv.style.color = "purple";
  textColorDiv.style.display = 'none';
});
d6.addEventListener("click", function() {
  fDiv.style.color = "salmon";
  textColorDiv.style.display = 'none';
});
d7.addEventListener("click", function() {
  fDiv.style.color = "yellowgreen";
  textColorDiv.style.display = 'none';
});
d8.addEventListener("click", function() {
  fDiv.style.color = "aqua";
  textColorDiv.style.display = 'none';
});
d9.addEventListener("click", function() {
  fDiv.style.color = "gold";
  textColorDiv.style.display = 'none';
});

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");

b1.addEventListener("click", function() {
  fDiv.style.backgroundColor = "white";
  backColorDiv.style.display = 'none';
});
b2.addEventListener("click", function() {
  fDiv.style.backgroundColor = "red";
  backColorDiv.style.display = 'none';
});
b3.addEventListener("click", function() {
  fDiv.style.backgroundColor = "green";
  backColorDiv.style.display = 'none';
});
b4.addEventListener("click", function() {
  fDiv.style.backgroundColor = "blue";
  backColorDiv.style.display = 'none';
});
b5.addEventListener("click", function() {
  fDiv.style.backgroundColor = "purple";
  backColorDiv.style.display = 'none';
});
b6.addEventListener("click", function() {
  fDiv.style.backgroundColor = "salmon";
  backColorDiv.style.display = 'none';
});
b7.addEventListener("click", function() {
  fDiv.style.backgroundColor = "yellowgreen";
  backColorDiv.style.display = 'none';
});
b8.addEventListener("click", function() {
  fDiv.style.backgroundColor = "aqua";
  backColorDiv.style.display = 'none';
});
b9.addEventListener("click", function() {
  fDiv.style.backgroundColor = "gold";
  backColorDiv.style.display = 'none';
});

let boldCheck = document.getElementById("boldT");
let cursiveCheck = document.getElementById("cursiveT");

boldCheck.addEventListener("change", function() {
  if (this.checked) {
    fDiv.style.fontWeight = "bold";
  } else {
    fDiv.style.fontWeight = "";
  }
});
cursiveCheck.addEventListener("change", function() {
  if (this.checked) {
    fDiv.style.fontFamily = "cursive";
  } else {
    fDiv.style.fontFamily = "";
  }
});
let thirdB = document.getElementById('thirdB');
let addItem = document.getElementById('addItemDiv');
let sDiv = document.getElementById('sDiv');
thirdB.addEventListener('click', function(){
  fDiv.style.display = 'none';
  sDiv.style.display = 'none';
  addItem.style.display = 'block';
})

let tableVisible = document.getElementById('tableVisible');
let tableR = document.getElementById('tableR');

tableVisible.addEventListener('change', function() {
  tableR.style.display = 'block'
  addItem.style.height = '500px'
  listR.style.display = 'none'
})

let createTables = document.getElementById('createTables')
let tr = document.getElementById('countTr')
let td = document.getElementById('countTd')
let widthTd = document.getElementById('widthTd')
let heightTd = document.getElementById('heightTd')
let widthB = document.getElementById('widthB')
let typeB = document.getElementById('typeB')
let colorB = document.getElementById('colorB')
let mainDiv = document.getElementById('mainDiv')

createTables.addEventListener('click', function(){
  tableR.style.display = 'none'
  textA.value += `<table style="margin:20px">`
for(i=1;i<=tr.value;i++) {
  textA.value += `<tr>`
for (let j = 1; j <= td.value; j++) {
textA.value += `<td style="border:${widthB.value}px ${typeB.value} ${colorB.value}; width:${widthTd.value}px; height:${heightTd.value}px;">Table</td>`
}
textA.value +=`</tr>`
}
textA.value += `</table>`
fDiv.style.display = 'block';
sDiv.style.display = 'block';
addItem.style.display = 'none';
widthTd.value='';
heightTd.value='';
td.value = '';
tr.value = '';
});

listVisible = document.getElementById('listVisible');
listR = document.getElementById('listR');
createLists = document.getElementById('createLists')

listVisible.addEventListener('change', function() {
  listR.style.display = 'block'
  tableR.style.display = 'none'
})

let liCount = document.getElementById('liCount');
let markType = document.getElementById('markType');

createLists.addEventListener('click', function(){
  listR.style.display = 'none'
  textA.value += `<ul>`
  for(i=1;i<=liCount.value;i++) {
    textA.value +=`<li style="list-style: ${markType.value}">Item ${[i]}</li>`
  }
  textA.value +=`</ul>`
fDiv.style.display = 'block';
sDiv.style.display = 'block';
addItem.style.display = 'none';
markType.value='';
liCount.value='';
})

let backB = document.getElementById('backB')

backB.addEventListener('click', function() {
  fDiv.style.display = 'block';
sDiv.style.display = 'block';
addItem.style.display = 'none';
})
