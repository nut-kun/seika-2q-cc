/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
async function generatePDF() {
    const { PDFDocument, rgb } = PDFLib;

    // フォームのデータを取得
    const technology = document.getElementById('technology').value;
    const experience = document.getElementById('experience').value;
    const pr = document.getElementById('pr').value;

    // 新しいPDFドキュメントを作成
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const { width, height } = page.getSize();
    const fontSize = 30;

    // フォントの読み込み
    const fontUrl = './font/NotoSansJP-VariableFont_wght.ttf';
    const fontBytes = await fetch(fontUrl).then(res => res.arrayBuffer());
    const customFont = await pdfDoc.embedFont(fontBytes);

    // テキストを追加
    page.drawText('あなたのスキルシート', {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        font: customFont,
        color: rgb(0, 0, 0),
    });
    page.drawText(`得意な技術: ${technology}`, {
        x: 50,
        y: height - 6 * fontSize,
        size: fontSize,
        font: customFont,
        color: rgb(0, 0, 0),
    });
    page.drawText(`経歴: ${experience}`, {
        x: 50,
        y: height - 8 * fontSize,
        size: fontSize,
        font: customFont,
        color: rgb(0, 0, 0),
    });
    page.drawText(`自己PR: ${pr}`, {
        x: 50,
        y: height - 10 * fontSize,
        size: fontSize,
        font: customFont,
        color: rgb(0, 0, 0),
    });

    // PDFをダウンロード
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'SkillSheet.pdf';
    link.click();
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxZQUFZLG1CQUFtQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsNEJBQTRCLFdBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx5QkFBeUIsV0FBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJCQUEyQixHQUFHO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx3Q0FBd0MseUJBQXlCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVQREYoKSB7XG4gICAgY29uc3QgeyBQREZEb2N1bWVudCwgcmdiIH0gPSBQREZMaWI7XG5cbiAgICAvLyDjg5Xjgqnjg7zjg6Djga7jg4fjg7zjgr/jgpLlj5blvpdcbiAgICBjb25zdCB0ZWNobm9sb2d5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlY2hub2xvZ3knKS52YWx1ZTtcbiAgICBjb25zdCBleHBlcmllbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cGVyaWVuY2UnKS52YWx1ZTtcbiAgICBjb25zdCBwciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcicpLnZhbHVlO1xuXG4gICAgLy8g5paw44GX44GEUERG44OJ44Kt44Ol44Oh44Oz44OI44KS5L2c5oiQXG4gICAgY29uc3QgcGRmRG9jID0gYXdhaXQgUERGRG9jdW1lbnQuY3JlYXRlKCk7XG4gICAgY29uc3QgcGFnZSA9IHBkZkRvYy5hZGRQYWdlKFs2MDAsIDQwMF0pO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcGFnZS5nZXRTaXplKCk7XG4gICAgY29uc3QgZm9udFNpemUgPSAzMDtcblxuICAgIC8vIOODleOCqeODs+ODiOOBruiqreOBv+i+vOOBv1xuICAgIGNvbnN0IGZvbnRVcmwgPSAnLi9mb250L05vdG9TYW5zSlAtVmFyaWFibGVGb250X3dnaHQudHRmJztcbiAgICBjb25zdCBmb250Qnl0ZXMgPSBhd2FpdCBmZXRjaChmb250VXJsKS50aGVuKHJlcyA9PiByZXMuYXJyYXlCdWZmZXIoKSk7XG4gICAgY29uc3QgY3VzdG9tRm9udCA9IGF3YWl0IHBkZkRvYy5lbWJlZEZvbnQoZm9udEJ5dGVzKTtcblxuICAgIC8vIOODhuOCreOCueODiOOCkui/veWKoFxuICAgIHBhZ2UuZHJhd1RleHQoJ+OBguOBquOBn+OBruOCueOCreODq+OCt+ODvOODiCcsIHtcbiAgICAgICAgeDogNTAsXG4gICAgICAgIHk6IGhlaWdodCAtIDQgKiBmb250U2l6ZSxcbiAgICAgICAgc2l6ZTogZm9udFNpemUsXG4gICAgICAgIGZvbnQ6IGN1c3RvbUZvbnQsXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCksXG4gICAgfSk7XG4gICAgcGFnZS5kcmF3VGV4dChg5b6X5oSP44Gq5oqA6KGTOiAke3RlY2hub2xvZ3l9YCwge1xuICAgICAgICB4OiA1MCxcbiAgICAgICAgeTogaGVpZ2h0IC0gNiAqIGZvbnRTaXplLFxuICAgICAgICBzaXplOiBmb250U2l6ZSxcbiAgICAgICAgZm9udDogY3VzdG9tRm9udCxcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKSxcbiAgICB9KTtcbiAgICBwYWdlLmRyYXdUZXh0KGDntYzmrbQ6ICR7ZXhwZXJpZW5jZX1gLCB7XG4gICAgICAgIHg6IDUwLFxuICAgICAgICB5OiBoZWlnaHQgLSA4ICogZm9udFNpemUsXG4gICAgICAgIHNpemU6IGZvbnRTaXplLFxuICAgICAgICBmb250OiBjdXN0b21Gb250LFxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApLFxuICAgIH0pO1xuICAgIHBhZ2UuZHJhd1RleHQoYOiHquW3sVBSOiAke3ByfWAsIHtcbiAgICAgICAgeDogNTAsXG4gICAgICAgIHk6IGhlaWdodCAtIDEwICogZm9udFNpemUsXG4gICAgICAgIHNpemU6IGZvbnRTaXplLFxuICAgICAgICBmb250OiBjdXN0b21Gb250LFxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApLFxuICAgIH0pO1xuXG4gICAgLy8gUERG44KS44OA44Km44Oz44Ot44O844OJXG4gICAgY29uc3QgcGRmQnl0ZXMgPSBhd2FpdCBwZGZEb2Muc2F2ZSgpO1xuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcGRmQnl0ZXNdLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9wZGYnIH0pO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICBsaW5rLmRvd25sb2FkID0gJ1NraWxsU2hlZXQucGRmJztcbiAgICBsaW5rLmNsaWNrKCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=