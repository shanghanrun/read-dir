const fs = require('fs');
const path = require('path');

const directoryPath = 'C:/Users/choi/Desktop';
let dirList =[]

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  dirList = [...files]
//   console.log('dirList :', dirList)

  	// 파일 목록 출력
	//   console.log('Files in the directory:');
	//   files.forEach(file => {
	//     console.log(file);

  	// 파일찾기
	const foundList = dirList.filter((file)=> file.includes('최병권'))
	console.log('foundList :', foundList)
})
