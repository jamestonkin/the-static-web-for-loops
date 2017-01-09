//count from 5 to 115 in increments of 10
for (var countadd = 5; countadd < 120; countadd += 10) {
  console.log(countadd);
}

// //divide 4096 by 2 until you reach and print 1 in console
for (var countdiv = 4096; countdiv > .5; countdiv /= 2) {
  console.log(countdiv);
}

//Use for loop to print Presidents in order
// variable is an array of each president in order
var presidents = [
  'Washington',
  'J. Adams',
  'Jefferson',
  'Madison',
  'Monroe',
  'J.Q. Adams',
  'Jackson',
  'Van Buren',
  'W. H. Harrison',
  'Tyler',
  'Polk',
  'Taylor',
  'Fillmore',
  'Pierce',
  'Buchanon',
  'Lincoln',
  'A. Johnson',
  'Grant',
  'Hayes',
  'Garfield',
  'Arthur',
  'Cleveland',
  'B. Harrison',
  'Cleveland',
  'McKinley',
  'T. Roosevelt',
  'Taft',
  'Wilson',
  'Harding',
  'Coolidge',
  'Hoover',
  'F. D. Roosevelt',
  'Truman',
  'Eisenhower',
  'Kennedy',
  'L. B. Johnson',
  'Nixon',
  'Ford',
  'Carter',
  'Reagan',
  'G. H. W. Bush',
  'Clinton',
  'G. W. Bush',
  'Obama'
]
//for loop to run through each president and print to console log in order with concantation
for (var i = 0; i < presidents.length; i++) {
  console.log('President #' + (i + 1) +' was ' + presidents[i])
}

//pull key names from array and print to console using for..in loops
var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var key in antSpecies) {
  console.log(key);
}
