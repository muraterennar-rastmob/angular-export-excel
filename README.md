# Angular - Export Excel

### `exportJsonToExcel` Fonksiyonu Dokümantasyonu

---

### Fonksiyon: `exportJsonToExcel<T>(config: ExportConfig<T>): void`

**Açıklama**:

JSON formatındaki verileri Excel dosyası olarak dışa aktarmak için kullanılan bir fonksiyondur. Bu fonksiyon, verilen verileri, belirtilen başlıklarla birlikte bir Excel dosyası olarak oluşturur ve kullanıcının bilgisayarına indirilmesini sağlar. Veri analizi ve raporlama gibi senaryolar için faydalıdır.

---

### Parametreler:

- **`config`**: `ExportConfig<T>`
    - Dışa aktarım işlemi için gerekli yapılandırma ayarlarını içeren bir nesne.
    - **`headers`**: `string[]`
        - Excel dosyasındaki başlıkları tanımlayan bir dizi. Bu başlıklar, verilerin hangi alanlarının görüneceğini belirtir.
    - **`data`**: `T[]`
        - Excel dosyasına dönüştürülecek veri dizisi. Her bir nesne, bir satırı temsil eder ve anahtarlar CSV başlıkları olarak kullanılacaktır.
    - **`fileName`**: `string`
        - Kullanıcının bilgisayarında kaydedilecek Excel dosyasının adı.
    - **`sheetName`**: `string` (Opsiyonel)
        - Excel dosyasındaki sayfanın adı; varsayılan değeri `'Sheet1'` dir.
---

### Kullanım Örneği:

```tsx
const config = {
  headers: ['Name', 'Age', 'City'],
  data: [
    { Name: 'Alice', Age: 30, City: 'New York' },
    { Name: 'Bob', Age: 25, City: 'Los Angeles' }
  ],
  fileName: 'MyData',
  sheetName: 'People'
};

exportJsonToExcel(config);
```

---

### Geri Dönüş Değeri:

- **void**: Bu fonksiyon, herhangi bir değer döndürmez. Dışa aktarma işlemi tamamlandığında kullanıcıya bir Excel dosyası indirilir.

---

### Kullanım Notları:

- Bu fonksiyon, `xlsx` kütüphanesi kullanılarak JSON verilerini Excel formatına dönüştürmek için tasarlanmıştır.
- Fonksiyonu kullanmadan önce, projenize `xlsx` kütüphanesinin eklenmiş olması gerektiğini unutmayın.
- `data` parametresindeki nesnelerin anahtarları, `headers` dizisindeki başlıklarla eşleşmelidir; aksi takdirde veriler doğru bir şekilde gösterilmeyecektir.
