$("input[class*='datepicker-']").pickadate({
    selectMonths: true,
    selectYears: 100,
    format: 'dd/mmm/yyyy',    // Canadian date format, eh.
    onSet: function(obj){
      let thisPicker = $(this)[0].$node;    // Needed to hack to get the thing I was after.
  
      // Check if this is the start date
      let classes = thisPicker.attr("class");
      if (classes === undefined || classes.length === 0 || classes.indexOf("datepicker-start") < 0){
        return;
      }
  
      // .datepicker-start must be wrapped in a div.input-field element (in this example), and
      // .datepicker-end must be in the next div.input-field.  Change selectors for your conditions.
      let parent1 = thisPicker.closest("div.input-field");    // This picker's parent
      let parent2 = parent1.next("div.input-field");          // Next picker's parent
      let picker2 = parent2.find(".datepicker-end");          // Matching 'end' picker
      
      // Set end picker minimum date, or whatever you need.
      if(obj.select){
        let dt = new Date(obj.select);
        picker2.pickadate('picker').set('min', dt);
      }
  
      if(obj.hasOwnProperty('clear')){
        picker2.pickadate('picker').set('min', false);
      }
    }
  });
