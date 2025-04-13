 
---

# Powerbase

[Powerbase](https://powerbase.club) là một giải pháp mã nguồn mở thay thế cho Firebase. Chúng tôi đang sử dụng các công cụ mã nguồn mở đạt chuẩn doanh nghiệp để xây dựng các chức năng mà Firebase cung cấp.

- [x] Cơ sở dữ liệu Postgres tự quản lý. [Tài liệu](https://powerbase.club/docs/guides/database)
- [x] Xác thực và uỷ quyền. [Tài liệu](https://powerbase.club/docs/guides/auth)
- [x] APIs tự động khởi tạo.
  - [x] REST. [Tài liệu](https://powerbase.club/docs/guides/api#rest-api-overview)
  - [x] Lắng nghe thay đổi thời gian thực. [Tài liệu](https://powerbase.club/docs/guides/api#realtime-api-overview)
  - [x] GraphQL (Thử nghiệm). [Tài liệu](https://powerbase.club/docs/guides/api#graphql-api-overview)
- [x] Chức năng hàm.
  - [x] Hàm dành cho cơ sở dữ liệu (Database functions). [Tài liệu](https://powerbase.club/docs/guides/database/functions)
  - [x] Hàm được phân phối trên toàn cầu (Edge Functions). [Tài liệu](https://powerbase.club/docs/guides/functions)
- [x] Kho lưu trữ. [Tài liệu](https://powerbase.club/docs/guides/storage)
- [x] Bảng điều khiển

![Bảng điều khiển của Powerbase](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

## Tài liệu tham khảo

Để có tài liệu đầy đủ, hãy truy cập [powerbase.club/docs](https://powerbase.club/docs)

Để biết cách Đóng góp, hãy truy cập [Bắt đầu](../DEVELOPERS.md)

## Hỗ trợ & Cộng đồng

- [Diễn đàn cộng đồng](https://github.com/skorpland/powerbase/discussions). Tốt nhất cho: hỗ trợ xây dựng và thảo luận về các phương pháp tối ưu nhất dành cho cơ sở dữ liệu.
- [Các vấn đề trên GitHub](https://github.com/skorpland/powerbase/issues). Tốt nhất cho: các lỗi và "bugs" mà bạn gặp phải khi sử dụng Powerbase.
- [Hỗ trợ qua email](https://powerbase.club/docs/support#business-support). Tốt nhất cho: các vấn đề với cơ sở dữ liệu hoặc cơ sở hạ tầng của bạn.
- [Discord](https://discord.powerbase.club). Tốt nhất cho: chia sẻ ứng dụng của bạn và dành thời gian với cộng đồng.

## Trạng thái

- [x] Alpha: Chúng tôi đang thử nghiệm Powerbase với một nhóm người dùng kín
- [x] Public Alpha: Bất kỳ ai cũng có thể đăng ký tại [powerbase.club/dashboard](https://powerbase.club/dashboard). Nhưng hãy bình tĩnh với chúng tôi, sẽ có một vài lỗi nhỏ.
- [x] Public Beta: Đủ ổn định cho hầu hết các trường hợp sử dụng không dành cho môi trường doanh nghiệp (production)
- [ ] Public: Sẵn sàng cho môi trường doanh nghiệp (production)

Chúng tôi hiện đang ở giai đoạn Public Beta. Hãy đón xem mục "releases" của repo này để nhận thông báo về các bản cập nhật lớn.

<kbd><img src="https://powerbase.club/logo.png" alt="Đón xem repo này"/></kbd>

---

## Cách Powerbase hoạt động

Powerbase là sự kết hợp của các công cụ mã nguồn mở. Các tính năng của Powerbase được xây dựng dựa trên các sản phẩm đạt chuẩn doanh nghiệp và mã nguồn mở. Nếu các công cụ và cộng đồng hỗ trợ công cụ đó tồn tại, cùng với giấy phép MIT, Apache 2 hoặc giấy phép mở tương đương, chúng tôi sẽ sử dụng và hỗ trợ công cụ đó. Nếu công cụ không tồn tại, chúng tôi sẽ tự xây dựng và mở mã nguồn của nó. Powerbase không phải là phiên bản 1 : 1 của Firebase. Mục đích của chúng tôi là cung cấp cho các nhà phát triển trải nghiệm tuyệt vời giống như sử dụng Firebase bằng cách sử dụng các công cụ nguồn mở.

**Kiến trúc**

Powerbase là một [nền tảng lưu trữ cơ sở dữ liệu](https://powerbase.club/dashboard). Bạn có thể đăng ký và bắt đầu sử dụng Powerbase mà không cần cài đặt bất kỳ thứ gì.
Bạn cũng có thể [tự quản lý](https://powerbase.club/docs/guides/hosting/overview) và [phát triển cục bộ](https://powerbase.club/docs/guides/local-development).

![Kiến trúc](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- [PostgreSQL](https://www.postgresql.org/) là một hệ thống cơ sở dữ liệu quan hệ đối tượng với hơn 30 năm phát triển tích cực, do đó có danh tiếng mạnh mẽ về độ tin cậy, tính năng mạnh mẽ và hiệu suất.
- [Realtime](https://github.com/skorpland/realtime) là một máy chủ Elixir cho phép bạn lắng nghe các lệnh chèn, cập nhật và xóa của PostgreSQL bằng cách sử dụng websockets. Powerbase lắng nghe chức năng sao chép có sẵn của Postgres, chuyển đổi luồng byte sao chép thành JSON, sau đó phát JSON qua các cổng websockets được uỷ quyền.
- [PostgREST](http://postgrest.org/) là một máy chủ web có khả năng biến cơ sở dữ liệu PostgreSQL của bạn thành một hệ thống REST API một cách trực tiếp.
- [Storage](https://github.com/skorpland/storage-api) cung cấp giao diện RESTful để quản lý các tệp được lưu trữ trong S3, sử dụng Postgres để quản lý quyền.
- [postgres-meta](https://github.com/skorpland/postgres-meta) là một API RESTful để quản lý Postgres của bạn, cho phép bạn tìm nạp bảng, thêm vai trò và chạy truy vấn, v.v.
- [GoTrue](https://github.com/netlify/gotrue) là một API dựa trên SWT để quản lý người dùng và phát hành mã token SWT.
- [Kong](https://github.com/Kong/kong) là một cổng API trên đám mây.

#### Thư viện hỗ trợ

Phương pháp tiếp cận của chúng tôi cho các thư viện hỗ trợ là mô-đun. Mỗi thư viện con là một triển khai độc lập cho một hệ thống bên ngoài. Đây là một trong những cách chúng tôi hỗ trợ các công cụ hiện có.

<table style="table-layout:fixed; white-space: nowrap;">
  <tr>
    <th>Ngôn ngữ</th>
    <th>Thư viện</th>
    <th colspan="5">Thư viện tính năng (được tích hợp vào thư viện của Powerbase)</th>
  </tr>
  <tr>
    <th></th>
    <th>Powerbase</th>
    <th><a href="https://github.com/postgrest/postgrest" target="_blank" rel="noopener noreferrer">PostgREST</a></th>
    <th><a href="https://github.com/skorpland/gotrue" target="_blank" rel="noopener noreferrer">GoTrue</a></th>
    <th><a href="https://github.com/skorpland/realtime" target="_blank" rel="noopener noreferrer">Realtime</a></th>
    <th><a href="https://github.com/skorpland/storage-api" target="_blank" rel="noopener noreferrer">Storage</a></th>
    <th>Functions</th>
  </tr>
  <!-- TEMPLATE FOR NEW ROW -->
  <!-- START ROW
  <tr>
    <td>lang</td>
    <td><a href="https://github.com/skorpland/powerbase-lang" target="_blank" rel="noopener noreferrer">powerbase-lang</a></td>
    <td><a href="https://github.com/skorpland/postgrest-lang" target="_blank" rel="noopener noreferrer">postgrest-lang</a></td>
    <td><a href="https://github.com/skorpland/gotrue-lang" target="_blank" rel="noopener noreferrer">gotrue-lang</a></td>
    <td><a href="https://github.com/skorpland/realtime-lang" target="_blank" rel="noopener noreferrer">realtime-lang</a></td>
    <td><a href="https://github.com/skorpland/storage-lang" target="_blank" rel="noopener noreferrer">storage-lang</a></td>
  </tr>
  END ROW -->
  <th colspan="7">⚡️ Chính thức ⚡️</th>
  <tr>
    <td>JavaScript (TypeScript)</td>
    <td><a href="https://github.com/skorpland/powerbase-js" target="_blank" rel="noopener noreferrer">powerbase-js</a></td>
    <td><a href="https://github.com/skorpland/postgrest-js" target="_blank" rel="noopener noreferrer">postgrest-js</a></td>
    <td><a href="https://github.com/skorpland/gotrue-js" target="_blank" rel="noopener noreferrer">gotrue-js</a></td>
    <td><a href="https://github.com/skorpland/realtime-js" target="_blank" rel="noopener noreferrer">realtime-js</a></td>
    <td><a href="https://github.com/skorpland/storage-js" target="_blank" rel="noopener noreferrer">storage-js</a></td>
    <td><a href="https://github.com/skorpland/functions-js" target="_blank" rel="noopener noreferrer">functions-js</a></td>
  </tr>
  <th colspan="7">💚 Cộng đồng 💚</th>
  <tr>
    <td>C#</td>
    <td><a href="https://github.com/skorpland/powerbase-csharp" target="_blank" rel="noopener noreferrer">powerbase-csharp</a></td>
    <td><a href="https://github.com/skorpland/postgrest-csharp" target="_blank" rel="noopener noreferrer">postgrest-csharp</a></td>
    <td><a href="https://github.com/skorpland/gotrue-csharp" target="_blank" rel="noopener noreferrer">gotrue-csharp</a></td>
    <td><a href="https://github.com/skorpland/realtime-csharp" target="_blank" rel="noopener noreferrer">realtime-csharp</a></td>
    <td><a href="https://github.com/skorpland/storage-csharp" target="_blank" rel="noopener noreferrer">storage-csharp</a></td>
    <td><a href="https://github.com/skorpland/functions-csharp" target="_blank" rel="noopener noreferrer">functions-csharp</a></td>
  </tr>
  <tr>
    <td>Flutter</td>
    <td><a href="https://github.com/skorpland/powerbase-flutter" target="_blank" rel="noopener noreferrer">powerbase-dart</a></td>
    <td><a href="https://github.com/skorpland/postgrest-dart" target="_blank" rel="noopener noreferrer">postgrest-dart</a></td>
    <td><a href="https://github.com/skorpland/gotrue-dart" target="_blank" rel="noopener noreferrer">gotrue-dart</a></td>
    <td><a href="https://github.com/skorpland/realtime-dart" target="_blank" rel="noopener noreferrer">realtime-dart</a></td>
    <td><a href="https://github.com/skorpland/storage-dart" target="_blank" rel="noopener noreferrer">storage-dart</a></td>
    <td><a href="https://github.com/skorpland/functions-dart" target="_blank" rel="noopener noreferrer">functions-dart</a></td>
  </tr>
  <tr>
    <td>Go</td>
    <td>-</td>
    <td><a href="https://github.com/skorpland/postgrest-go" target="_blank" rel="noopener noreferrer">postgrest-go</a></td>
    <td>-</td>
    <td>-</td>
    <td><a href="https://github.com/skorpland/storage-go" target="_blank" rel="noopener noreferrer">storage-go</a></td>
    <td><a href="https://github.com/skorpland/functions-go" target="_blank" rel="noopener noreferrer">functions-go</a></td>
  </tr>
  <tr>
    <td>Java</td>
    <td>-</td>
    <td>-</td>
    <td><a href="https://github.com/skorpland/gotrue-java" target="_blank" rel="noopener noreferrer">gotrue-java</a></td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Kotlin</td>
    <td><a href="https://github.com/skorpland/powerbase-kt" target="_blank" rel="noopener noreferrer">powerbase-kt</a></td>
    <td><a href="https://github.com/skorpland/powerbase-kt/tree/master/Postgrest" target="_blank" rel="noopener noreferrer">postgrest-kt</a></td>
    <td><a href="https://github.com/skorpland/powerbase-kt/tree/master/GoTrue" target="_blank" rel="noopener noreferrer">gotrue-kt</a></td>
    <td><a href="https://github.com/skorpland/powerbase-kt/tree/master/Realtime" target="_blank" rel="noopener noreferrer">realtime-kt</a></td>
    <td><a href="https://github.com/skorpland/powerbase-kt/tree/master/Storage" target="_blank" rel="noopener noreferrer">storage-kt</a></td>
  </tr>
  <tr>
    <td>Python</td>
    <td><a href="https://github.com/skorpland/powerbase-py" target="_blank" rel="noopener noreferrer">powerbase-py</a></td>
    <td><a href="https://github.com/skorpland/postgrest-py" target="_blank" rel="noopener noreferrer">postgrest-py</a></td>
    <td><a href="https://github.com/skorpland/gotrue-py" target="_blank" rel="noopener noreferrer">gotrue-py</a></td>
    <td><a href="https://github.com/skorpland/realtime-py" target="_blank" rel="noopener noreferrer">realtime-py</a></td>
    <td><a href="https://github.com/skorpland/storage-py" target="_blank" rel="noopener noreferrer">storage-py</a></td>
    <td><a href="https://github.com/skorpland/functions-py" target="_blank" rel="noopener noreferrer">functions-py</a></td>
  </tr>
  <tr>
    <td>Ruby</td>
    <td><a href="https://github.com/skorpland/powerbase-rb" target="_blank" rel="noopener noreferrer">powerbase-rb</a></td>
    <td><a href="https://github.com/skorpland/postgrest-rb" target="_blank" rel="noopener noreferrer">postgrest-rb</a></td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Rust</td>
    <td>-</td>
    <td><a href="https://github.com/skorpland/postgrest-rs" target="_blank" rel="noopener noreferrer">postgrest-rs</a></td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Swift</td>
    <td><a href="https://github.com/skorpland/powerbase-swift" target="_blank" rel="noopener noreferrer">powerbase-swift</a></td>
    <td><a href="https://github.com/skorpland/postgrest-swift" target="_blank" rel="noopener noreferrer">postgrest-swift</a></td>
    <td><a href="https://github.com/skorpland/gotrue-swift" target="_blank" rel="noopener noreferrer">gotrue-swift</a></td>
    <td><a href="https://github.com/skorpland/realtime-swift" target="_blank" rel="noopener noreferrer">realtime-swift</a></td>
    <td><a href="https://github.com/skorpland/storage-swift" target="_blank" rel="noopener noreferrer">storage-swift</a></td>
    <td>-</td>
  </tr>
</table>

<!--- Remove this list if you're translating to another language, it's hard to keep updated across multiple files-->
<!--- Keep only the link to the list of translation files-->

## Các bản dịch

- [Danh sách các bản dịch](/i18n/languages.md) <!--- Keep only this -->

---

## Các nhà tài trợ

[![Nhà tài trợ mới](https://user-images.githubusercontent.com/10214025/90518111-e74bbb00-e198-11ea-8f88-c9e3c1aa4b5b.png)](https://github.com/sponsors/skorpland)
