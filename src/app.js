import jsPDF from 'jspdf';
import { font } from "./NotoSansJP-normal"
const FONT_URL = 'font/NotoSansJP-VariableFont_wght.ttf';


document.getElementById('generate-pdf').addEventListener('click', () => {

    const no = document.getElementById('no').value;
    const name = document.getElementById('name').value;

    const doc = new jsPDF();

    doc.setTextColor(0, 0, 0)
    doc.addFileToVFS(FONT_URL, font);
    doc.addFont(FONT_URL, 'NotoSansJP-Regular', 'normal');

    doc.setFont('NotoSansJP-Regular');


    doc.text('京都精華大学', 10, 10);
    doc.text(`学籍番号: ${no}`, 10, 20);
    doc.text(`名前: ${name}`, 10, 30);


    doc.save('example.pdf');
});
