import React from "react";

const Table = () => {
    const dataTable = [
        {
            name: 'ahmad zaki',
            kelas: '5',
        },
        {
            name: 'takiya genji',
            kelas: '4',
        },
        {
            name: 'takiya genji',
            kelas: '4',
        },
        {
            name: 'takiya genji',
            kelas: '4',
        }
    ]
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No.
            </th>
            <th scope="col" className="px-6 py-3">
              nama
            </th>
            <th scope="col" className="px-6 py-3">
              kelas
            </th>
          </tr>
        </thead>
        <tbody>
            {dataTable.map((item, index) => {
                return (
                <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.kelas}</td>
                </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
