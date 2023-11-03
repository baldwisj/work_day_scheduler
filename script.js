// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  const seven = $("#7a");
  const eight = $("#8a");
  const nine = $("#9a");
  const ten = $("#10a");
  const eleven = $("#11a");
  const twelve = $("#12p");
  const one = $("#1p");
  const two = $("#2p");
  const three = $("#3p");
  const four = $("#4p");
  const five = $("#5p");

  const calendarContainer = $('#calendar');


  seven.text("7 am");
  eight.text("8 am");
  nine.text("9 am");
  ten.text("10 am");
  eleven.text("11 am");
  twelve.text("12 pm");
  one.text("1 pm");
  two.text("2 pm");
  three.text("3 pm");
  four.text("4 pm");
  five.text("5 pm");
  const currentHour = dayjs().format('H:00')
  console.log(currentHour);
  console.log(five.textContent)

  const timeBlock = $(".time-block")
  timeBlock.each(function() {
    // if(this.id === currentHour){
    //   this.addClass('.present')
    //   (this).removeClass('.past')
    // } else if (this.id < currentHour) {
    //   (this).addClass('.past')
    //   (this).removeClass('.present')
    //   (this).removeClass('.future')
    // } else {
    //   this.addClass('.future')
    //   this.removeClass('.present')
    //   this.removeClass('.past')
    console.log(timeBlock.id)
    }
  })
  // for (let i = 0; i <= 10; i++) {
  // let eachHour = dayjs('2023-11-03 07:00 am').add([i],'hour').format('h a');
  // console.log(eachHour)
  // const hourBlockDiv = $('<div>');
  // const hourBlockNumDiv = $('<div>');
  // const blockTextArea = $('<textarea>');
  // const saveBtn = $('<button>');
  // const saveI = $('<i>');

  // calendarContainer.append(hourBlockDiv);
  // hourBlockDiv.append(hourBlockNumDiv);
  // hourBlockDiv.append(blockTextArea);
  // hourBlockDiv.append(saveBtn);
  // saveBtn.append(saveI);

  // hourBlockDiv.addClass('row time-block');
  // hourBlockNumDiv.addClass('col-2 col-md-1 hour text-center py-3');
  // hourBlockNumDiv.attr('id', 'everyHour');
  // blockTextArea.addClass('col-8 col-md-10 description');
  // blockTextArea.attr('rows','3');
  // saveBtn.addClass('btn saveBtn col-2 col-md-1');
  // saveBtn.attr('aria-label','save');
  // saveI.addClass('fas fa-save');
  // saveI.attr('aria-hidden','true');
  
  // hourBlockNumDiv.text(eachHour);

  // const everyHour = $('everyHour');
  // everyHour.text(eachHour)

  



  // const currentDay = dayjs().format('MMMM D, YYYY');
  // $('#todaysDate').text(currentDay);

  
  // let currentHour = dayjs().format('h a');

  // if (currentHour === sevenAm) {
  //   seven.attr('class','present')
  // };

  // if (currentHour === eightAm) {
  //   eight.attr('class','present')
  // };

  // if (currentHour === nineAm) {
  //   nine.attr('class','present')
  // };

  // if (currentHour === twoPm) {
  //   two.attr('class','future')
  // };

  // if (currentHour < 7) {
  //  .addClass('future')
  // } else {
  //   addClass('present')
  // }

});  
const sevenAm = (dayjs('2023-11-03 07:00 am').format('h a'));

$('#7a').text(sevenAm);


console.log(sevenAm);
