<script>
function save(){
  var text = document.getElementById("bar").value;
  text = text.replace(/\n/g, "\r\n");
  var blob = new Blob([text], { type: "text/plain"});
  var anchor = document.createElement("a");
  anchor.download = "document.txt";
  anchor.href = window.URL.createObjectURL(blob);
  anchor.target ="_blank";
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
</script>
