//
// ui_helper.js
//

// -- enable UI element --
function enableElementById(id) {
  const element = document.getElementById(id);
  element.disabled = false;
}

// -- disable UI element --
function disableElementById(id) {
  const element = document.getElementById(id);
  element.disabled = true;
}

// -- hide UI element --
function hideElementById(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}

// -- show UI element --
function showElementById(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}


// --- get param from query string ---
function getParamFromQueryString(key) {
  const search = window.location.search;
  const re = new RegExp(`${key}=([^&=]+)`);
  const results = re.exec(search);
  let token = '';
  if (results) {
    token = results[1];
  }
  return token;
}
