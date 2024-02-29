const avatarDivs = document.querySelectorAll('.avatar-div-blue');
  
  // Parcourez chaque élément et ajoutez un point rouge à la fin de la div activity
  avatarDivs.forEach(avatarDiv => {
    const activityDiv = avatarDiv.querySelector('.activity');
    const redDot = document.createElement('span');
    redDot.textContent = '•'; // Caractère de point
    redDot.classList.add('red-dot'); // Ajoutez la classe pour le style
    activityDiv.appendChild(redDot); // Ajoutez le point à la fin de la div activity
  });