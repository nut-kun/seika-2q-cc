import jsPDF from 'jspdf';
import { font } from "./NotoSansJP-normal"
const FONT_URL = 'font/NotoSansJP-VariableFont_wght.ttf';


document.getElementById('generate-pdf').addEventListener('click', () => {

    const technology = document.getElementById('technology').value;

    // 新規インスタンス作成
    const doc = new jsPDF();

    // フォント指定
    doc.setTextColor(0, 0, 0)
    doc.addFileToVFS(FONT_URL, font);
    doc.addFont(FONT_URL, 'NotoSansJP-Regular', 'normal');

    // フォントを設定
    doc.setFont('NotoSansJP-Regular');


    // テキスト追加
    doc.text(`得意な技術: ${technology}`, 20, 20);
    doc.text('Hello world!', 10, 10);

    // // 画像追加
    // const logoImg = '<path to image>'; 
    // doc.addImage(logoImg, 'JPEG', 10, 20, 40, 40); // 画像の配置位置とサイズを指定

    // ファイルの保存（オプション）
    doc.save('example.pdf');
});
