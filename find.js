const fs = require('fs');
const path = require('path');

// 디렉토리를 순회하며 파일을 찾는 함수
function findFilesRecursively(directoryPath, searchPattern, fileList = []) {
  const files = fs.readdirSync(directoryPath);

  files.forEach(file => {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // 하위 디렉토리인 경우 재귀적으로 함수 호출
      findFilesRecursively(filePath, searchPattern, fileList);
    } else if (file.match(searchPattern)) {
      // 파일일 경우 파일 목록에 추가
      fileList.push(filePath);
    }
  });

  return fileList;
}

// 파일을 찾을 디렉토리 경로
const rootDirectoryPath = 'C:/Users/choi/Desktop';

// 찾고자 하는 파일 패턴
const searchPattern = /자보/;

// 모든 하위 디렉토리에서 파일을 찾음
const foundFiles = findFilesRecursively(rootDirectoryPath, searchPattern);

// 결과 출력
console.log('Found files: ', foundFiles);
