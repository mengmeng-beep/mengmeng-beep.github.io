import fs from 'node:fs/promises';
import { FileBlob, SpreadsheetFile } from '@oai/artifact-tool';

const inputPath = 'C:/project_aaf/Doc/테이블정의서/테이블정의서_260904_v2.xlsx';
const outputDir = 'C:/project_aaf/Source/mengmeng-beep.github.io/outputs/pk-fk-only';
const outputPath = `${outputDir}/테이블정의서_260904_v2_pk_fk_only.xlsx`;
const workbook = await SpreadsheetFile.importXlsx(await FileBlob.load(inputPath));

for (const sheet of workbook.worksheets.items) {
  const usedRange = sheet.getUsedRange();
  const values = usedRange.values;
  const headerIndex = values.findIndex((row) => row.includes('PK') && row.includes('FK'));

  if (headerIndex === -1) continue;

  const pkIndex = values[headerIndex].indexOf('PK');
  const fkIndex = values[headerIndex].indexOf('FK');
  const firstDataRow = headerIndex + 1;
  const dataRowCount = values.length - firstDataRow;

  if (dataRowCount < 1) continue;

  sheet
    .getRangeByIndexes(firstDataRow, 0, dataRowCount, values[0].length)
    .format.fill = null;

  values.slice(firstDataRow).forEach((row, rowOffset) => {
    if (row[pkIndex] === 'PK') {
      sheet.getCell(firstDataRow + rowOffset, pkIndex).format.fill = '#FFF2CC';
    }

    if (row[fkIndex] === 'FK') {
      sheet.getCell(firstDataRow + rowOffset, fkIndex).format.fill = '#E2F0D9';
    }
  });
}

await fs.mkdir(outputDir, { recursive: true });
const check = await workbook.inspect({
  kind: 'table',
  range: 'tb_board!A1:J18',
  include: 'values,formulas',
  tableMaxRows: 18,
  tableMaxCols: 10,
});
console.log(check.ndjson);

const errors = await workbook.inspect({
  kind: 'match',
  searchTerm: '#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',
  options: { useRegex: true, maxResults: 300 },
  summary: 'final formula error scan',
});
console.log(errors.ndjson);

const preview = await workbook.render({ sheetName: 'tb_board', range: 'A1:J18', scale: 2, format: 'png' });
await fs.writeFile(`${outputDir}/tb_board_preview.png`, new Uint8Array(await preview.arrayBuffer()));

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);
