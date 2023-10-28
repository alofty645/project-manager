// Sample component data
interface Component {
  name: string;
  price: number;
  eta: number; // ETA in days
}

const components: Component[] = [
  { name: "Component A", price: 50, eta: 14 },
  { name: "Component B", price: 30, eta: 10 },
  { name: "Component C", price: 40, eta: 7 },
  { name: "Component D", price: 40, eta: 7 },
  { name: "Component E", price: 40, eta: 350 },
  // Add more components as needed
];

// Function to calculate component order dates, total price, cost per unit, warnings, and revised due date
function calculateOrderDates(
  manufacturingDate: Date,
  quantity: number,
  productType: string
): {
  orderDates: { component: string; orderDate: string }[];
  totalPrice: number;
  costPerUnit: number;
  warnings: string[];
  revisedDueDate: Date | null;
} {
  const orderDates: { component: string; orderDate: string }[] = [];
  let totalPrice = 0;
  const warnings: string[] = [];
  let revisedDueDate: Date | null = null; // Initialize as null

  // Calculate the current date
  const currentDate = new Date();

  // Initialize the due date as the manufacturing date
  let dueDate = new Date(manufacturingDate.toString());

  // Add your logic here to calculate order dates for each component
  components.forEach((component) => {
    const componentOrderDate = new Date(manufacturingDate.toString());
    componentOrderDate.setDate(manufacturingDate.getDate() - component.eta);

    orderDates.push({
      component: component.name,
      orderDate:
        componentOrderDate <= currentDate
          ? "NOW"
          : componentOrderDate.toDateString(),
    });

    // Check if the component ETA is longer than the time remaining until the due date
    if (componentOrderDate > dueDate) {
      warnings.push(
        `Warning: Component ${component.name} has a longer ETA than the time remaining until the due date.`
      );

      // Adjust the due date to accommodate this component's ETA
      dueDate = new Date(componentOrderDate.toString());
    }

    // Check if the component ETA is in the past (should have been ordered already)
    if (componentOrderDate < currentDate) {
      warnings.push(`Warning: Order ${component.name} ASAP`);
    }

    // Calculate the cost of each component and add it to the total price
    totalPrice += component.price * quantity;
  });

  // Calculate the cost per unit
  const costPerUnit = totalPrice / quantity;

  // Only calculate a revised due date if there are warnings
  if (warnings.length > 0) {
    const maxETA = Math.max(...components.map((component) => component.eta));
    revisedDueDate = new Date(manufacturingDate.toString());
    revisedDueDate.setDate(manufacturingDate.getDate() + maxETA);
  }

  return { orderDates, totalPrice, costPerUnit, warnings, revisedDueDate };
}

// Get user input
const manufacturingDate = new Date("2023-12-04"); // Example manufacturing date
const quantity = 100; // Example quantity
const productType = "Product XYZ"; // Example product type

// Calculate component order dates, total price, cost per unit, warnings, and revised due date
const { orderDates, totalPrice, costPerUnit, warnings, revisedDueDate } =
  calculateOrderDates(manufacturingDate, quantity, productType);

// Display the order dates, total price, cost per unit, warnings, and revised due date to the user
console.log(
  `Total price of manufacturing ${quantity} ${productType}: $${totalPrice}`
);
console.log(`Cost per unit: $${costPerUnit}`);
orderDates.forEach((item) => {
  console.log(`Order ${item.component} by ${item.orderDate}`);
});
if (warnings.length > 0) {
  console.log("Warnings:");
  warnings.forEach((warning) => {
    console.log(warning);
  });
}
if (revisedDueDate) {
  console.log(`Revised due date: ${revisedDueDate.toDateString()}`);
} else {
  console.log(
    `Due date of ${manufacturingDate.toDateString()} can be achieved!`
  );
}
