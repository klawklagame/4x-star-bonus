const rawData = [
    { "league": "ทองแดง 3", "vals": [125, 6, 500, 24, 1500, 72, 2000, 96] },
    { "league": "ทองแดง 2", "vals": [175, 7, 700, 28, 2100, 84, 2800, 112] },
    { "league": "ทองแดง 1", "vals": [175, 8, 700, 32, 2100, 96, 2800, 128] },
    { "league": "เงิน 3", "vals": [200, 9, 800, 36, 2400, 108, 3200, 144] },
    { "league": "เงิน 2", "vals": [250, 10, 1000, 40, 3000, 120, 4000, 160] },
    { "league": "เงิน 1", "vals": [275, 11, 1100, 44, 3300, 132, 4400, 176] },
    { "league": "ทอง 3", "vals": [300, 12, 1200, 48, 3600, 144, 4800, 192] },
    { "league": "ทอง 2", "vals": [325, 14, 1300, 56, 3900, 168, 5200, 224] },
    { "league": "ทอง 1", "vals": [350, 16, 1400, 64, 4200, 192, 5600, 256] },
    { "league": "คริสตัล 3", "vals": [375, 18, 1500, 72, 4500, 216, 6000, 288] },
    { "league": "คริสตัล 2", "vals": [400, 20, 1600, 80, 4800, 240, 6400, 320] },
    { "league": "คริสตัล 1", "vals": [425, 22, 1700, 88, 5100, 264, 6800, 352] },
    { "league": "ยอดฝีมือ 3", "vals": [450, 24, 1800, 96, 5400, 288, 7200, 384] },
    { "league": "ยอดฝีมือ 2", "vals": [500, 26, 2000, 104, 6000, 312, 8000, 416] },
    { "league": "ยอดฝีมือ 1", "vals": [525, 28, 2100, 112, 6300, 336, 8400, 448] },
    { "league": "แชมเปียน 3", "vals": [550, 30, 2200, 120, 6600, 360, 8800, 480] },
    { "league": "แชมเปียน 2", "vals": [625, 34, 2500, 136, 7500, 408, 10000, 544] },
    { "league": "แชมเปียน 1", "vals": [700, 38, 2800, 152, 8400, 456, 11200, 608] },
    { "league": "ยักษ์ใหญ่ 3", "vals": [775, 42, 3100, 168, 9300, 504, 12400, 672] },
    { "league": "ยักษ์ใหญ่ 2", "vals": [850, 46, 3400, 184, 10200, 552, 13600, 736] },
    { "league": "ยักษ์ใหญ่ 1", "vals": [925, 50, 3700, 200, 11100, 600, 14800, 800] },
    { "league": "ตำนาน", "vals": [1000, 54, 4000, 216, 12000, 648, 16000, 864] }
];

function populateTable() {
    const tableBody = document.getElementById('data-table');
    let tableHTML = '';

    rawData.forEach(item => {
        tableHTML += `<tr class="hover:bg-gray-700/50 transition-colors duration-200 ease-in-out">`;
        tableHTML += `<td class="whitespace-nowrap py-4 px-4 text-sm font-medium text-white">${item.league}</td>`;
        item.vals.forEach(val => {
            tableHTML += `<td class="whitespace-nowrap py-4 px-4 text-sm text-gray-300">${val.toLocaleString('th-TH')}</td>`;
        });
        tableHTML += `</tr>`;
    });

    tableBody.innerHTML = tableHTML;
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', populateTable);