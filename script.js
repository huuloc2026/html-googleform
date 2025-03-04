(function () {
  var _0x4b5d = [
    "addEventListener",
    "getElementById",
    "contactForm",
    "submit",
    "preventDefault",
    "value",
    "name",
    "email",
    "message",
    "entry.2005620554",
    "entry.802662662",
    "entry.1422570857",
    "fetch",
    "POST",
    "no-cors",
    "Gửi thành công!",
    "reset",
    "Lỗi gửi form:",
    "Gửi thất bại, vui lòng thử lại!",
  ];
  document[_0x4b5d[1]](_0x4b5d[2])[_0x4b5d[0]](
    _0x4b5d[3],
    function (_0x1a4e8e) {
      _0x1a4e8e[_0x4b5d[4]]();
      var _0x48b892 = document[_0x4b5d[1]](_0x4b5d[5])[_0x4b5d[6]];
      var _0x4eab5b = document[_0x4b5d[1]](_0x4b5d[7])[_0x4b5d[6]];
      var _0x1e8c17 = document[_0x4b5d[1]](_0x4b5d[8])[_0x4b5d[6]];
      var _0x252e10 =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfxWZY838bCEA_JPzkYopbnKe-JKHHnZfJ2O1uZn-ehz8doxw/formResponse";
      var _0x2e58c5 = new URLSearchParams();
      _0x2e58c5.append(_0x4b5d[9], _0x48b892);
      _0x2e58c5.append(_0x4b5d[10], _0x1e8c17);
      _0x2e58c5.append(_0x4b5d[11], _0x4eab5b);
      fetch(_0x252e10, {
        method: _0x4b5d[12],
        mode: _0x4b5d[13],
        body: _0x2e58c5,
      })
        .then(() => {
          alert(_0x4b5d[14]);
          document[_0x4b5d[1]](_0x4b5d[2])[_0x4b5d[15]]();
        })
        .catch((_0x3b62b4) => {
          console.error(_0x4b5d[16], _0x3b62b4);
          alert(_0x4b5d[17]);
        });
    }
  );
})();
