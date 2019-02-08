/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/

//used to make colors change. could add border to make it understandable
//changed color to blue instead of white to make it visible
$(".hello").on("click",function ()
{
   $(this).css("background","blue");
});
/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */


//used to change height and width, can be done together in one line
//need to make it not flicker as it can be dangerous to people
$("h1:first").on("mouseover",function ()
{
   $(this).css("height","20px");
   $(this).css("width","20px");
});
$("h1:first").on("mouseleave",function ()
{
   $(this).css("height","100%").css("width","100%");

})

/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */


//used to add a period to it the sentence based on class
// i used first to make it only interact with the one sentence.
$(".hello:first").on("click",function ()
{
   $(this).append(".");
});