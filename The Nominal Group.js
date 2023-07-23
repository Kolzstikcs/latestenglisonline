function updateMarker() {
    var select = document.getElementById('mySelect');
    var marker = document.querySelector('.marker');
   
    if(select.value === 'option1'){
        marker.style.display = 'none';
        marker.className = 'marker';
    }else if(select.value === 'option2'){
        marker.style.display = 'block';
        marker.innerHTML = '✔';
        marker.style.color = 'rgb(4, 255, 4)';
    }else if(select.value === 'option3'){
        marker.style.display = 'block';
        marker.innerHTML ='⊗';
        marker.style.color = 'red';
    }else if(select.value === 'option4'){
        marker.style.display = 'block';
        marker.innerHTML ='⊗';
        marker.style.color = 'red';
    }
  }
  