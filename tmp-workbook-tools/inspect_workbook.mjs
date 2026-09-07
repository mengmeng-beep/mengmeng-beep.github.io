import fs from 'node:fs/promises';
import { FileBlob, SpreadsheetFile } from '@oai/artifact-tool';

const inputPath = 'C:/project_aaf/Doc/테이블정의서/테이블정의서_260904_v2.xlsx';
const outputDir = 'C:/project_aaf/Source/mengmeng-beep.github.io/tmp-workbook';
const workbook = await SpreadsheetFile.importXlsx(await FileBlob.load(inputPath));
const summary = await workbook.inspect({ kind: 'workbook,sheet,table', maxChars: 12000, tableMaxRows: 8, tableMaxCols: 20 });
console.log(summary.ndjson);

for (const sheet of workbook.worksheets.items) {
  const preview = await workbook.render({ sheetName: sheet.name, autoCrop: 'all', scale: 1, format: 'png' });
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(`${outputDir}/${sheet.name}.png`, new Uint8Array(await preview.arrayBuffer()));
}
