let input = document.getElementById('input');
let output = document.getElementById('output');
output.style.visibility = 'hidden';
input.addEventListener('input', function(event){
  output.style.visibility = 'visible';
  let naira = event.target.value;
  let naira2dollars = naira / 367;
  let naira2pounds = naira / 467;
  let naira2euros = naira / 422;
  let usd = document.getElementById('dollars');
  let pound = document.getElementById('pounds');
  let euro = document.getElementById('euros');
  if(naira !== '') usd.innerHTML = `<p><h4>USD:</h4><spam style="color: #063d96; font-weight: bold">$${naira2dollars.toFixed(2)}</spam></p>`;
  else usd.innerHTML = `<h4>USD</h4>`;
  if(naira !== '') pound.innerHTML = `<p><h4>GBP:</h4><spam style="color: #057f03; font-weight: bold">£${naira2pounds.toFixed(2)}</spam></p>`;
  else pound.innerHTML = `<h4>GBP</h4>`;
  if(naira !== '') euro.innerHTML = `<p><h4>EUR:</h4><spam style="color: #75036d; font-weight: bold">€${naira2euros.toFixed(2)}</spam></p>`;
  else euro.innerHTML = `<h4>EUR</h4>`;



})
