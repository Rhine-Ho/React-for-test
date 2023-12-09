import React, { useState } from 'react';

function Test4() {
// 創建狀態變數，初始值為 0
  const [count, setCount] = useState(0);

  return (
    <section>
      <div className="min-h-screen flex items-center justify-center bg-blue-400">
        <div className="flex flex-col items-center">
          <h2 className="text-md font-bold">計數器 (counter)</h2>
          <p className="bg-white rounded-lg text-center mt-2 w-28 h-7">目前計數 ：{count}</p>

          <div className="flex m-2">
          {/* 按鈕點擊時調用 setCount 更新 count */}
            <button 
              onClick={() => setCount(count + 1)}
              className="rounded-l-lg px-4 py-2 focus:ring-2 bg-slate-700 text-gray-100 hover:bg-gray-900 duration-300"
            >
              增加
            </button>

            <button 
              onClick={() => setCount(count - 1)}              
              className="rounded-r-lg px-4 py-2 focus:ring-2 bg-slate-700 text-gray-100 hover:bg-gray-900 duration-300"
              >
                減少
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test4;
