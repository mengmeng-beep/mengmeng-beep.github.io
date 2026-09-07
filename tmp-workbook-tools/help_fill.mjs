import { FileBlob, SpreadsheetFile } from '@oai/artifact-tool';

const workbook = await SpreadsheetFile.importXlsx(await FileBlob.load('C:/project_aaf/Doc/테이블정의서/테이블정의서_260904_v2.xlsx'));
console.log(workbook.help('range.format.fill', { include: 'index,examples,notes', maxChars: 3000 }).ndjson);
