import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {ExcelExportService} from '../../shared/services/excel-export.service';
import {UserData} from '../../models/user-data';
import {ExportConfig} from '../../shared/models/export-config';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-export-with-library-component',
  standalone: true,
  imports: [CommonModule, MatTableModule, RouterLink],
  templateUrl: './export-with-library-component.component.html',
  styleUrl: './export-with-library-component.component.css'
})

export class ExportWithLibraryComponentComponent {
  displayedColumns: string[] = ['Name', 'Age', 'Email', 'action'];
  dataSource = new MatTableDataSource<UserData>([]);
  fileName: string = 'data';
  sheetName: string = 'Sheet1';

  constructor(private excelExportService: ExcelExportService) {
    this.setSampleData();
  }

  setSampleData(): void {
    this.dataSource.data = [
      {Name: 'Ali', Age: 25, Email: 'ali@example.com'},
      {Name: 'Ayşe', Age: 30, Email: 'ayse@example.com'},
    ];
  }

  exportToExcel(): void {
    const config: ExportConfig<UserData> = {
      headers: this.displayedColumns.slice(0, 3), // Sadece başlıkları al
      data: this.dataSource.data,
      fileName: this.fileName,
      sheetName: this.sheetName,
    };
    this.excelExportService.exportJsonToExcel(config);
  }
}
