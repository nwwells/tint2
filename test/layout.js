
/**
 * @unit-test-setup
 * @ignore
 */
function setup() {
  require('Common');
}

function baseline() {
}

/**
 * @example
 */
function run($utils) {

  // TODO: Fix height %
  var win = new Window();

  var webView = new WebView();
  win.appendChild(webView);
  webView.location = "https://www.google.com";
  webView.left = webView.right = webView.top = webView.bottom = 0;
  win.width = 700;

  $utils.assert(win.boundsOnScreen.width === webView.boundsOnScreen.width, // @hidden
    'window width: '+win.boundsOnScreen.width+' webview width: '+webView.boundsOnScreen.width);  // @hidden

  var buttonNormal = new Button();
  buttonNormal.title = "Hello";
  win.appendChild(buttonNormal);
  buttonNormal.middle = '100%';
  buttonNormal.center = '100%';
  buttonNormal.width = '200px';
  buttonNormal.width = '100px';

  var buttonSecond = new Button();
  buttonSecond.title = "Second";
  buttonSecond.top = 0;
  win.appendChild(buttonSecond);

  var buttonThird = new Button();
  buttonThird.title = "Third";
  win.appendChild(buttonThird);

  $utils.ok();
}

/**
 * @unit-test-shutdown
 * @ignore
 */
function shutdown() {
}

module.exports = {
  setup:setup, 
  run:run, 
  shutdown:shutdown, 
  shell:false,
  name:"Layout",
};