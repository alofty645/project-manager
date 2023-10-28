var components = [
    { name: "Component A", price: 50, eta: 14 },
    { name: "Component B", price: 30, eta: 10 },
    { name: "Component C", price: 40, eta: 7 },
    { name: "Component D", price: 40, eta: 7 },
    { name: "Component E", price: 40, eta: 350 },
    // Add more components as needed
];
// Function to calculate component order dates, total price, cost per unit, warnings, and revised due date
function calculateOrderDates(manufacturingDate, quantity, productType) {
    var orderDates = [];
    var totalPrice = 0;
    var warnings = [];
    var revisedDueDate = null; // Initialize as null
    // Calculate the current date
    var currentDate = new Date();
    // Initialize the due date as the manufacturing date
    var dueDate = new Date(manufacturingDate.toString());
    // Add your logic here to calculate order dates for each component
    components.forEach(function (component) {
        var componentOrderDate = new Date(manufacturingDate.toString());
        componentOrderDate.setDate(manufacturingDate.getDate() - component.eta);
        orderDates.push({
            component: component.name,
            orderDate: componentOrderDate <= currentDate
                ? "NOW"
                : componentOrderDate.toDateString(),
        });
        // Check if the component ETA is longer than the time remaining until the due date
        if (componentOrderDate > dueDate) {
            warnings.push("Warning: Component ".concat(component.name, " has a longer ETA than the time remaining until the due date."));
            // Adjust the due date to accommodate this component's ETA
            dueDate = new Date(componentOrderDate.toString());
        }
        // Check if the component ETA is in the past (should have been ordered already)
        if (componentOrderDate < currentDate) {
            warnings.push("Warning: Order ".concat(component.name, " ASAP"));
        }
        // Calculate the cost of each component and add it to the total price
        totalPrice += component.price * quantity;
    });
    // Calculate the cost per unit
    var costPerUnit = totalPrice / quantity;
    // Only calculate a revised due date if there are warnings
    if (warnings.length > 0) {
        var maxETA = Math.max.apply(Math, components.map(function (component) { return component.eta; }));
        revisedDueDate = new Date(manufacturingDate.toString());
        revisedDueDate.setDate(manufacturingDate.getDate() + maxETA);
    }
    return { orderDates: orderDates, totalPrice: totalPrice, costPerUnit: costPerUnit, warnings: warnings, revisedDueDate: revisedDueDate };
}
// Get user input
var manufacturingDate = new Date("2023-12-04"); // Example manufacturing date
var quantity = 100; // Example quantity
var productType = "Product XYZ"; // Example product type
// Calculate component order dates, total price, cost per unit, warnings, and revised due date
var _a = calculateOrderDates(manufacturingDate, quantity, productType), orderDates = _a.orderDates, totalPrice = _a.totalPrice, costPerUnit = _a.costPerUnit, warnings = _a.warnings, revisedDueDate = _a.revisedDueDate;
// Display the order dates, total price, cost per unit, warnings, and revised due date to the user
console.log("Total price of manufacturing ".concat(quantity, " ").concat(productType, ": $").concat(totalPrice));
console.log("Cost per unit: $".concat(costPerUnit));
orderDates.forEach(function (item) {
    console.log("Order ".concat(item.component, " by ").concat(item.orderDate));
});
if (warnings.length > 0) {
    console.log("Warnings:");
    warnings.forEach(function (warning) {
        console.log(warning);
    });
}
if (revisedDueDate) {
    console.log("Revised due date: ".concat(revisedDueDate.toDateString()));
}
else {
    console.log("Due date of ".concat(manufacturingDate.toDateString(), " can be achieved!"));
}
