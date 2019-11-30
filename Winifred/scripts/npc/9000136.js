var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        }

        if (mode == 1) {
            status++;
        } else {
            status--;
        }
    }

    if (status == 0) {
        cm.sendSimple("Hi there!\r\nWhere would you like to go? \r\n#L0#Free Market#l\r\n#L1#MTS#l\r\n");
    } else if(status == 1) {
        if(selection == 0) {
            cm.warp(910000000, 0);
        }
        else if(selection == 1) {
            cm.sendOk("This is selection 2");
            cm.dispose();
        }
    }
}
