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
