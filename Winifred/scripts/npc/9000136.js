var status = 0;
 
function start() {
    status = -1;
    action(1, 0, 0);
}
 
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("Okay, come again!");//This is the message shown if you click 'end chat'
            cm.dispose();
            return;
        }
        
    if (mode == 1) {
        status++;// see '++' operator in operator section
    }
    else{
        status--;
    }// see '--' operator in operator section
  if (status == 0) {//This is where your first status starts. 
  }
}
}