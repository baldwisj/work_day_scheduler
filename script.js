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
  const calendarContainer = $('#calendar');
  
  const currentHour = dayjs().format('H')
  const numHour = Number(currentHour)
  const timeBlock = $(".time-block")
  timeBlock.each(function() {
    // console.log(timeBlock)
    // console.log(Number(this.id))
    // console.log(currentHour)
    if(Number(this.id) === numHour){
      timeBlock.addClass('present');
      timeBlock.removeClass('past');
    } else if (Number(this.id) < numHour) {
      timeBlock.addClass('past');
      timeBlock.removeClass('present');
      timeBlock.removeClass('future');
    } else {
      timeBlock.addClass('future');
      timeBlock.removeClass('present');
      timeBlock.removeClass('past');
    }}
  );

  // timeBlock.each(function() {
  //   let thisHour = this.id
  //   (this).has(thisHour === numHour).addClass(present);   
  //   }
  // )

  // timeBlock.each(function() {
  //   // console.log(timeBlock)
  //   // console.log(Number(this.id))
  //   let thisBlock = this.id
  //   console.log(thisblock)
  //   // console.log(currentHour)
  //   if(Number(this.id) === numHour){
  //     thisblock.addClass('present')
  //     thisblock.removeClass('past')
  //   } else if (Number(this.id) < numHour) {
  //     thisblock.addClass('past')
  //     thisblock.removeClass('present')
  //     thisblock.removeClass('future')
  //   } else {
  //     thisblock.addClass('future')
  //     thisblock.removeClass('present')
  //     thisblock.removeClass('past')
  //   }}
  // )

  // timeBlock.each(function() {
  //   // console.log(timeBlock)
  //   // console.log(Number(this.id))
  //   // console.log(currentHour)
  //   if(Number(this.id) === numHour){
  //     this.id.addClass('present')
  //     this.id.removeClass('past')
  //   } else if (Number(this.id) < numHour) {
  //     tthis.id.addClass('past')
  //     this.id.removeClass('present')
  //     this.id.removeClass('future')
  //   } else {
  //     this.id.addClass('future')
  //     this.id.removeClass('present')
  //     this.id.removeClass('past')
  //   }}
  // )

  // timeBlock.each(function() {
  //   // console.log(timeBlock)
  //   // console.log(Number(this.id))
  //   // console.log(currentHour)
  //   if(Number(this.id) === numHour){
  //     timeBlock.id.addClass('present')
  //     timeBlock.id.removeClass('past')
  //   } else if (Number(this.id) < numHour) {
  //     timeBlock.id.addClass('past')
  //     timeBlock.id.removeClass('present')
  //     timeBlock.id.removeClass('future')
  //   } else {
  //     timeBlock.id.addClass('future')
  //     timeBlock.id.removeClass('present')
  //     timeBlock.id.removeClass('past')
  //   }}
  // )

});  



