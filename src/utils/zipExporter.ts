import JSZip from 'jszip';
import { flutterProjectFiles } from '../data/flutterFiles';

export async function downloadFlutterProjectZip(): Promise<void> {
  const zip = new JSZip();

  flutterProjectFiles.forEach((file) => {
    zip.file(file.path, file.content);
  });

  const content = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'al_hadith_flutter_offline_app.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
