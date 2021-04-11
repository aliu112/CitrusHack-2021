chrome.runtime.onInstalled.addListener(() => {
    console.log('onInstalled...');
    // create alarm after extension is installed / upgraded
    chrome.alarms.create('refresh', { periodInMinutes: .30 });
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    console.log(alarm.name); // refresh
    helloWorld();
  });
  
  function helloWorld() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Please have a sip of water to stay hydrated!";
    window.speechSynthesis.speak(msg);
    window.alert("Please have a sip of water to stay hydrated!");
  }