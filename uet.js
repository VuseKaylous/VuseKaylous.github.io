// import json from './data.json' assert {type : 'json'};
const json = {
    "classes" : ["PES1070 1", "INT2210 45", "INT2211 45", "INT2212 43", "INT2204 46", "MAT1101 44"],
    "name" : [
        "Bài tập phát triển chung",
        "Cấu trúc dữ liệu và giải thuật",
        "Cơ sở dữ liệu",
        "Kiến trúc máy tính",
        "Lập trình hướng đối tượng",
        "Xác suất thống kê"
    ],
    "command" : ["classes"]
};

function uet(args) {
    if (!args) {
        json.command.forEach(printOut);
        console.log(json.command[0]);
    } else {
        if (args == "classes") {
            for (let i=0;i<json.classes.length;i = i + 1) {
                addLine(json.classes[i] + ": " + json.name[i]);
            }
        }
    }
}

function printOut(value) {
    addLine(value);
}