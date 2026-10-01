(function(){
  var buttons = document.querySelectorAll('[data-set-lang]');
  var elements = document.querySelectorAll('[data-uk][data-en]');

  function applyLang(lang){
    document.documentElement.lang = lang;
    elements.forEach(function(el){
      el.textContent = el.getAttribute('data-' + lang);
    });
    buttons.forEach(function(btn){
      btn.classList.toggle('active', btn.getAttribute('data-set-lang') === lang);
    });
    try { localStorage.setItem('site-lang', lang); } catch(e) {}
  }

  buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
      applyLang(btn.getAttribute('data-set-lang'));
    });
  });

  var saved = null;
  try { saved = localStorage.getItem('site-lang'); } catch(e) {}
  if (saved === 'uk' || saved === 'en') {
    applyLang(saved);
  }
})();

// Assemble the email address at runtime so it never appears as
// plain text in the page source — a basic deterrent against
// automated scraping bots that grep static HTML for "@".
(function(){
  var user = ['y', 'o', 'u', 'r'].join('');   // replace with your actual local part
  var domain = ['e', 'm', 'a', 'i', 'l', '.', 'c', 'o', 'm'].join(''); // replace with your domain
  var address = user + '@' + domain;
  var link = document.getElementById('email-link');
  if (link) {
    link.textContent = address;
    link.href = 'mailto:' + address;
  }
})();
