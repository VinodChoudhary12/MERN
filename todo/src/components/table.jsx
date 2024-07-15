
import { useState } from "react";

function Table() {
    const [num, setNum] = useState(0);
    const [tableData, setTableData] = useState([]);

    function handleInputChange(e) {
        setNum(Number(e.target.value)); 
    }

    function generateTable() {
        if (num <= 0) {
            setTableData([]);
            return;
        }

        const rows = [];
        for (let i = 1; i <= 10; i++) {
            rows.push({
                multiplier: i,
                result: num * i
            });
        }
        setTableData(rows); // Update state with table data
    }

    return (
        <>
            
            <input
                type="number"
                onChange={handleInputChange}
                placeholder="Enter a number"
                className="border p-2 mb-4"
            />
            <button
                className="bg-orange-500 h-11 mt-3 flex items-center justify-center"
                onClick={generateTable}
            >
                <span className="text-slate-200 p-6 text-center">Generate Table</span>
            </button>

            {tableData.length > 0 && (
                <table className="mt-5 border-collapse border border-gray-400">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2 text-white">Multiplier</th>
                            <th className="border border-gray-400 px-4 py-2 text-white">Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td className="border border-gray-400 px-4 py-2 text-center text-white">{num}*{row.multiplier}</td>
                                <td className="border border-gray-400 px-4 py-2 text-center text-white">{row.result}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default Table;
