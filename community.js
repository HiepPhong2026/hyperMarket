/**
 * community.js — Nguồn duy nhất cho các link Cộng Đồng HugMass.
 *
 * ✏️  Để thêm / bớt / đổi tên link: chỉ cần sửa mảng LINKS bên dưới.
 *     Thay đổi sẽ tự động hiện trên tất cả trang (app.html, index.html, tintuc.html, ...).
 *
 * Thêm trang mới:
 *   - Sidebar (nav dọc): đặt <div id="community-nav-items"></div> trong mục Cộng Đồng
 *   - Thanh ngang:       đặt <span id="community-bar-items"></span> bên trong .community-bar
 *   - Thêm <script src="community.js"></script> trước </body>
 */
(function () {
  /* ─── DANH SÁCH LINK ─────────────────────────────────────────── */
  var LINKS = [
    {
      icon : '🎡',
      label: 'Vòng Quay Trúng Thưởng',
      url  : 'https://vongquay.hugmass.com/',
    },
    {
      icon : '🎙️',
      label: 'Nối — Đôi dòng nhỏ. Kết nối lớn hơn.',
      url  : 'https://noi.hugmass.com/',
    },
    {
      icon : '🗳️',
      label: 'Biểu quyết — Mỗi lựa chọn, một tiếng nói',
      url  : 'https://binhchon.hugmass.com/',
    },
  ];
  /* ────────────────────────────────────────────────────────────── */

  /* Render vào sidebar dọc (app.html, index.html) */
  function renderSidebar() {
    var el = document.getElementById('community-nav-items');
    if (!el) return;
    el.innerHTML = LINKS.map(function (l) {
      return '<a href="' + l.url + '" class="nav-item"'
        + ' style="text-decoration:none;color:inherit;display:flex;align-items:center;gap:8px"'
        + ' target="_blank" rel="noopener">'
        + '<span class="nav-icon">' + l.icon + '</span> ' + l.label
        + '</a>';
    }).join('');
  }

  /* Render vào thanh ngang (tintuc.html) */
  function renderBar() {
    var el = document.getElementById('community-bar-items');
    if (!el) return;
    el.innerHTML = LINKS.map(function (l) {
      return '<a href="' + l.url + '" target="_blank" rel="noopener">'
        + l.icon + ' ' + l.label
        + '</a>';
    }).join('');
  }

  function render() { renderSidebar(); renderBar(); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
