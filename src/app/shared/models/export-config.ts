export interface ExportConfig<T> {
  headers: string[];
  fileName: string;
  sheetName?: string;
  data: T[];
}
