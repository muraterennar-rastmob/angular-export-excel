import {Injectable} from '@angular/core';
import * as XLSX from 'xlsx';
import {ExportConfig} from '../models/export-config';

@Injectable({
  providedIn: 'root'
})
export class ExcelExportService {
  /**
   * JSON formatındaki verileri Excel dosyası olarak dışa aktarmak için kullanılan bir fonksiyondur.
   *
   * Bu fonksiyon, verilen verileri, belirtilen başlıklarla birlikte bir Excel dosyası olarak oluşturur
   * ve kullanıcının bilgisayarına indirilmesini sağlar. Bu, veri analizi ve raporlama gibi
   * senaryolar için faydalıdır.
   *
   * @template T - Dışa aktarılacak verilerin tipini belirten generic parametre.
   *
   * @param config - Dışa aktarım işlemi için gerekli yapılandırma ayarlarını içeren bir nesne.
   * @param config.headers - Excel dosyasındaki başlıkları tanımlayan bir dizi.
   *                         Bu başlıklar, verilerin hangi alanlarının görüneceğini belirtir.
   * @param config.data - Excel dosyasına dönüştürülecek veri dizisi.
   *                      Her bir nesne, bir satırı temsil eder ve anahtarlar CSV başlıkları olarak kullanılacaktır.
   * @param config.fileName - Kullanıcının bilgisayarında kaydedilecek Excel dosyasının adı.
   * @param config.sheetName - (Opsiyonel) Excel dosyasındaki sayfanın adı; varsayılan değeri 'Sheet1' dir.
   *
   * @example
   * // Kullanım örneği
   * const config = {
   *   headers: ['Name', 'Age', 'City'],
   *   data: [
   *     { Name: 'Alice', Age: 30, City: 'New York' },
   *     { Name: 'Bob', Age: 25, City: 'Los Angeles' }
   *   ],
   *   fileName: 'MyData',
   *   sheetName: 'People'
   * };
   * exportJsonToExcel(config);
   */
  exportJsonToExcel<T>(config: ExportConfig<T>): void {
    const {headers, data, fileName, sheetName = 'Sheet1'} = config;

    // Başlıkları ve verileri birleştir
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data, {header: headers});

    // Çalışma kitabını oluştur
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);

    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }
}
