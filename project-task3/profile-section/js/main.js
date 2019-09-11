var textinput=document.getElementById("note");
    var inp= document.getElementsByClassName("form-control");
var nameinput=document.getElementById("name");

var save=document.getElementById("save");
var search=document.getElementById("search");
var   currentindex=0;
var notecontainer;

if( localStorage.getItem("mynotes")==null){
   notecontainer=[];
   }
else{
    notecontainer= JSON.parse(localStorage.getItem("mynotes"));
    displaydata();
}


search.onkeyup=function(){
    
	  searchnote(search.value);
    
}

function  searchnote(term){
	var searchcol="";
	for(var i=0 ;i<notecontainer.length ;i++){
		
		if(notecontainer[i].name==term){
			
			 searchcol+='  <div class="col-md-3"><div class="product"><h3> '+notecontainer[i].name+'</h3><p>'+notecontainer[i].text+'</p> <button onclick="deletnote('+i+')"class="btn btn-primary"> delet</button></div></div>'
        }
		}
	document.getElementById("searchrow").innerHTML=searchcol;
	
	}
///////////////////////////////////////////////////////

save.onclick=function(){
	
	if(save.innerHTML=="save"){
	   addnote();
	   }
	else(save.innerHTML=="update note")
    {
		update(currentindex);
	}
    		clearform();

}

function addnote(){
		
	
	var notes ={
		name:nameinput.value,
		text:textinput.value	
	           }
	notecontainer.push(notes);
	 localStorage.setItem("mynotes", JSON.stringify(notecontainer));
    	displaydata();


}

function displaydata(){
	
	var trs="";
	for(var i=0; i<notecontainer.length;i++)
		{
				trs+='<div class="col-md-4 my-3	 "><div class="p-3 border m-2"><h3 >'+notecontainer[i].name+'</h3><p>'+notecontainer[i].text+'</p><button onclick="deletnote('+i+')" class="btn btn-danger"> delet</button><button onclick="setform('+i+')" class="btn btn-primary m-1"> update  </button></div></div>';

	}
	document.getElementById("test").innerHTML=trs;
}

function clearform()
{
    
    
    for( var t=0 ;t <inp.length ;t++){
        
        inp[t].value="";
        
    }
}

function deletnote(id)
{
	
	notecontainer.splice(id,1);
	 localStorage.setItem("mynotes", JSON.stringify(notecontainer));
	displaydata();
}

function setform(i){
   currentindex=i;
	nameinput.value=notecontainer[i].name;
	textinput.value=notecontainer[i].text;
      

	save.innerHTML="update note";
}

function update(currentindex)
{
        console.log(notecontainer[currentindex].name)

	notecontainer[currentindex].name=nameinput.value;
	notecontainer[currentindex].text=textinput.value;
	save.innerHTML="save";
	displaydata();
	
}







$( "i").click(function() {
	
	
	$(".color-options").toggle(500);
	
})
let lis=$(".color-options ul li");

lis.eq(0).css("background-color","red");
lis.eq(1).css("background-color","green");
lis.eq(2).css("background-color","yellow");
lis.eq(3).css("background-color","blue");
   

lis.click(function(){
		
		let color = $(this).css("background-color");
		console.log(color);
		$("p").css("color",color);
	
		
	})

