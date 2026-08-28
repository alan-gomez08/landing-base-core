import Template1 from './templates/Template1/Template1';
import Template2 from './templates/Template2/Template2';
import Template3 from './templates/Template3/Template3';
import Template4 from './templates/Template4/Template4';

function App() {
 
  const activeTemplate = import.meta.env.VITE_TEMPLATE_ID || 'template-3';

  return (
    <div className="w-full min-h-screen">
      {activeTemplate === 'template-1' && <Template1 />}
      {activeTemplate === 'template-2' && <Template2 />}
      {activeTemplate === 'template-3' && <Template3 />}
      {activeTemplate === 'template-4' && <Template4 />}
    </div>
  );
}

export default App;