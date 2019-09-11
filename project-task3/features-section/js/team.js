$(".sideNav i").click(function(){
    $(".sideNavOpt").toggle(400);
     $(".instruction").toggle();
    $(".addNote, .delNote ").toggle();
})
/////////////////////////////////////////////////////////////

$(".bgCol ul li").eq(1).css("backgroundColor","blue")
$(".bgCol ul li").eq(2).css("backgroundColor","yellow")
$(".bgCol ul li").eq(3).css("backgroundColor","green")

$(".fontCol ul li").eq(0).css("backgroundColor","black")
$(".fontCol ul li").eq(1).css("backgroundColor","gray")
$(".fontCol ul li").eq(2).css("backgroundColor","white")
$(".fontCol ul li").eq(3).css("backgroundColor","firebrick")

/* Add note *///////////////////////////////////////////////


/*
let notes = [];

$(".addNote i ").click(function (){

    let noty=` <div class="col-md-3 cont">
                <textarea cols="20" rows="6"></textarea><button class="btn myDel">
  <i class="far fa-times-circle"></i></button>
                </div> `;
    notes.push(noty);

    for(var i=0 ; i<notes.length;i++)
{
    if($("textarea").eq(i).val()==undefined)
        {
            $("textarea").eq(i).val()=="";
 notes[i]= `<div class="col-md-3 cont">
<textarea cols="20" rows="6"></textarea><button class="btn myDel" onclick="del(`+i+`)"><i class="far fa-times-circle"></i></button>
            </div>`
        }
    else
        {
    notes[i]= `<div class="col-md-3 cont">
 <textarea cols="20" rows="6">`+($("textarea").eq(i).val())+`</textarea><button class="btn myDel" onclick="del(`+i+`)"><i class="far fa-times-circle"></i></button>                  </div>`
    
        }  

}
    $("#myNote").html(notes)
    
} )

function del(i)
{
    notes.splice(i,1)
    for(var i=0 ; i<notes.length;i++)
{
    if($("textarea").eq(i).val()==undefined)
        {
            $("textarea").eq(i).val()=="";
 notes[i]= `<div class="col-md-3 cont">
<textarea cols="20" rows="6"></textarea><button class="btn myDel" onclick="del(`+i+`)"><i class="far fa-times-circle"></i></button>
            </div>`
        }
    else
        {
    notes[i]= `<div class="col-md-3 cont">
 <textarea cols="20" rows="6">`+($("textarea").eq(i).val())+`</textarea><button class="btn myDel" onclick="del(`+i+`)"><i class="far fa-times-circle"></i></button>                  </div>`
    
        }  

}
        $("#myNote").html(notes)

    
}
*/


/*
let note = {
    noteId:0 , noteContent:""
           }
let notes = [];
$(".addNote i").click(function(){
    notes.push(note);
    let noty ="";
    for(var i=0;i<notes.length;i++)
        {
            notes[i].noteId=i ; notes[i].noteContent=($("textarea").eq(i).val());
            if(notes[i].noteContent==undefined)
                {
                   notes[i].noteContent="";
                }
            
noty = noty +  `<div class="col-md-3 cont ui-widget-content">
 <textarea cols="20" rows="6">`+notes[i].noteContent+`</textarea><button class="btn myDel" onclick="del(`+i+`)"><i class="far fa-times-circle"></i></button>                  </div>`
        }
$("#myNote").html(noty)
  
})
*/

/*
$(function yellow() {
    $( "div" ).draggable();
});

var x = `<div class="col-md-3 cont">
 <textarea cols="20" rows="6"></textarea><button class="btn myDel"><i class="far fa-times-circle"></i></button></div>`;
    
    
$(".addNote i").click(function () { 
    $("#myNote").append('<div class="note">'+x+'</div>');
    $( ".cont" ).draggable();
    $(".myDel").each(function(){
        $(".myDel").click(function() {
            $(this).parent().remove();
        });
    });
});

$(".cont" ).on("click", function() {
        $(".index").removeClass("index");
        $(this).addClass("index");
        console.log($(this));
});
*/


let x = ` <div class="note">
 <textarea cols="20" rows="6"></textarea><span class=" myDel"><i class="far fa-times-circle"></i></span></div>`;
    
    
$(".addNote i").click(function () { 
    $('#myNote').append(x);
    $( ".note" ).draggable();
    
    $(".addNote i").each(function(){
    $(".myDel i").click(function(){
            $(this).parentsUntil($("#myNote")).remove();
         });
    });
});


/* for making the active note on the top (didn't work)

$(".note").click(function() {
        $(".note").removeClass("index");
        $(this).addClass("index");
});

*/

$(".bgCol ul li").click(function(){
    let bg = $(this).css("backgroundColor")
    $("textarea").css("backgroundColor",bg)
})


$(".fontCol ul li").click(function(){
    let fonty = $(this).css("backgroundColor")
    $("textarea").css("color",fonty)
})