import Header from '@/app/components/header';
import EditorApp from '@/app/components/braftEditor';

export default function Home() {
  return (
    <div className="w-100p h-100p">
      <Header />
      <div className="app-container d-a-c">
        <div className="w-720 mt-24">
          <h1>Hello World</h1>
          <EditorApp></EditorApp>
        </div>
      </div>
    </div>
  );
}
