const fs = require("fs");
const readline = require("node:readline");

fs.readFile("./employee.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const con = JSON.parse(data);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(`Bouns Percentage for employees?`, (percent) => {
      const newData = con.map((data) =>
        data
          ? { ...data, salary: data.salary + (data.salary * percent) / 100 }
          : data
      );
      fs.writeFile(
        "./employee.json",
        JSON.stringify(newData, null, 2),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
      rl.close();
    });
  }
});

fs.readFile("./salary.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error", err);
  } else {
    fs.appendFile("./salary.txt", `\n Welcome to Backend World!`, (err) => {
      if (err) {
        console.log("ERROR :(");
      }
    });
    // fs.writeFile("./salary.txt", "Hello World!", (err) => {
    //   console.log(err);
    // });
  }
});
