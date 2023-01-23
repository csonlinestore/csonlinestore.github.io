function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "<center><h2>You Like " + localStorage.clickcount + "</h2></center>";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
</script>

<script type="text/javascript">
var pt = document.getElementById("form_convert");
pt.addEventListener('paste', function(e){handlePaste();});
pt.addEventListener("submit",function(e){
handlePaste();
e.preventDefault();
});
function handlePaste() {
setTimeout(function(){
var a=document.querySelector("#form_convert input"),n=a.value.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/|\/shorts\/)/);n[2]&&n[2].length>10?(a.value="https://www.youtube.com/watch?v="+n[2].split(/[^0-9a-z_\-]/i)[0],search(a.value,"url")):search(encodeURIComponent(a.value),"q");
}, 400);
}
function search(p,q){
var d = new Date();
var n = d.getHours();
document.getElementById("search-result").innerHTML = '<iframe id="hphp" style="border: none;" src="https://apiyoutube.cc/?'+q+'='+p+'&t='+n+'" width="100%" height="630"></iframe>';
return false;
}

function themsload(t) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
location.reload();
}};
xhttp.open("POST", "/t.php", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("t="+t);
}
setTimeout(function(){location.reload();}, 18000 * 1000);
</script>
<script type="text/javascript">var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,1181827,4,0,0,0,00010000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();
