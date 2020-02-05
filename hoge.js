var result = 0;

/*
//A案
for (let i = 1; i <= 120; i++) {
  result = i % 30 === 0 && "FizzBuzzPezz " || 
                i % 6 === 0 && "FizzBuzz " ||
                i % 10 === 0 && "FizzPezz " ||
                i % 15 === 0 && "BuzzPezz " || 
                i % 2 === 0 && "Fizz " ||
                i % 3 === 0 && "Buzz " ||
                i % 5 === 0 && "Pezz " ||
                i+ " ";
  document.write("<p>" + i + " " + result + "</p>");
}
*/



//B案
for (let i = 1; i <= 120; i++) {
  const hoge = document.getElementById("hoge");
  const para = document.createElement("p");

  result = i % 30 === 0 && "FizzBuzzPezz " || 
                i % 6 === 0 && "FizzBuzz " ||
                i % 10 === 0 && "FizzPezz " ||
                i % 15 === 0 && "BuzzPezz " || 
                i % 2 === 0 && "Fizz " ||
                i % 3 === 0 && "Buzz " ||
                i % 5 === 0 && "Pezz " ||
                i+ " ";
  para.innerText = i + " " + result;
  hoge.appendChild(para);
}

//*/
