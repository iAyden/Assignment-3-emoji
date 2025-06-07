document.addEventListener('DOMContentLoaded', () => {
    const lefteye = document.getElementById('left_eye');
    const righteye = document.getElementById('right_eye');
  
    document.addEventListener('mousemove', (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
      function movePupil(pupil, eyeRect) {
        const centerX = eyeRect.left + eyeRect.width / 2;
        const centerY = eyeRect.top + eyeRect.height / 2;
  
        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
  
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxMove = 50;
  
        let moveX = dx;
        let moveY = dy;
  
        if (distance > maxMove) {
          const ratio = maxMove / distance;
          moveX *= ratio;
          moveY *= ratio;
        }
  
        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
  
      const leftEyeRect = lefteye.getBoundingClientRect();
      const rightEyeRect = righteye.getBoundingClientRect();
  
      movePupil(lefteye, leftEyeRect);
      movePupil(righteye, rightEyeRect);
    });
  });
  