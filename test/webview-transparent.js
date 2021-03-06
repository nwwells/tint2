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
 * @see {Window}
 * @example
 */
function run($utils) {
  var mainWindow = new Window(), alpha = 1;
  var webview = new WebView();
  mainWindow.appendChild(webview);
  mainWindow.addLayoutConstraint({
    priority:'required', relationship:'=',
    firstItem:webview, firstAttribute:'top',
    secondItem:mainWindow, secondAttribute:'top',
    multiplier:1.0, constant:0.0
  });
  mainWindow.addLayoutConstraint({
    priority:'required', relationship:'=',
    firstItem:webview, firstAttribute:'left',
    secondItem:mainWindow, secondAttribute:'left',
    multiplier:1.0, constant:0.0
  });
  mainWindow.addLayoutConstraint({
    priority:'required', relationship:'=',
    firstItem:webview, firstAttribute:'right',
    secondItem:mainWindow, secondAttribute:'right',
    multiplier:1.0, constant:0.0
  });
  mainWindow.addLayoutConstraint({
    priority:'required', relationship:'=',
    firstItem:webview, firstAttribute:'bottom',
    secondItem:mainWindow, secondAttribute:'bottom',
    multiplier:1.0, constant:0.0
  });
  webview.location = "app://assets/webview-transparency.html";
  mainWindow.title = "You should be able to see this.";
  //mainWindow.frame = false;
  webview.transparent = true;
  //mainWindow.alpha = 0;


  setTimeout(function() {
    mainWindow.close();
    $utils.ok();
  },2000);
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
  name:"WebViewTransparent",
};