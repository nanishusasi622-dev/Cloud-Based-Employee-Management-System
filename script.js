const STORAGE_KEY = "cloudEmployeeRecords";

let employees = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const form = document.getElementById("employeeForm");
const table = document.getElementById("employeeTable");
const search = document.getElementById("search");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const employee = {
        id: Date.now(),
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        department: document.getElementById("department").value.trim(),
        role: document.getElementById("role").value.trim(),
        status: document.getElementById("status").value
    };

    employees.push(employee);
    saveData();
    form.reset();
    renderEmployees();
});

search.addEventListener("input", renderEmployees);

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
}

function deleteEmployee(id) {
    if (confirm("Delete this employee record?")) {
        employees = employees.filter(employee => employee.id !== id);
        saveData();
        renderEmployees();
    }
}

function renderEmployees() {
    const keyword = search.value.toLowerCase();

    const filtered = employees.filter(employee =>
        employee.name.toLowerCase().includes(keyword) ||
        employee.email.toLowerCase().includes(keyword) ||
        employee.department.toLowerCase().includes(keyword) ||
        employee.role.toLowerCase().includes(keyword)
    );

    table.innerHTML = "";

    filtered.forEach(employee => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${escapeHtml(employee.name)}</td>
            <td>${escapeHtml(employee.email)}</td>
            <td>${escapeHtml(employee.department)}</td>
            <td>${escapeHtml(employee.role)}</td>
            <td><span class="badge ${employee.status === "Active" ? "active" : "inactive"}">${employee.status}</span></td>
            <td><button class="delete" onclick="deleteEmployee(${employee.id})">Delete</button></td>
        `;
        table.appendChild(row);
    });

    document.getElementById("emptyMessage").style.display =
        filtered.length === 0 ? "block" : "none";

    updateStats();
}

function updateStats() {
    document.getElementById("totalEmployees").textContent = employees.length;
    document.getElementById("activeEmployees").textContent =
        employees.filter(e => e.status === "Active").length;
    document.getElementById("totalDepartments").textContent =
        new Set(employees.map(e => e.department.toLowerCase())).size;
}

function escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
}

renderEmployees();
