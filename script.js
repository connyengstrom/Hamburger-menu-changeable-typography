document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');
  
    menuBtn.addEventListener('click', function() {
      menu.classList.toggle('show');

      const spanElement = menuBtn.querySelector('span');
      let newSpanElement = '';

      // Toggle the button text
      if (menuBtn.textContent === 'Meny') {
        menuBtn.textContent = 'Stäng Meny';
        menuBtn.classList.add('blueMenuButton');
        newSpanElement = document.createElement('span');
        newSpanElement.classList.add('bigText');
        newSpanElement.textContent = 'X';
        menuBtn.insertBefore(newSpanElement, menuBtn.firstChild);
      } else {
        menuBtn.textContent = 'Meny';
        newSpanElement = document.createElement('span');
        newSpanElement.classList.add('hamburger');
        // Add the new span element to the button
        menuBtn.insertBefore(newSpanElement, menuBtn.firstChild);
        menuBtn.classList.remove('blueMenuButton');
      }
    });
  
    // Get all toggle buttons and submenus
    const toggleBtns = document.querySelectorAll('.toggleBtn');
    const submenus = document.querySelectorAll('.submenu');
  
    // Add click event listener to each toggle button
    toggleBtns.forEach(function(toggleBtn, index) {
      toggleBtn.addEventListener('click', function() {
        submenus[index].classList.toggle('show');
        toggleBtn.classList.toggle('largerFont');
  
        // Toggle the button text
        if (toggleBtn.textContent === '+') {
          toggleBtn.textContent = '-';
        } else {
          toggleBtn.textContent = '+';
        }
      });
    });
  

    // Close the menu if the user clicks outside of it
    document.addEventListener('click', function(event) {
      if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.remove('show');
        // Hide all submenus
        submenus.forEach(function(submenu) {
          submenu.classList.remove('show');
        });
        // Reset button text and styling
        toggleBtns.forEach(function(toggleBtn) {
          toggleBtn.textContent = '+';
          toggleBtn.classList.remove('largerFont');
        });
        menuBtn.textContent = 'Meny';
        newSpanElement = document.createElement('span');
        newSpanElement.classList.add('hamburger');
        // Add the new span element to the button
        menuBtn.insertBefore(newSpanElement, menuBtn.firstChild);
        menuBtn.classList.remove('blueMenuButton');
      }
    });


    const styleSelector = document.getElementById('styleSelector');
    const menuItemWrappers = document.querySelectorAll('.menuItemWrapper');
    const anchorElements = document.querySelectorAll('.menuItemWrapper a');
    const root = document.documentElement;

    styleSelector.addEventListener('change', function() {
        const selectedStyle = styleSelector.value;

        if (selectedStyle == 'sansbig' || selectedStyle == 'serifbig') {
            root.style.setProperty('--xHeight', '70px');
        } else if (selectedStyle == 'sanssmall' || selectedStyle == 'serifsmall') {
            root.style.setProperty('--xHeight', '50px');
        } else {
            root.style.setProperty('--xHeight', '60px');
        }

        // Remove and add classes for menuItemWrappers and anchorElements in a single loop
        menuItemWrappers.forEach(function(menuItemWrapper) {
            menuItemWrapper.classList.remove('sansregular', 'sanssmall', 'sansbig', 'serifregular', 'serifsmall', 'serifbig');
            menuItemWrapper.classList.add(selectedStyle);
        });

        anchorElements.forEach(function(anchorElement) {
            anchorElement.classList.remove('sansregular', 'sanssmall', 'sansbig', 'serifregular', 'serifsmall', 'serifbig');
            anchorElement.classList.add(selectedStyle);
        });
    });
  });