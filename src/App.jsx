import './App.css'

import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://react-portfolio-backend-production.up.railway.app/api/hello')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message); // ตรวจสอบว่าได้ค่ามาไหม
        setData(data);             // ส่งข้อมูลเข้า state
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>ข้อมูลจาก Backend</h1>
      {data ? (
        <pre>{JSON.stringify(data.message, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App
