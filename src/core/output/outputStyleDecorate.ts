import type { RepomixConfigMerged } from '../../config/configSchema.js';

export const generateHeader = (generationDate: string): string => {
  return `
This file is a merged representation of the entire codebase, combining all repository files into a single document.
Generated by Repomix on: ${generationDate}
`.trim();
};

export const generateSummaryPurpose = (): string => {
  return `
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
`.trim();
};

export const generateSummaryFileFormat = (): string => {
  return `
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
`.trim();
};

export const generateSummaryUsageGuidelines = (config: RepomixConfigMerged, repositoryInstruction: string): string => {
  return `
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
${config.output.headerText ? '- Pay special attention to the Repository Description. These contain important context and guidelines specific to this project.' : ''}
${repositoryInstruction ? '- Pay special attention to the Repository Instruction. These contain important context and guidelines specific to this project.' : ''}
`.trim();
};

export const generateSummaryNotes = (config: RepomixConfigMerged): string => {
  return `
- Some files may have been excluded based on .gitignore rules and Repomix's
  configuration.
- Binary files are not included in this packed representation. Please refer to
  the Repository Structure section for a complete list of file paths, including
  binary files.
${config.output.removeComments ? '- Code comments have been removed.\n' : ''}
${config.output.showLineNumbers ? '- Line numbers have been added to the beginning of each line.\n' : ''}
`.trim();
};
