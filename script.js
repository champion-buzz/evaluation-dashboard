const evals = [
  {
    id: "rag_source",
    check: "Answer includes a source",
    passed: true,
    score: 1,
  },
  {
    id: "tool_choice",
    check: "Agent picks the calculator tool",
    passed: true,
    score: 1,
  },
  {
    id: "fallback",
    check: "Unknown question gets a fallback",
    passed: true,
    score: 1,
  },
  {
    id: "style",
    check: "Answer is short enough for the demo",
    passed: false,
    score: 0.5,
  },
];

const total = evals.length;
const passed = evals.filter((item) => item.passed).length;
const passRate = Math.round((passed / total) * 100);

document.querySelector("#total-cases").textContent = total;
document.querySelector("#passed-cases").textContent = passed;
document.querySelector("#pass-rate").textContent = `${passRate}%`;

const table = document.querySelector("#eval-table");

for (const item of evals) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${item.id}</td>
    <td>${item.check}</td>
    <td><span class="${item.passed ? "pass" : "fail"}">${
      item.passed ? "pass" : "needs work"
    }</span></td>
    <td>${item.score}</td>
  `;
  table.appendChild(row);
}
