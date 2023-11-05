
//All code in a Jquery function so I dont have to put a $ in front of eveything 
$(function () {
  //Variable containing all timeblocks container
  const calendarContainer = $('#calendar');
  //creating a variable with just the current hour as a string
  const currentHour = dayjs().format('H')
  //taking the previous variable and converting it into a number
  const numHour = Number(currentHour)

  const timeBlock = $(".time-block")
  const todaysDate = $("#todaysDate")
  //setting the date at the top of the page
  const today = dayjs().format('MMMM DD, YYYY');
  todaysDate.text(today);


  //The following function loops through each elemnt in the time-block class so it can be compared to the time
  timeBlock.each(function() {
        // console.log(timeBlock)
        // console.log(Number(this.id))
        // console.log(currentHour)
        let timeId = parseInt($(this).attr("id"));//The id name of each block is converted into a number
        //The following compares the id of each block to the current hour
        if(timeId === numHour){
          $(this).addClass('present');
          $(this).removeClass('past');
        } else if (timeId < numHour) {
          $(this).addClass('past');
          $(this).removeClass('present');
          $(this).removeClass('future');
        } else {
          $(this).addClass('future');
          $(this).removeClass('present');
          $(this).removeClass('past');
        }
        //Theg following code takes the text from the Local Storage and displays it in the text area
        let localText = localStorage.getItem(timeId)
        if (localText) {
          $(this).children("textarea").val(localText);
        }
  });

  //Teh following creates an event for each button in the container and assigns a tag corresponding to each blcok
  $(calendarContainer).on("click", ".saveBtn", function(event) {
    event.preventDefault();
    let eventId = $(this).data("event")
    let eventText = $(this).siblings("textarea").val();

    localStorage.setItem(eventId, (eventText));//text and event tag is set to local storage

    })
    


});  



