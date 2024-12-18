   // Counter Logic
   let counterValue = 0;

   function incrementCounter() {
       const incrementValue = parseInt(document.getElementById('increment-value').value) || 1;
       counterValue += incrementValue;
       updateCounter();
   }

   function decrementCounter() {
       const incrementValue = parseInt(document.getElementById('increment-value').value) || 1;
       counterValue -= incrementValue;
       updateCounter();
   }

   function resetCounter() {
       counterValue = 0;
       updateCounter();
   }

   function updateCounter() {
       document.getElementById('counter-value').textContent = counterValue;
   }

   // Cookie Clicker Logic
   let cookieCount = 0;
   let pointsPerClick = 1;

   function clickCookie() {
       cookieCount += pointsPerClick;
       if (cookieCount % 100 === 0) {
           pointsPerClick *= 2;
       }
       updateCookieCount();
   }

   function updateCookieCount() {
       document.getElementById('cookie-count').textContent = cookieCount;
   }