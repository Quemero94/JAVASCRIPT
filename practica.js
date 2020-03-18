"use strict";

var variable = 2;
var variable2;

if (variable == 1) {
    console.log("es 1");
} else if (variable == 2) {
    console.log("es 2");
} else if (variable == 3) {
    console.log("es 3");
} else {
    console.log("No es ninguno");
}

switch (variable) {
    case 0:
        variable2 = "0";
        break;
    case 1:
        variable2 = "1";
        break;
    case 2:
        variable2 = "2";
        break;
}
document.write(variable2);

//--------------------------------------

var variable3 = 1;

while (variable3 <= 5) {
    document.write("<br>" + variable3);
    variable3++;
}

for (var i = 1; i <= 5; i++) {
    console.log(i);
}

document.write("<br>");
for (var e = 1; e <= 10; e++) {
    if (e == 5) {
        document.write("<br> ACA ESTA EL '5'");
        continue;
    }
    document.write("<br>" + e);
}

var variable4 = 1;

do {
    console.log(variable4);
    variable4++;
} while (variable4 <= 10);

//------------------------------------------