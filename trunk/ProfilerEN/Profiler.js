var os = require("os");
var comando = process.argv[2];
//en la pila de argumentos, 0 es 'node', 1 es el nombre del archivo a ejecutar.
var usedmem = Math.round(((os.totalmem() - os.freemem()) / 1024) / 1024);
var freemem = Math.round((os.freemem() / 1024) / 1024);
var totalmem = Math.round((os.totalmem() / 1024) / 1024);
var ruptime = Math.round(os.uptime());
GLOBAL.red   = '\033[31m';
GLOBAL.yellow  = '\033[33m';
GLOBAL.blue  = '\033[36m';
GLOBAL.magenta  = '\033[35m';
GLOBAL.reset = '\033[0m';


if (comando == "simple") {
console.log(blue + ".---------------.                                                  " + reset);
console.log(blue + "|SIMPLE REPORT  |                                                  " + reset);
console.log(blue + "`------------------------------------------------------------------" + reset);
console.log(blue + "|" + reset + "Host:            " + os.hostname() + ".");
console.log(blue + "|" + reset + "OS:              " + magenta + os.type() + reset +".");
console.log(blue + "|" + reset + "Available Mem:   " + yellow + freemem + "MB" + reset + ".");
console.log(blue + "|" + reset + "Uptime:          " + ruptime + " s.");
console.log(blue + "-------------------------------------------------------------------" + reset);
} else if (comando == "full") {
console.log(blue + ".-----------------.                                                " + reset);
console.log(blue + "|FULL REPORT      |                                                " + reset);
console.log(blue + "`------------------------------------------------------------------" + reset);
console.log(blue + "|" + reset + "Host:            " + os.hostname() + ".");
console.log(blue + "|" + reset + "OS:              " + magenta + os.type() + reset +".");
console.log(blue + "|" + reset + "Release:         " + os.release() + ".");
console.log(blue + "|" + reset + "Platform:        " + magenta + os.platform() + reset + ".");
console.log(blue + "|" + reset + "Arch:            " + os.arch() + ".");
console.log(blue + "|" + reset + "Tempdir:         " + os.tmpdir() + ".");
console.log(blue + "|" + reset + "Endianness:      " + os.endianness() +"."); 
var interfaces = os.networkInterfaces();
var addresses = [];
for (k in interfaces) {
    for (k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family == 'IPv4' && !address.internal) {
            addresses.push(address.address)
        }
    }
}
console.log(blue + "|" + reset + "Total mem:       " + blue + totalmem + "MB" + reset + ".");
console.log(blue + "|" + reset + "Available mem:   " + yellow + freemem + "MB" + reset + ".");
console.log(blue + "|" + reset + "Used mem:        " + red + usedmem + "MB" + reset + ".");
console.log(blue + "|" + reset + "Interfaces:      " + addresses); 
console.log(blue + "|" + reset + "Uptime:          " + ruptime + " s.");
console.log(blue + "-------------------------------------------------------------------" + reset);
} else {
console.log("Profiler quickly generates system's reports.\n");
console.log("Args:\n");
console.log("simple - A small report, just basic facts.\n");  
console.log("full - A detailed report.\n");
console.log("Coded by MauroEldritch @ Eldritch Software, Argentina.\n");
console.log(red + "http://eldritch.com.ar.\n" + reset);
}
