<script type="text/javascript">

						function  calculeazaIRMB() {
						var varsta = document.getElementById('varsta').value	
						var greutate = document.getElementById('greutate').value
						var inaltime = document.getElementById('inaltime').value
						if (varsta == "") {
							alert("Va rog introduceti varsta.");
							return;
						  }
						if (greutate == "") {
							alert("Va rog introduceti greutatea.");
							return;
						  }
						if (inaltime == ""){ 
							alert("Va rog introduceti inaltimea.");
							return;
						  }
						 
						  var IRMB =66 + (13.7 * greutate) + (5*inaltime) - (6.8 * varsta);
						  document.getElementById('IRMB').value=IRMB.toFixed(2);
						}
</script>