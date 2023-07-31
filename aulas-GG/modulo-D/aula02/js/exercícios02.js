var horas = new Date().getHours();
console.log("Agora s\u00E3o exatamente ".concat(horas, " horas."));
if (horas < 12) {
    console.log("Bom dia");
}
else if (horas < 18) {
    console.log("Boa tarde");
}
else {
    console.log("Boa noite");
}
