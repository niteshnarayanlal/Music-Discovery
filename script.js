var url="http://en.dilandau.eu/download_music/";
function init()
{

  K("searchbutton").addEventListener("click",_search,false);
  K("artistname").focus();
  K("searchbox").focus();
  K("searchbox").addEventListener("keyup",_keyUp,false);
  K("artistname").addEventListener("keyup",_keyUp,false);


}
function _keyUp(e)
{
if(e.keyCode==13)
_search();
}

function  _search()
{
var song_name=K("searchbox").value;
var artist_name=K("artistname").value;
var song_search="";





if(artist_name==""||artist_name=="enter the artist name")


 {


   for(var i=0;i<song_name.length;i++)
   {
   if(song_name.charAt(i)==" ")
   song_search+="-";
   else
   song_search+=song_name.charAt(i);

   }
   song_search+="-1";
   chrome.tabs.create({url:url+song_search+".html"});

 }
 else if(song_name==""||song_name=="enter the song name")
 {
   for(var i=0;i<artist_name.length;i++)
   {
   if(artist_name.charAt(i)==" ")
   song_search+="-";
   else
   song_search+=artist_name.charAt(i);

   }
   song_search+="-1";
   chrome.tabs.create({url:url+song_search+".html"});

 }
else if(artist_name!=""&& song_name!="")
{

   var song_search="";
   for(var i=0;i<song_name.length;i++)
   {
   if(song_name.charAt(i)==" ")
   song_search+="-";
   else
   song_search+=song_name.charAt(i);

   }

   song_search+="-";
   for(var i=0;i<artist_name.length;i++)
   {
   if(artist_name.charAt(i)==" ")
   song_search+="-";
   else
   song_search+=artist_name.charAt(i);

   }
   song_search+="-1";
   chrome.tabs.create({url:url+song_search+".html#0"});

}


//alert("Press "ctrl+s" to download the song");



}

function K(id)
{
return document.getElementById(id);
}