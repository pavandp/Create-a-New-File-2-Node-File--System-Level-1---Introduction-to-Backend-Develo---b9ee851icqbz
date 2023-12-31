const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
    //Write your code here
    //Don't change function name
    const fileExists = await fs.access(fileName).then(() => true).catch(() => false);
    if (fileExists) {
        console.log(`${fileName} already exists. Skipping write operation`);
      } else {
        await fs.writeFile(fileName, fileContent, 'utf-8');
        console.log(`File ${fileName} created and data written successfully!`);
      }
};
module.exports =  writeFile ;
