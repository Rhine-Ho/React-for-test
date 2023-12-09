import React, { useState, useEffect } from "react";

function Test3() {
  // 重構後的程式碼使用了 useState  Hook 來管理 firstName 和 lastName 的狀態。
  // 使用 useState  Hook 可以有效簡化代碼結構彈性也更高。
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // 單一函式的好處在於，每個函式都專注於單一功能，這樣在需要時能更輕鬆地找到並修改特定的邏輯。
  // 這種分離和模組化的方法使代碼更易讀、更易於理解和維護。
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }; // 處理FirstName變化的函式

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }; // 處理LastName變化的函式

  // 模板字串將 firstName 和 lastName 組合成一個名字字串，並使用 .trim() 方法去除多餘的空格。
  const formattedName = `${firstName} ${lastName}`.trim(); // 模板字串提供了更加方便、清晰和直觀的方法來建立複雜的字串，並使程式碼更具可讀性和維護性。

  // 在組件渲染時打印 formattedName 的值到控制台
  useEffect(() => {
    if (firstName && lastName) {
      console.log("Formatted Name:", formattedName);
    }
  }, [firstName, lastName]);
  //在 useEffect 內部，formattedName 是一個衍生自 firstName 和 lastName 的值。
  //這個衍生值並不會觸發 useEffect 本身，因為 useEffect 的依賴陣列中僅包含了 firstName 和 lastName，而非 formattedName。
  //因此，只有在 firstName 或 lastName 改變且都存在（非空值）的情況下，才會觸發 useEffect 內部的 console.log，而不會因 formattedName 的改變而進入迴圈。

  return (
    <section>
      <div className="min-h-screen flex items-center justify-center bg-blue-400">
        <div className="flex flex-col items-center">
          <div>
            <label className="text-md font-bold">
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                className="block p-2 text-sm bg-boxcolor rounded text-gray-900 w-64"
                placeholder="Enter your first name..."
              />
            </label>
          </div>
          <div>
            <label className="text-md font-bold">
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                className="block p-2 text-sm bg-boxcolor rounded text-gray-900 w-64"
                placeholder="Enter your last name..."
              />
            </label>
          </div>

          <div>
            <h2>Formatted Name:</h2>
            <p className="rounded-lg m-2 px-4 py-2 focus:ring-2 bg-slate-700 text-gray-100 hover:bg-gray-900 duration-300">
              {formattedName}
            </p>
          </div>

          {/* 原始程式碼加註解 */}
          <div className="bg-slate-600 rounded-lg whitespace-pre-line p-6 px-10">
            <h2 className="text-lg text-center font-bold">測試題原始程式碼</h2>
            <div>
              {`
                function formatName(firstName, lastName) {
                  // 用來儲存最終格式化後的名字字串的變數，預設為空值。
                  let formattedName = '';

                  // 通過兩個 if 條件判斷來檢查 firstName 和 lastName 是否存在
                  // 如果 firstName 存在（即不是空值或未定義， 則將 firstName 加入到 formattedName 中。
                  if (firstName) {
                    formattedName += firstName;
                        }

                  // 如果 lastName 存在，同樣地將其加入到 formattedName 中，並在前面加上一個空格。
                  if (lastName) {
                    formattedName += ' ' + lastName;
                        }
                      // 最後，函式返回組合好的 formattedName 字串。
                    return formattedName;
                      }
            `}
            </div>
            <p className="bg-slate-50 break-line w-1/2 mt-2">
              在原始程式碼中，使用了一個獨立的 formatName 函式， 每次 firstName
              或 lastName 改變時都調用一次formatName 函式。 這是因為
              formattedName 是由這個函式計算而來的。
              且原始程式碼透過使用兩個獨立的 if 條件判斷來檢查輸入值的變化。
              每次輸入框的值變化時，都會觸發 formatName
              的執行，即使其中一個輸入框是空的，都會進入迴圈重新計算
              formattedName。 這可能會帶來一些不必要的計算開銷。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Test3;
