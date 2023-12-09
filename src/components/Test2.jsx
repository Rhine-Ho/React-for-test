import React, { useState } from 'react';

function Test2() {
  const [inputArray, setInputArray] = useState('');// 用於存儲用戶輸入的數字陣列
  const [filteredResult, setFilteredResult] = useState([]);// 用於存儲過濾後的結果

  // 處理輸入框數值變化的函數
  const handleInputChange = (event) => {
    setInputArray(event.target.value);
  };

  // 過濾數字陣列中大於 5 的數字
  const filterNumbers = () => {
    const numbers = inputArray.split(',').map(Number);
    const filteredNumbers = numbers.filter(number => number > 5);
    setFilteredResult(filteredNumbers);
      console.log('大於5的數字：', filteredNumbers);
  };

    // 處理按下Enter鍵的函式
  const handleEnterPress = (event) => {
      if (event.key === 'Enter') {
        filterNumbers();
      }
    };

  // 渲染篩選後的數字
  const renderFilteredNumbers = () => {
    if (filteredResult.length > 0) {
      return filteredResult.join(', ');
    } else {
      return String(filteredResult);
    }
  };

  return (
    <section>
      <div className="min-h-screen flex items-center justify-center bg-blue-400">
        <div className="flex flex-col items-center">
          {/* 輸入框 */}
          <label className="text-md font-bold">
            輸入數字（用逗號分隔）：
            <input
              type="text"
              value={inputArray}
              onChange={handleInputChange}
              onKeyDown={handleEnterPress}
              placeholder="Enter numbers(separated by commas)..."
              className="block p-2 text-sm bg-boxcolor rounded text-gray-900 w-64"
            />
          </label>
           {/* 篩選按鈕 */}
          <button 
            onClick={filterNumbers}
            className="rounded-lg m-2 px-4 py-2 focus:ring-2 bg-slate-700 text-gray-100 hover:bg-gray-900 duration-300"
          >
            Enter
          </button>
           {/* 篩選結果 */}
          <p>大於 5 的數字：{renderFilteredNumbers()}</p>
        </div>
      </div>
    </section>
  );
}

export default Test2;
