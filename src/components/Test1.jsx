import React, { useState } from 'react';

function Test1() {

  const [inputString, setInputString] = useState('');// 用於存儲輸入框中的值
  const [reversedString, setReversedString] = useState('');//用於存儲反轉後的字串

    // 函式用於反轉輸入的字串
  const reverseString = (str) => {
    const reversed = str.split('').reverse().join('');
            //將字串轉換成字元的陣列。//將字元陣列反轉順序。//將反轉後的字元陣列組合成一個字串。
      console.log('Reversed String:', reversed);
    return reversed;
  };

  // 處理輸入框內容變化的函式
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputString(value);
  };

  // 處理點擊反轉按鈕的函式
  const handleReverseClick = () => {
    const reversed = reverseString(inputString);
    setReversedString(reversed);
  };

  // 處理按下 Enter 鍵的函式
  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      handleReverseClick();
    }
  };

  return (
    <section>
        <div className="min-h-screen flex items-center justify-center bg-blue-400">
          <div className="flex flex-col items-center">
            {/* 輸入框 */}
            <input
                type="text"
                value={inputString}
                onChange={handleInputChange}
                onKeyDown={handleEnterPress}
                placeholder="Enter a string..."
                className="block p-2 text-sm bg-boxcolor rounded text-gray-900 w-64"

            />
            {/* 反轉按鈕 */}
            <button onClick={handleReverseClick} className="rounded-lg m-2 px-4 py-2 focus:ring-2 bg-slate-700 text-gray-100 hover:bg-gray-900 duration-300">Reverse</button>
            {/* 反轉結果 */}
            <p>Reversed String: {reversedString}</p>
          </div>
        </div>
    </section>
  );
}

export default Test1;
