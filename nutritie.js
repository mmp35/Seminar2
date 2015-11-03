<script type="text/javascript">

						function  calculeazaIMC() {
						  var greutate = document.getElementById('greutate').value
						  var inaltime = document.getElementById('inaltime').value
						  if (greutate == "") {
							alert("Va rog introduceti greutatea.");
							return;
						  }
						  if (inaltime == ""){ 
							alert("Va rog introduceti inaltimea.");
							return;
						  }
						 
						  var IMC = (greutate  / (inaltime * inaltime)) * 10000;
						  document.getElementById('IMC').value=IMC.toFixed(2);
						}
</script>